function ProfileCard() {
    return (
        <>
            <div class="profile-container" style="display: none;">
                <div class="profile-card">
                    <div class="card-border">
                        <img src="" alt
                            class="profile-img" />
                    </div>

                    <h3 class="card-name">Ashutosh Jha</h3>
                    <div class="card_social" id="card-social">
                        <div class="card_social-control">

                            <div class="card_social-toggle" id="card-toggle">
                                <i class="ri-add-line"></i>
                            </div>

                            <span class="card_social-text">My social
                                networks</span>

                            <ul class="card_social-lists">
                                <a
                                    href="https://www.linkedin.com/in/ashutosh-jha-68a525340/"
                                    target="_blank" class="card_social-link">
                                    <i class="ri-linkedin-line"></i>
                                </a>

                                <a href="https://github.com/ashutoshJha-2025"
                                    target="_blank" class="card_social-link">
                                    <i class="ri-github-fill"></i>
                                </a>

                                <a href="https://leetcode.com/u/Ashutosh054/"
                                    target="_blank" class="card_social-link">
                                    <img src="/images/social logo leetcode.webp"
                                        alt />
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileCard;
