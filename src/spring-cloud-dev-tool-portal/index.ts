// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_dev_tool_portal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpringCloudDevToolPortalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_dev_tool_portal#application_accelerator_enabled SpringCloudDevToolPortal#application_accelerator_enabled}
  */
  readonly applicationAcceleratorEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_dev_tool_portal#application_live_view_enabled SpringCloudDevToolPortal#application_live_view_enabled}
  */
  readonly applicationLiveViewEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_dev_tool_portal#id SpringCloudDevToolPortal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_dev_tool_portal#name SpringCloudDevToolPortal#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_dev_tool_portal#public_network_access_enabled SpringCloudDevToolPortal#public_network_access_enabled}
  */
  readonly publicNetworkAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_dev_tool_portal#spring_cloud_service_id SpringCloudDevToolPortal#spring_cloud_service_id}
  */
  readonly springCloudServiceId: string;
  /**
  * sso block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_dev_tool_portal#sso SpringCloudDevToolPortal#sso}
  */
  readonly sso?: SpringCloudDevToolPortalSso;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_dev_tool_portal#timeouts SpringCloudDevToolPortal#timeouts}
  */
  readonly timeouts?: SpringCloudDevToolPortalTimeouts;
}
export interface SpringCloudDevToolPortalSso {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_dev_tool_portal#client_id SpringCloudDevToolPortal#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_dev_tool_portal#client_secret SpringCloudDevToolPortal#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_dev_tool_portal#metadata_url SpringCloudDevToolPortal#metadata_url}
  */
  readonly metadataUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_dev_tool_portal#scope SpringCloudDevToolPortal#scope}
  */
  readonly scope?: string[];
}

export function springCloudDevToolPortalSsoToTerraform(struct?: SpringCloudDevToolPortalSsoOutputReference | SpringCloudDevToolPortalSso): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    metadata_url: cdktf.stringToTerraform(struct!.metadataUrl),
    scope: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scope),
  }
}


