import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';



export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [likes, setLikes] = useState([]);
  const router = useNavigate(); // استفاده از useRouter از next/navigation
  
  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    if (!storedUsers) {
      localStorage.setItem('users', JSON.stringify([]));
    }
  }, []);

  // بارگذاری کاربر و داده‌های مرتبط با او از localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      loadCart(parsedUser.id);
      loadLikes(parsedUser.id);
    }
  }, []);

  // بارگذاری سبد خرید کاربر
  const loadCart = (userId) => {
    const storedCart = localStorage.getItem(`cart_${userId}`);
    const storedTotalPrice = localStorage.getItem(`totalPrice_${userId}`);

    if (storedCart) {
      setCart(JSON.parse(storedCart));
    } else {
      setCart([]);
    }

    if (storedTotalPrice) {
      setTotalPrice(parseFloat(storedTotalPrice));
    } else {
      setTotalPrice(0);
    }
  };

  // بارگذاری لیست علاقه‌مندی‌های کاربر
  const loadLikes = (userId) => {
    const storedLikes = localStorage.getItem(`likes_${userId}`);

    if (storedLikes) {
      setLikes(JSON.parse(storedLikes));
    } else {
      setLikes([]);
    }
  };

  // ثبت‌نام کاربر جدید
  const registerUser = (userData) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const existingUser = users.find((u) => u.email === userData.email);
    if (existingUser) {
      setError('ایمیل قبلاً ثبت شده است.');
      toast.error('ایمیل قبلاً ثبت شده است.', {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }

    if (!userData.email || !userData.password) {
      setError('ایمیل و رمز عبور الزامی هستند.');
      toast.error('ایمیل و رمز عبور الزامی هستند.', {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }

    const newUser = { ...userData, id: Date.now() };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    setUser(newUser);
    setError(null);
    localStorage.setItem('user', JSON.stringify(newUser));
    toast.success('ثبت‌نام موفقیت‌آمیز بود!', {
      position: "top-center",
      autoClose: 1500,
    });
    router.push('/');

  };

  // ورود کاربر
  const loginUser = (email, password) => {
    return new Promise((resolve) => {
      const users = JSON.parse(localStorage.getItem('users')) || [];

      const existingUser = users.find(
        (u) => u.email === email && u.password === password
      );

      if (existingUser) {
        setUser(existingUser);
        setError(null);
        localStorage.setItem('user', JSON.stringify(existingUser));
        loadCart(existingUser.id);
        loadLikes(existingUser.id);
        toast.success('ورود موفقیت‌آمیز بود!', {
          position: "top-center",
          autoClose: 1500,
        });
        router.push('/');

        resolve(true);
      } else {
        setError('ایمیل یا رمز عبور اشتباه است.');
        toast.error('ایمیل یا رمز عبور اشتباه است.', {
          position: "top-center",
          autoClose: 2000,
        });
        resolve(false);
      }
    });
  };

  // خروج کاربر
  const logoutUser = () => {
    if (user) {
      localStorage.removeItem(`cart_${user.id}`);
      localStorage.removeItem(`totalPrice_${user.id}`);
      localStorage.removeItem(`likes_${user.id}`);
    }

    setUser(null);
    setError(null);
    setCart([]);
    setTotalPrice(0);
    setLikes([]);
    localStorage.removeItem('user');

    toast.info('شما با موفقیت خارج شدید.', {
      position: "top-center",
      autoClose: 1500,
    });
    router('/login');
  };

  // اضافه کردن محصول به سبد خرید
  const addToCart = (product) => {
    if (!user) {
      Swal.fire('خطا', 'ابتدا وارد حسابتان شوید.', 'warning');
      return;
    }

    const existingProduct = cart.find(item => item.id === product.id);
    let updatedCart;

    if (existingProduct) {
      updatedCart = cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    const updatedTotalPrice = updatedCart.reduce(
      (acc, item) => acc + parseFloat(item.price) * item.quantity,
      0
    );

    setCart(updatedCart);
    setTotalPrice(updatedTotalPrice);

    localStorage.setItem(`cart_${user.id}`, JSON.stringify(updatedCart));
    localStorage.setItem(`totalPrice_${user.id}`, updatedTotalPrice.toString());

    toast.success('محصول به سبد خرید اضافه شد!', {
      position: "top-center",
      autoClose: 2000,
    });
  };

  // به‌روزرسانی اطلاعات کاربر
  const updateUser = (updatedUserData) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const updatedUsers = users.map(u =>
      u.id === user.id ? { ...u, ...updatedUserData } : u
    );

    localStorage.setItem('users', JSON.stringify(updatedUsers));

    const updatedUser = { ...user, ...updatedUserData };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));

    toast.success('اطلاعات با موفقیت ذخیره شد!', {
      position: "top-center",
      autoClose: 1500,
    });
  };

  // اضافه کردن محصول به علاقه‌مندی‌ها
  const addToLikes = (product) => {
    if (!user) {
      Swal.fire('خطا', 'ابتدا وارد حسابتان شوید.', 'warning');
      return;
    }

    const isAlreadyLiked = likes.some(item => item.id === product.id);

    if (isAlreadyLiked) {
      Swal.fire('خطا', 'این محصول قبلاً به علاقه‌مندی‌ها اضافه شده است.', 'warning');
      return;
    }

    const updatedLikes = [...likes, product];
    setLikes(updatedLikes);
    localStorage.setItem(`likes_${user.id}`, JSON.stringify(updatedLikes));

    toast.success('محصول به علاقه‌مندی‌ها اضافه شد!', {
      position: "top-center",
      autoClose: 1000,
    });
  };

  useEffect(() => {
    const storedLikes = localStorage.getItem(`likes_${user?.id}`);
    if (storedLikes) {
      setLikes(JSON.parse(storedLikes));
    }
  }, [user]);

  const removeFromLikes = (product) => {
    if (!user) {
      Swal.fire('خطا', 'ابتدا وارد حسابتان شوید.', 'warning');
      return;
    }

    const existingProduct = likes.find(item => item.id === product.id);
    if (!existingProduct) {
      Swal.fire('خطا', 'این محصول در لیست پسندهای شما وجود ندارد.', 'warning');
      return;
    }

    // حذف محصول از لیست پسندها
    const updatedLikes = likes.filter(item => item.id !== product.id);

    // به روزرسانی حالت و localStorage
    setLikes(updatedLikes);
    localStorage.setItem(`likes_${user.id}`, JSON.stringify(updatedLikes));

    toast.success('محصول از لیست پسندها حذف شد!', {
      position: "top-center",
      autoClose: 2000,
    });
  };


useEffect(() => {
  const storedCart = localStorage.getItem('cart');
  const storedTotalPrice = localStorage.getItem('totalPrice');

  if (storedCart) {
    setCart(JSON.parse(storedCart));
  }

  if (storedTotalPrice) {
    setTotalPrice(parseFloat(storedTotalPrice));
  }
}, []);

const updateCartItemQuantity = (productId, delta) => {
  const existingProduct = cart.find(item => item.id === productId);

  if (existingProduct) {
    let updatedCart;
    let updatedTotalPrice;

    if (existingProduct.quantity + delta > 0) {
      // به‌روزرسانی تعداد محصول
      updatedCart = cart.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity + delta }
          : item
      );
    } else {
      // حذف محصول از سبد خرید اگر تعداد به صفر برسد
      updatedCart = cart.filter(item => item.id !== productId);
    }

    // محاسبه قیمت کل
    updatedTotalPrice = updatedCart.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0);

    // به‌روزرسانی حالت‌ها
    setCart(updatedCart);
    setTotalPrice(updatedTotalPrice);

    // ذخیره‌سازی به localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    localStorage.setItem('totalPrice', updatedTotalPrice.toString());

    // نمایش پیام موفقیت
    toast.success('تعداد محصول به‌روزرسانی شد!', {
      position: "top-center",
      autoClose: 1000,
    });
  }
};
  // حذف محصول از سبد خرید
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedCart = JSON.parse(localStorage.getItem(`cart_${storedUser?.id}`)) || [];
    const storedTotalPrice = parseFloat(localStorage.getItem(`totalPrice_${storedUser?.id}`)) || 0;

    console.log("Loaded from localStorage:", storedCart, storedTotalPrice);
    
    setUser(storedUser);
    setCart(storedCart);
    setTotalPrice(storedTotalPrice);
  }, []);

  // بروزرسانی localStorage در هر تغییر در سبد خرید یا قیمت کل
  useEffect(() => {
    if (user) {
      console.log("Updating localStorage:", cart, totalPrice);
      localStorage.setItem(`cart_${user.id}`, JSON.stringify(cart));
      localStorage.setItem(`totalPrice_${user.id}`, totalPrice.toString());
    }
  }, [cart, totalPrice, user]);

  const removeFromCart = (product) => {
    if (!user) {
      Swal.fire('خطا', 'ابتدا وارد حسابتان شوید.', 'warning');
      return;
    }
  
    const existingProduct = cart.find(item => item.id === product.id);
    if (!existingProduct) {
      Swal.fire('خطا', 'این محصول در سبد خرید شما وجود ندارد.', 'warning');
      return;
    }

    // اگر تعداد بیشتر از یک باشد، کاهش می‌یابد وگرنه از سبد حذف می‌شود
    let updatedCart;
    if (existingProduct.quantity > 1) {
      updatedCart = cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    } else {
      updatedCart = cart.filter(item => item.id !== product.id);
    }
  
    // محاسبه‌ی قیمت کل
    const updatedTotalPrice = updatedCart.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0);
  
    // بروزرسانی سبد خرید و قیمت کل
    setCart(updatedCart);
    setTotalPrice(updatedTotalPrice);

    // بروزرسانی localStorage و حذف از آن
    console.log("Final cart and price:", updatedCart, updatedTotalPrice);
    localStorage.setItem(`cart_${user.id}`, JSON.stringify(updatedCart));
    localStorage.setItem(`totalPrice_${user.id}`, updatedTotalPrice.toString());

    toast.success('محصول از سبد خرید حذف شد!', {
      position: "top-center",
      autoClose: 2000,
    });
  };
  
  

  return (
    <UserContext.Provider value={{
      user, error, cart, totalPrice, likes,
      registerUser, loginUser, logoutUser,removeFromLikes,
      addToCart, removeFromCart, updateUser, addToLikes,updateCartItemQuantity
    }}>
      {children}
    </UserContext.Provider>
  );
};
