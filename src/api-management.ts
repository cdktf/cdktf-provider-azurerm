// https://www.terraform.io/docs/providers/azurerm/r/api_management.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ApiManagementConfig extends TerraformMetaArguments {
  readonly location: string;
  readonly name: string;
  readonly notificationSenderEmail?: string;
  readonly policy?: ApiManagementPolicy[];
  readonly publisherEmail: string;
  readonly publisherName: string;
  readonly resourceGroupName: string;
  readonly skuName: string;
  readonly tags?: { [key: string]: string };
  /** additional_location block */
  readonly additionalLocation?: ApiManagementAdditionalLocation[];
  /** certificate block */
  readonly certificate?: ApiManagementCertificate[];
  /** hostname_configuration block */
  readonly hostnameConfiguration?: ApiManagementHostnameConfiguration[];
  /** identity block */
  readonly identity?: ApiManagementIdentity[];
  /** protocols block */
  readonly protocols?: ApiManagementProtocols[];
  /** security block */
  readonly security?: ApiManagementSecurity[];
  /** sign_in block */
  readonly signIn?: ApiManagementSignIn[];
  /** sign_up block */
  readonly signUp?: ApiManagementSignUp[];
  /** timeouts block */
  readonly timeouts?: ApiManagementTimeouts;
}
export interface ApiManagementPolicy {
  readonly xmlContent?: string;
  readonly xmlLink?: string;
}
export interface ApiManagementAdditionalLocation {
  readonly location: string;
}
export interface ApiManagementCertificate {
  readonly certificatePassword: string;
  readonly encodedCertificate: string;
  readonly storeName: string;
}
export interface ApiManagementHostnameConfigurationManagement {
  readonly certificate?: string;
  readonly certificatePassword?: string;
  readonly hostName: string;
  readonly keyVaultId?: string;
  readonly negotiateClientCertificate?: boolean;
}
export interface ApiManagementHostnameConfigurationPortal {
  readonly certificate?: string;
  readonly certificatePassword?: string;
  readonly hostName: string;
  readonly keyVaultId?: string;
  readonly negotiateClientCertificate?: boolean;
}
export interface ApiManagementHostnameConfigurationProxy {
  readonly certificate?: string;
  readonly certificatePassword?: string;
  readonly defaultSslBinding?: boolean;
  readonly hostName: string;
  readonly keyVaultId?: string;
  readonly negotiateClientCertificate?: boolean;
}
export interface ApiManagementHostnameConfigurationScm {
  readonly certificate?: string;
  readonly certificatePassword?: string;
  readonly hostName: string;
  readonly keyVaultId?: string;
  readonly negotiateClientCertificate?: boolean;
}
export interface ApiManagementHostnameConfiguration {
  /** management block */
  readonly management?: ApiManagementHostnameConfigurationManagement[];
  /** portal block */
  readonly portal?: ApiManagementHostnameConfigurationPortal[];
  /** proxy block */
  readonly proxy?: ApiManagementHostnameConfigurationProxy[];
  /** scm block */
  readonly scm?: ApiManagementHostnameConfigurationScm[];
}
export interface ApiManagementIdentity {
  readonly type: string;
}
export interface ApiManagementProtocols {
  readonly enableHttp2?: boolean;
}
export interface ApiManagementSecurity {
  readonly enableBackendSsl30?: boolean;
  readonly enableBackendTls10?: boolean;
  readonly enableBackendTls11?: boolean;
  readonly enableFrontendSsl30?: boolean;
  readonly enableFrontendTls10?: boolean;
  readonly enableFrontendTls11?: boolean;
  readonly enableTripleDesCiphers?: boolean;
}
export interface ApiManagementSignIn {
  readonly enabled: boolean;
}
export interface ApiManagementSignUpTermsOfService {
  readonly consentRequired: boolean;
  readonly enabled: boolean;
  readonly text?: string;
}
export interface ApiManagementSignUp {
  readonly enabled: boolean;
  /** terms_of_service block */
  readonly termsOfService: ApiManagementSignUpTermsOfService[];
}
export interface ApiManagementTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class ApiManagement extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ApiManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._notificationSenderEmail = config.notificationSenderEmail;
    this._policy = config.policy;
    this._publisherEmail = config.publisherEmail;
    this._publisherName = config.publisherName;
    this._resourceGroupName = config.resourceGroupName;
    this._skuName = config.skuName;
    this._tags = config.tags;
    this._additionalLocation = config.additionalLocation;
    this._certificate = config.certificate;
    this._hostnameConfiguration = config.hostnameConfiguration;
    this._identity = config.identity;
    this._protocols = config.protocols;
    this._security = config.security;
    this._signIn = config.signIn;
    this._signUp = config.signUp;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gateway_regional_url - computed: true, optional: false, required: true
  public get gatewayRegionalUrl() {
    return this.getStringAttribute('gateway_regional_url');
  }

  // gateway_url - computed: true, optional: false, required: true
  public get gatewayUrl() {
    return this.getStringAttribute('gateway_url');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // management_api_url - computed: true, optional: false, required: true
  public get managementApiUrl() {
    return this.getStringAttribute('management_api_url');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // notification_sender_email - computed: true, optional: true, required: false
  private _notificationSenderEmail?: string;
  public get notificationSenderEmail() {
    return this._notificationSenderEmail ?? this.getStringAttribute('notification_sender_email');
  }
  public set notificationSenderEmail(value: string | undefined) {
    this._notificationSenderEmail = value;
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: ApiManagementPolicy[]
  public get policy(): ApiManagementPolicy[] | undefined {
    return this._policy; // Getting the computed value is not yet implemented
  }
  public set policy(value: ApiManagementPolicy[] | undefined) {
    this._policy = value;
  }

  // portal_url - computed: true, optional: false, required: true
  public get portalUrl() {
    return this.getStringAttribute('portal_url');
  }

  // public_ip_addresses - computed: true, optional: false, required: true
  public get publicIpAddresses() {
    return this.getListAttribute('public_ip_addresses');
  }

  // publisher_email - computed: false, optional: false, required: true
  private _publisherEmail: string;
  public get publisherEmail() {
    return this._publisherEmail;
  }
  public set publisherEmail(value: string) {
    this._publisherEmail = value;
  }

  // publisher_name - computed: false, optional: false, required: true
  private _publisherName: string;
  public get publisherName() {
    return this._publisherName;
  }
  public set publisherName(value: string) {
    this._publisherName = value;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this._resourceGroupName;
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }

  // scm_url - computed: true, optional: false, required: true
  public get scmUrl() {
    return this.getStringAttribute('scm_url');
  }

  // sku_name - computed: false, optional: false, required: true
  private _skuName: string;
  public get skuName() {
    return this._skuName;
  }
  public set skuName(value: string) {
    this._skuName = value;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this._tags;
  }
  public set tags(value: { [key: string]: string } | undefined) {
    this._tags = value;
  }

  // additional_location - computed: false, optional: true, required: false
  private _additionalLocation?: ApiManagementAdditionalLocation[];
  public get additionalLocation() {
    return this._additionalLocation;
  }
  public set additionalLocation(value: ApiManagementAdditionalLocation[] | undefined) {
    this._additionalLocation = value;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: ApiManagementCertificate[];
  public get certificate() {
    return this._certificate;
  }
  public set certificate(value: ApiManagementCertificate[] | undefined) {
    this._certificate = value;
  }

  // hostname_configuration - computed: false, optional: true, required: false
  private _hostnameConfiguration?: ApiManagementHostnameConfiguration[];
  public get hostnameConfiguration() {
    return this._hostnameConfiguration;
  }
  public set hostnameConfiguration(value: ApiManagementHostnameConfiguration[] | undefined) {
    this._hostnameConfiguration = value;
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: ApiManagementIdentity[];
  public get identity() {
    return this._identity;
  }
  public set identity(value: ApiManagementIdentity[] | undefined) {
    this._identity = value;
  }

  // protocols - computed: false, optional: true, required: false
  private _protocols?: ApiManagementProtocols[];
  public get protocols() {
    return this._protocols;
  }
  public set protocols(value: ApiManagementProtocols[] | undefined) {
    this._protocols = value;
  }

  // security - computed: false, optional: true, required: false
  private _security?: ApiManagementSecurity[];
  public get security() {
    return this._security;
  }
  public set security(value: ApiManagementSecurity[] | undefined) {
    this._security = value;
  }

  // sign_in - computed: false, optional: true, required: false
  private _signIn?: ApiManagementSignIn[];
  public get signIn() {
    return this._signIn;
  }
  public set signIn(value: ApiManagementSignIn[] | undefined) {
    this._signIn = value;
  }

  // sign_up - computed: false, optional: true, required: false
  private _signUp?: ApiManagementSignUp[];
  public get signUp() {
    return this._signUp;
  }
  public set signUp(value: ApiManagementSignUp[] | undefined) {
    this._signUp = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ApiManagementTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ApiManagementTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      name: this._name,
      notification_sender_email: this._notificationSenderEmail,
      policy: this._policy,
      publisher_email: this._publisherEmail,
      publisher_name: this._publisherName,
      resource_group_name: this._resourceGroupName,
      sku_name: this._skuName,
      tags: this._tags,
      additional_location: this._additionalLocation,
      certificate: this._certificate,
      hostname_configuration: this._hostnameConfiguration,
      identity: this._identity,
      protocols: this._protocols,
      security: this._security,
      sign_in: this._signIn,
      sign_up: this._signUp,
      timeouts: this._timeouts,
    };
  }
}
