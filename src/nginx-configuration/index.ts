// https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/nginx_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NginxConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/nginx_configuration#id NginxConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/nginx_configuration#nginx_deployment_id NginxConfiguration#nginx_deployment_id}
  */
  readonly nginxDeploymentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/nginx_configuration#package_data NginxConfiguration#package_data}
  */
  readonly packageData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/nginx_configuration#root_file NginxConfiguration#root_file}
  */
  readonly rootFile: string;
  /**
  * config_file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/nginx_configuration#config_file NginxConfiguration#config_file}
  */
  readonly configFile?: NginxConfigurationConfigFile[] | cdktf.IResolvable;
  /**
  * protected_file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/nginx_configuration#protected_file NginxConfiguration#protected_file}
  */
  readonly protectedFile?: NginxConfigurationProtectedFile[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/nginx_configuration#timeouts NginxConfiguration#timeouts}
  */
  readonly timeouts?: NginxConfigurationTimeouts;
}
export interface NginxConfigurationConfigFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/nginx_configuration#content NginxConfiguration#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/nginx_configuration#virtual_path NginxConfiguration#virtual_path}
  */
  readonly virtualPath: string;
}

export function nginxConfigurationConfigFileToTerraform(struct?: NginxConfigurationConfigFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    virtual_path: cdktf.stringToTerraform(struct!.virtualPath),
  }
}


