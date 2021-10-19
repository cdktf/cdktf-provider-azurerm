// https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpringCloudAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app.html#https_only SpringCloudApp#https_only}
  */
  readonly httpsOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app.html#is_public SpringCloudApp#is_public}
  */
  readonly isPublic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app.html#name SpringCloudApp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app.html#resource_group_name SpringCloudApp#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app.html#service_name SpringCloudApp#service_name}
  */
  readonly serviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app.html#tls_enabled SpringCloudApp#tls_enabled}
  */
  readonly tlsEnabled?: boolean | cdktf.IResolvable;
  /**
  * identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app.html#identity SpringCloudApp#identity}
  */
  readonly identity?: SpringCloudAppIdentity;
  /**
  * persistent_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app.html#persistent_disk SpringCloudApp#persistent_disk}
  */
  readonly persistentDisk?: SpringCloudAppPersistentDisk;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app.html#timeouts SpringCloudApp#timeouts}
  */
  readonly timeouts?: SpringCloudAppTimeouts;
}
export interface SpringCloudAppIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app.html#type SpringCloudApp#type}
  */
  readonly type?: string;
}

function springCloudAppIdentityToTerraform(struct?: SpringCloudAppIdentityOutputReference | SpringCloudAppIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class SpringCloudAppIdentityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // type - computed: false, optional: true, required: false
  private _type?: string | undefined; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }
}
export interface SpringCloudAppPersistentDisk {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app.html#mount_path SpringCloudApp#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app.html#size_in_gb SpringCloudApp#size_in_gb}
  */
  readonly sizeInGb: number;
}

function springCloudAppPersistentDiskToTerraform(struct?: SpringCloudAppPersistentDiskOutputReference | SpringCloudAppPersistentDisk): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    size_in_gb: cdktf.numberToTerraform(struct!.sizeInGb),
  }
}

export class SpringCloudAppPersistentDiskOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string | undefined; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string | undefined) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath
  }

  // size_in_gb - computed: false, optional: false, required: true
  private _sizeInGb?: number; 
  public get sizeInGb() {
    return this.getNumberAttribute('size_in_gb');
  }
  public set sizeInGb(value: number) {
    this._sizeInGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInGbInput() {
    return this._sizeInGb
  }
}
export interface SpringCloudAppTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app.html#create SpringCloudApp#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app.html#delete SpringCloudApp#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app.html#read SpringCloudApp#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app.html#update SpringCloudApp#update}
  */
  readonly update?: string;
}

function springCloudAppTimeoutsToTerraform(struct?: SpringCloudAppTimeoutsOutputReference | SpringCloudAppTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export class SpringCloudAppTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app.html azurerm_spring_cloud_app}
*/
export class SpringCloudApp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_spring_cloud_app";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/spring_cloud_app.html azurerm_spring_cloud_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpringCloudAppConfig
  */
  public constructor(scope: Construct, id: string, config: SpringCloudAppConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_spring_cloud_app',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._httpsOnly = config.httpsOnly;
    this._isPublic = config.isPublic;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._serviceName = config.serviceName;
    this._tlsEnabled = config.tlsEnabled;
    this._identity = config.identity;
    this._persistentDisk = config.persistentDisk;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // https_only - computed: false, optional: true, required: false
  private _httpsOnly?: boolean | cdktf.IResolvable | undefined; 
  public get httpsOnly() {
    return this.getBooleanAttribute('https_only') as any;
  }
  public set httpsOnly(value: boolean | cdktf.IResolvable | undefined) {
    this._httpsOnly = value;
  }
  public resetHttpsOnly() {
    this._httpsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsOnlyInput() {
    return this._httpsOnly
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_public - computed: false, optional: true, required: false
  private _isPublic?: boolean | cdktf.IResolvable | undefined; 
  public get isPublic() {
    return this.getBooleanAttribute('is_public') as any;
  }
  public set isPublic(value: boolean | cdktf.IResolvable | undefined) {
    this._isPublic = value;
  }
  public resetIsPublic() {
    this._isPublic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPublicInput() {
    return this._isPublic
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
    return this._name
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
    return this._resourceGroupName
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName
  }

  // tls_enabled - computed: false, optional: true, required: false
  private _tlsEnabled?: boolean | cdktf.IResolvable | undefined; 
  public get tlsEnabled() {
    return this.getBooleanAttribute('tls_enabled') as any;
  }
  public set tlsEnabled(value: boolean | cdktf.IResolvable | undefined) {
    this._tlsEnabled = value;
  }
  public resetTlsEnabled() {
    this._tlsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsEnabledInput() {
    return this._tlsEnabled
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: SpringCloudAppIdentity | undefined; 
  private __identityOutput = new SpringCloudAppIdentityOutputReference(this as any, "identity", true);
  public get identity() {
    return this.__identityOutput;
  }
  public putIdentity(value: SpringCloudAppIdentity | undefined) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity
  }

  // persistent_disk - computed: false, optional: true, required: false
  private _persistentDisk?: SpringCloudAppPersistentDisk | undefined; 
  private __persistentDiskOutput = new SpringCloudAppPersistentDiskOutputReference(this as any, "persistent_disk", true);
  public get persistentDisk() {
    return this.__persistentDiskOutput;
  }
  public putPersistentDisk(value: SpringCloudAppPersistentDisk | undefined) {
    this._persistentDisk = value;
  }
  public resetPersistentDisk() {
    this._persistentDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentDiskInput() {
    return this._persistentDisk
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SpringCloudAppTimeouts | undefined; 
  private __timeoutsOutput = new SpringCloudAppTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: SpringCloudAppTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      https_only: cdktf.booleanToTerraform(this._httpsOnly),
      is_public: cdktf.booleanToTerraform(this._isPublic),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      service_name: cdktf.stringToTerraform(this._serviceName),
      tls_enabled: cdktf.booleanToTerraform(this._tlsEnabled),
      identity: springCloudAppIdentityToTerraform(this._identity),
      persistent_disk: springCloudAppPersistentDiskToTerraform(this._persistentDisk),
      timeouts: springCloudAppTimeoutsToTerraform(this._timeouts),
    };
  }
}
