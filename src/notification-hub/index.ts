// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/notification_hub
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationHubConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/notification_hub#id NotificationHub#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/notification_hub#location NotificationHub#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/notification_hub#name NotificationHub#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/notification_hub#namespace_name NotificationHub#namespace_name}
  */
  readonly namespaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/notification_hub#resource_group_name NotificationHub#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/notification_hub#tags NotificationHub#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * apns_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/notification_hub#apns_credential NotificationHub#apns_credential}
  */
  readonly apnsCredential?: NotificationHubApnsCredential;
  /**
  * browser_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/notification_hub#browser_credential NotificationHub#browser_credential}
  */
  readonly browserCredential?: NotificationHubBrowserCredential;
  /**
  * gcm_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/notification_hub#gcm_credential NotificationHub#gcm_credential}
  */
  readonly gcmCredential?: NotificationHubGcmCredential;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/notification_hub#timeouts NotificationHub#timeouts}
  */
  readonly timeouts?: NotificationHubTimeouts;
}
export interface NotificationHubApnsCredential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/notification_hub#application_mode NotificationHub#application_mode}
  */
  readonly applicationMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/notification_hub#bundle_id NotificationHub#bundle_id}
  */
  readonly bundleId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/notification_hub#key_id NotificationHub#key_id}
  */
  readonly keyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/notification_hub#team_id NotificationHub#team_id}
  */
  readonly teamId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/notification_hub#token NotificationHub#token}
  */
  readonly token: string;
}