export function nginxConfigurationConfigFileToHclTerraform(struct?: NginxConfigurationConfigFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_path: {
      value: cdktf.stringToHclTerraform(struct!.virtualPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NginxConfigurationConfigFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NginxConfigurationConfigFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._virtualPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualPath = this._virtualPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NginxConfigurationConfigFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._virtualPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._virtualPath = value.virtualPath;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // virtual_path - computed: false, optional: false, required: true
  private _virtualPath?: string; 
  public get virtualPath() {
    return this.getStringAttribute('virtual_path');
  }
  public set virtualPath(value: string) {
    this._virtualPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPathInput() {
    return this._virtualPath;
  }
}

export class NginxConfigurationConfigFileList extends cdktf.ComplexList {
  public internalValue? : NginxConfigurationConfigFile[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): NginxConfigurationConfigFileOutputReference {
    return new NginxConfigurationConfigFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NginxConfigurationProtectedFile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/nginx_configuration#content NginxConfiguration#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/nginx_configuration#virtual_path NginxConfiguration#virtual_path}
  */
  readonly virtualPath: string;
}

export function nginxConfigurationProtectedFileToTerraform(struct?: NginxConfigurationProtectedFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    virtual_path: cdktf.stringToTerraform(struct!.virtualPath),
  }
}


export function nginxConfigurationProtectedFileToHclTerraform(struct?: NginxConfigurationProtectedFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_path: {
      value: cdktf.stringToHclTerraform(struct!.virtualPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NginxConfigurationProtectedFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NginxConfigurationProtectedFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._virtualPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualPath = this._virtualPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NginxConfigurationProtectedFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._virtualPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._virtualPath = value.virtualPath;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // virtual_path - computed: false, optional: false, required: true
  private _virtualPath?: string; 
  public get virtualPath() {
    return this.getStringAttribute('virtual_path');
  }
  public set virtualPath(value: string) {
    this._virtualPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPathInput() {
    return this._virtualPath;
  }
}

export class NginxConfigurationProtectedFileList extends cdktf.ComplexList {
  public internalValue? : NginxConfigurationProtectedFile[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): NginxConfigurationProtectedFileOutputReference {
    return new NginxConfigurationProtectedFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NginxConfigurationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/nginx_configuration#create NginxConfiguration#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/nginx_configuration#delete NginxConfiguration#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/nginx_configuration#read NginxConfiguration#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/nginx_configuration#update NginxConfiguration#update}
  */
  readonly update?: string;
}

export function nginxConfigurationTimeoutsToTerraform(struct?: NginxConfigurationTimeouts | cdktf.IResolvable): any {
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


export function nginxConfigurationTimeoutsToHclTerraform(struct?: NginxConfigurationTimeouts | cdktf.IResolvable): any {
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

export class NginxConfigurationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NginxConfigurationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NginxConfigurationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/nginx_configuration azurerm_nginx_configuration}
*/
export class NginxConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_nginx_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NginxConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NginxConfiguration to import
  * @param importFromId The id of the existing NginxConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/nginx_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NginxConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_nginx_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.3.0/docs/resources/nginx_configuration azurerm_nginx_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NginxConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: NginxConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_nginx_configuration',
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
    this._nginxDeploymentId = config.nginxDeploymentId;
    this._packageData = config.packageData;
    this._rootFile = config.rootFile;
    this._configFile.internalValue = config.configFile;
    this._protectedFile.internalValue = config.protectedFile;
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

  // nginx_deployment_id - computed: false, optional: false, required: true
  private _nginxDeploymentId?: string; 
  public get nginxDeploymentId() {
    return this.getStringAttribute('nginx_deployment_id');
  }
  public set nginxDeploymentId(value: string) {
    this._nginxDeploymentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nginxDeploymentIdInput() {
    return this._nginxDeploymentId;
  }

  // package_data - computed: false, optional: true, required: false
  private _packageData?: string; 
  public get packageData() {
    return this.getStringAttribute('package_data');
  }
  public set packageData(value: string) {
    this._packageData = value;
  }
  public resetPackageData() {
    this._packageData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageDataInput() {
    return this._packageData;
  }

  // root_file - computed: false, optional: false, required: true
  private _rootFile?: string; 
  public get rootFile() {
    return this.getStringAttribute('root_file');
  }
  public set rootFile(value: string) {
    this._rootFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootFileInput() {
    return this._rootFile;
  }

  // config_file - computed: false, optional: true, required: false
  private _configFile = new NginxConfigurationConfigFileList(this, "config_file", true);
  public get configFile() {
    return this._configFile;
  }
  public putConfigFile(value: NginxConfigurationConfigFile[] | cdktf.IResolvable) {
    this._configFile.internalValue = value;
  }
  public resetConfigFile() {
    this._configFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configFileInput() {
    return this._configFile.internalValue;
  }

  // protected_file - computed: false, optional: true, required: false
  private _protectedFile = new NginxConfigurationProtectedFileList(this, "protected_file", true);
  public get protectedFile() {
    return this._protectedFile;
  }
  public putProtectedFile(value: NginxConfigurationProtectedFile[] | cdktf.IResolvable) {
    this._protectedFile.internalValue = value;
  }
  public resetProtectedFile() {
    this._protectedFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedFileInput() {
    return this._protectedFile.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NginxConfigurationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NginxConfigurationTimeouts) {
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
      nginx_deployment_id: cdktf.stringToTerraform(this._nginxDeploymentId),
      package_data: cdktf.stringToTerraform(this._packageData),
      root_file: cdktf.stringToTerraform(this._rootFile),
      config_file: cdktf.listMapper(nginxConfigurationConfigFileToTerraform, true)(this._configFile.internalValue),
      protected_file: cdktf.listMapper(nginxConfigurationProtectedFileToTerraform, true)(this._protectedFile.internalValue),
      timeouts: nginxConfigurationTimeoutsToTerraform(this._timeouts.internalValue),
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
      nginx_deployment_id: {
        value: cdktf.stringToHclTerraform(this._nginxDeploymentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_data: {
        value: cdktf.stringToHclTerraform(this._packageData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      root_file: {
        value: cdktf.stringToHclTerraform(this._rootFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_file: {
        value: cdktf.listMapperHcl(nginxConfigurationConfigFileToHclTerraform, true)(this._configFile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NginxConfigurationConfigFileList",
      },
      protected_file: {
        value: cdktf.listMapperHcl(nginxConfigurationProtectedFileToHclTerraform, true)(this._protectedFile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NginxConfigurationProtectedFileList",
      },
      timeouts: {
        value: nginxConfigurationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NginxConfigurationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