export function springCloudDevToolPortalSsoToHclTerraform(struct?: SpringCloudDevToolPortalSsoOutputReference | SpringCloudDevToolPortalSso): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_url: {
      value: cdktf.stringToHclTerraform(struct!.metadataUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scope),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpringCloudDevToolPortalSsoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpringCloudDevToolPortalSso | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._metadataUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataUrl = this._metadataUrl;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpringCloudDevToolPortalSso | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._metadataUrl = undefined;
      this._scope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._metadataUrl = value.metadataUrl;
      this._scope = value.scope;
    }
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // metadata_url - computed: false, optional: true, required: false
  private _metadataUrl?: string; 
  public get metadataUrl() {
    return this.getStringAttribute('metadata_url');
  }
  public set metadataUrl(value: string) {
    this._metadataUrl = value;
  }
  public resetMetadataUrl() {
    this._metadataUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataUrlInput() {
    return this._metadataUrl;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string[]; 
  public get scope() {
    return cdktf.Fn.tolist(this.getListAttribute('scope'));
  }
  public set scope(value: string[]) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface SpringCloudDevToolPortalTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_dev_tool_portal#create SpringCloudDevToolPortal#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_dev_tool_portal#delete SpringCloudDevToolPortal#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_dev_tool_portal#read SpringCloudDevToolPortal#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_dev_tool_portal#update SpringCloudDevToolPortal#update}
  */
  readonly update?: string;
}

export function springCloudDevToolPortalTimeoutsToTerraform(struct?: SpringCloudDevToolPortalTimeouts | cdktf.IResolvable): any {
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


export function springCloudDevToolPortalTimeoutsToHclTerraform(struct?: SpringCloudDevToolPortalTimeouts | cdktf.IResolvable): any {
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

export class SpringCloudDevToolPortalTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpringCloudDevToolPortalTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SpringCloudDevToolPortalTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_dev_tool_portal azurerm_spring_cloud_dev_tool_portal}
*/
export class SpringCloudDevToolPortal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_spring_cloud_dev_tool_portal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SpringCloudDevToolPortal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpringCloudDevToolPortal to import
  * @param importFromId The id of the existing SpringCloudDevToolPortal that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_dev_tool_portal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpringCloudDevToolPortal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_spring_cloud_dev_tool_portal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/spring_cloud_dev_tool_portal azurerm_spring_cloud_dev_tool_portal} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpringCloudDevToolPortalConfig
  */
  public constructor(scope: Construct, id: string, config: SpringCloudDevToolPortalConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_spring_cloud_dev_tool_portal',
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
    this._applicationAcceleratorEnabled = config.applicationAcceleratorEnabled;
    this._applicationLiveViewEnabled = config.applicationLiveViewEnabled;
    this._id = config.id;
    this._name = config.name;
    this._publicNetworkAccessEnabled = config.publicNetworkAccessEnabled;
    this._springCloudServiceId = config.springCloudServiceId;
    this._sso.internalValue = config.sso;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_accelerator_enabled - computed: true, optional: true, required: false
  private _applicationAcceleratorEnabled?: boolean | cdktf.IResolvable; 
  public get applicationAcceleratorEnabled() {
    return this.getBooleanAttribute('application_accelerator_enabled');
  }
  public set applicationAcceleratorEnabled(value: boolean | cdktf.IResolvable) {
    this._applicationAcceleratorEnabled = value;
  }
  public resetApplicationAcceleratorEnabled() {
    this._applicationAcceleratorEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationAcceleratorEnabledInput() {
    return this._applicationAcceleratorEnabled;
  }

  // application_live_view_enabled - computed: true, optional: true, required: false
  private _applicationLiveViewEnabled?: boolean | cdktf.IResolvable; 
  public get applicationLiveViewEnabled() {
    return this.getBooleanAttribute('application_live_view_enabled');
  }
  public set applicationLiveViewEnabled(value: boolean | cdktf.IResolvable) {
    this._applicationLiveViewEnabled = value;
  }
  public resetApplicationLiveViewEnabled() {
    this._applicationLiveViewEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationLiveViewEnabledInput() {
    return this._applicationLiveViewEnabled;
  }

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

  // public_network_access_enabled - computed: false, optional: true, required: false
  private _publicNetworkAccessEnabled?: boolean | cdktf.IResolvable; 
  public get publicNetworkAccessEnabled() {
    return this.getBooleanAttribute('public_network_access_enabled');
  }
  public set publicNetworkAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._publicNetworkAccessEnabled = value;
  }
  public resetPublicNetworkAccessEnabled() {
    this._publicNetworkAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkAccessEnabledInput() {
    return this._publicNetworkAccessEnabled;
  }

  // spring_cloud_service_id - computed: false, optional: false, required: true
  private _springCloudServiceId?: string; 
  public get springCloudServiceId() {
    return this.getStringAttribute('spring_cloud_service_id');
  }
  public set springCloudServiceId(value: string) {
    this._springCloudServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get springCloudServiceIdInput() {
    return this._springCloudServiceId;
  }

  // sso - computed: false, optional: true, required: false
  private _sso = new SpringCloudDevToolPortalSsoOutputReference(this, "sso");
  public get sso() {
    return this._sso;
  }
  public putSso(value: SpringCloudDevToolPortalSso) {
    this._sso.internalValue = value;
  }
  public resetSso() {
    this._sso.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoInput() {
    return this._sso.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SpringCloudDevToolPortalTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SpringCloudDevToolPortalTimeouts) {
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
      application_accelerator_enabled: cdktf.booleanToTerraform(this._applicationAcceleratorEnabled),
      application_live_view_enabled: cdktf.booleanToTerraform(this._applicationLiveViewEnabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      public_network_access_enabled: cdktf.booleanToTerraform(this._publicNetworkAccessEnabled),
      spring_cloud_service_id: cdktf.stringToTerraform(this._springCloudServiceId),
      sso: springCloudDevToolPortalSsoToTerraform(this._sso.internalValue),
      timeouts: springCloudDevToolPortalTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_accelerator_enabled: {
        value: cdktf.booleanToHclTerraform(this._applicationAcceleratorEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      application_live_view_enabled: {
        value: cdktf.booleanToHclTerraform(this._applicationLiveViewEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      public_network_access_enabled: {
        value: cdktf.booleanToHclTerraform(this._publicNetworkAccessEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      spring_cloud_service_id: {
        value: cdktf.stringToHclTerraform(this._springCloudServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso: {
        value: springCloudDevToolPortalSsoToHclTerraform(this._sso.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SpringCloudDevToolPortalSsoList",
      },
      timeouts: {
        value: springCloudDevToolPortalTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SpringCloudDevToolPortalTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