export function notificationHubApnsCredentialToTerraform(struct?: NotificationHubApnsCredentialOutputReference | NotificationHubApnsCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_mode: cdktf.stringToTerraform(struct!.applicationMode),
    bundle_id: cdktf.stringToTerraform(struct!.bundleId),
    key_id: cdktf.stringToTerraform(struct!.keyId),
    team_id: cdktf.stringToTerraform(struct!.teamId),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function notificationHubApnsCredentialToHclTerraform(struct?: NotificationHubApnsCredentialOutputReference | NotificationHubApnsCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_mode: {
      value: cdktf.stringToHclTerraform(struct!.applicationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bundle_id: {
      value: cdktf.stringToHclTerraform(struct!.bundleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    team_id: {
      value: cdktf.stringToHclTerraform(struct!.teamId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationHubApnsCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationHubApnsCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationMode = this._applicationMode;
    }
    if (this._bundleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundleId = this._bundleId;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._teamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamId = this._teamId;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationHubApnsCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applicationMode = undefined;
      this._bundleId = undefined;
      this._keyId = undefined;
      this._teamId = undefined;
      this._token = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applicationMode = value.applicationMode;
      this._bundleId = value.bundleId;
      this._keyId = value.keyId;
      this._teamId = value.teamId;
      this._token = value.token;
    }
  }

  // application_mode - computed: false, optional: false, required: true
  private _applicationMode?: string; 
  public get applicationMode() {
    return this.getStringAttribute('application_mode');
  }
  public set applicationMode(value: string) {
    this._applicationMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationModeInput() {
    return this._applicationMode;
  }

  // bundle_id - computed: false, optional: false, required: true
  private _bundleId?: string; 
  public get bundleId() {
    return this.getStringAttribute('bundle_id');
  }
  public set bundleId(value: string) {
    this._bundleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleIdInput() {
    return this._bundleId;
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // team_id - computed: false, optional: false, required: true
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface NotificationHubBrowserCredential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/notification_hub#subject NotificationHub#subject}
  */
  readonly subject: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/notification_hub#vapid_private_key NotificationHub#vapid_private_key}
  */
  readonly vapidPrivateKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/notification_hub#vapid_public_key NotificationHub#vapid_public_key}
  */
  readonly vapidPublicKey: string;
}

export function notificationHubBrowserCredentialToTerraform(struct?: NotificationHubBrowserCredentialOutputReference | NotificationHubBrowserCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subject: cdktf.stringToTerraform(struct!.subject),
    vapid_private_key: cdktf.stringToTerraform(struct!.vapidPrivateKey),
    vapid_public_key: cdktf.stringToTerraform(struct!.vapidPublicKey),
  }
}


export function notificationHubBrowserCredentialToHclTerraform(struct?: NotificationHubBrowserCredentialOutputReference | NotificationHubBrowserCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vapid_private_key: {
      value: cdktf.stringToHclTerraform(struct!.vapidPrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vapid_public_key: {
      value: cdktf.stringToHclTerraform(struct!.vapidPublicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationHubBrowserCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationHubBrowserCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._vapidPrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.vapidPrivateKey = this._vapidPrivateKey;
    }
    if (this._vapidPublicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.vapidPublicKey = this._vapidPublicKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationHubBrowserCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subject = undefined;
      this._vapidPrivateKey = undefined;
      this._vapidPublicKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subject = value.subject;
      this._vapidPrivateKey = value.vapidPrivateKey;
      this._vapidPublicKey = value.vapidPublicKey;
    }
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // vapid_private_key - computed: false, optional: false, required: true
  private _vapidPrivateKey?: string; 
  public get vapidPrivateKey() {
    return this.getStringAttribute('vapid_private_key');
  }
  public set vapidPrivateKey(value: string) {
    this._vapidPrivateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vapidPrivateKeyInput() {
    return this._vapidPrivateKey;
  }

  // vapid_public_key - computed: false, optional: false, required: true
  private _vapidPublicKey?: string; 
  public get vapidPublicKey() {
    return this.getStringAttribute('vapid_public_key');
  }
  public set vapidPublicKey(value: string) {
    this._vapidPublicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vapidPublicKeyInput() {
    return this._vapidPublicKey;
  }
}
export interface NotificationHubGcmCredential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/notification_hub#api_key NotificationHub#api_key}
  */
  readonly apiKey: string;
}

export function notificationHubGcmCredentialToTerraform(struct?: NotificationHubGcmCredentialOutputReference | NotificationHubGcmCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
  }
}


export function notificationHubGcmCredentialToHclTerraform(struct?: NotificationHubGcmCredentialOutputReference | NotificationHubGcmCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationHubGcmCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotificationHubGcmCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationHubGcmCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
    }
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }
}
export interface NotificationHubTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/notification_hub#create NotificationHub#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/notification_hub#delete NotificationHub#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/notification_hub#read NotificationHub#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/notification_hub#update NotificationHub#update}
  */
  readonly update?: string;
}

export function notificationHubTimeoutsToTerraform(struct?: NotificationHubTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function notificationHubTimeoutsToHclTerraform(struct?: NotificationHubTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationHubTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NotificationHubTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationHubTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/notification_hub azurerm_notification_hub}
*/
export class NotificationHub extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_notification_hub";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationHub resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationHub to import
  * @param importFromId The id of the existing NotificationHub that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/notification_hub#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationHub to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_notification_hub", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/notification_hub azurerm_notification_hub} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationHubConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationHubConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_notification_hub',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '4.3.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._namespaceName = config.namespaceName;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._apnsCredential.internalValue = config.apnsCredential;
    this._browserCredential.internalValue = config.browserCredential;
    this._gcmCredential.internalValue = config.gcmCredential;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName?: string; 
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceNameInput() {
    return this._namespaceName;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // apns_credential - computed: false, optional: true, required: false
  private _apnsCredential = new NotificationHubApnsCredentialOutputReference(this, "apns_credential");
  public get apnsCredential() {
    return this._apnsCredential;
  }
  public putApnsCredential(value: NotificationHubApnsCredential) {
    this._apnsCredential.internalValue = value;
  }
  public resetApnsCredential() {
    this._apnsCredential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnsCredentialInput() {
    return this._apnsCredential.internalValue;
  }

  // browser_credential - computed: false, optional: true, required: false
  private _browserCredential = new NotificationHubBrowserCredentialOutputReference(this, "browser_credential");
  public get browserCredential() {
    return this._browserCredential;
  }
  public putBrowserCredential(value: NotificationHubBrowserCredential) {
    this._browserCredential.internalValue = value;
  }
  public resetBrowserCredential() {
    this._browserCredential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserCredentialInput() {
    return this._browserCredential.internalValue;
  }

  // gcm_credential - computed: false, optional: true, required: false
  private _gcmCredential = new NotificationHubGcmCredentialOutputReference(this, "gcm_credential");
  public get gcmCredential() {
    return this._gcmCredential;
  }
  public putGcmCredential(value: NotificationHubGcmCredential) {
    this._gcmCredential.internalValue = value;
  }
  public resetGcmCredential() {
    this._gcmCredential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcmCredentialInput() {
    return this._gcmCredential.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NotificationHubTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NotificationHubTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      namespace_name: cdktf.stringToTerraform(this._namespaceName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      apns_credential: notificationHubApnsCredentialToTerraform(this._apnsCredential.internalValue),
      browser_credential: notificationHubBrowserCredentialToTerraform(this._browserCredential.internalValue),
      gcm_credential: notificationHubGcmCredentialToTerraform(this._gcmCredential.internalValue),
      timeouts: notificationHubTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace_name: {
        value: cdktf.stringToHclTerraform(this._namespaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      apns_credential: {
        value: notificationHubApnsCredentialToHclTerraform(this._apnsCredential.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationHubApnsCredentialList",
      },
      browser_credential: {
        value: notificationHubBrowserCredentialToHclTerraform(this._browserCredential.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationHubBrowserCredentialList",
      },
      gcm_credential: {
        value: notificationHubGcmCredentialToHclTerraform(this._gcmCredential.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NotificationHubGcmCredentialList",
      },
      timeouts: {
        value: notificationHubTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NotificationHubTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
