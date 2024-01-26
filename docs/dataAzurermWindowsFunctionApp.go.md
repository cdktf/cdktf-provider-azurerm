# `dataAzurermWindowsFunctionApp` Submodule <a name="`dataAzurermWindowsFunctionApp` Submodule" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermWindowsFunctionApp <a name="DataAzurermWindowsFunctionApp" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/windows_function_app azurerm_windows_function_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionApp(scope Construct, id *string, config DataAzurermWindowsFunctionAppConfig) DataAzurermWindowsFunctionApp
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig">DataAzurermWindowsFunctionAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig">DataAzurermWindowsFunctionAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermWindowsFunctionAppTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeouts">DataAzurermWindowsFunctionAppTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermWindowsFunctionApp resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionApp_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionApp_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionApp_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionApp_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermWindowsFunctionApp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermWindowsFunctionApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermWindowsFunctionApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/windows_function_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermWindowsFunctionApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.appSettings">AppSettings</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.authSettings">AuthSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList">DataAzurermWindowsFunctionAppAuthSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.authSettingsV2">AuthSettingsV2</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List">DataAzurermWindowsFunctionAppAuthSettingsV2List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.backup">Backup</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList">DataAzurermWindowsFunctionAppBackupList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.builtinLoggingEnabled">BuiltinLoggingEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.clientCertificateEnabled">ClientCertificateEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.clientCertificateExclusionPaths">ClientCertificateExclusionPaths</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.clientCertificateMode">ClientCertificateMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.connectionString">ConnectionString</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList">DataAzurermWindowsFunctionAppConnectionStringList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.contentShareForceDisabled">ContentShareForceDisabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.customDomainVerificationId">CustomDomainVerificationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.dailyMemoryTimeQuota">DailyMemoryTimeQuota</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.defaultHostname">DefaultHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.ftpPublishBasicAuthenticationEnabled">FtpPublishBasicAuthenticationEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.functionsExtensionVersion">FunctionsExtensionVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.hostingEnvironmentId">HostingEnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.httpsOnly">HttpsOnly</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList">DataAzurermWindowsFunctionAppIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.outboundIpAddresses">OutboundIpAddresses</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.outboundIpAddressList">OutboundIpAddressList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.possibleOutboundIpAddresses">PossibleOutboundIpAddresses</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.possibleOutboundIpAddressList">PossibleOutboundIpAddressList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.publicNetworkAccessEnabled">PublicNetworkAccessEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.servicePlanId">ServicePlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.siteConfig">SiteConfig</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList">DataAzurermWindowsFunctionAppSiteConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.siteCredential">SiteCredential</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList">DataAzurermWindowsFunctionAppSiteCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.stickySettings">StickySettings</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList">DataAzurermWindowsFunctionAppStickySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.storageAccountAccessKey">StorageAccountAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.storageAccountName">StorageAccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.storageKeyVaultSecretId">StorageKeyVaultSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.storageUsesManagedIdentity">StorageUsesManagedIdentity</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference">DataAzurermWindowsFunctionAppTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.webdeployPublishBasicAuthenticationEnabled">WebdeployPublishBasicAuthenticationEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AppSettings`<sup>Required</sup> <a name="AppSettings" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.appSettings"></a>

```go
func AppSettings() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `AuthSettings`<sup>Required</sup> <a name="AuthSettings" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.authSettings"></a>

```go
func AuthSettings() DataAzurermWindowsFunctionAppAuthSettingsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList">DataAzurermWindowsFunctionAppAuthSettingsList</a>

---

##### `AuthSettingsV2`<sup>Required</sup> <a name="AuthSettingsV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.authSettingsV2"></a>

```go
func AuthSettingsV2() DataAzurermWindowsFunctionAppAuthSettingsV2List
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List">DataAzurermWindowsFunctionAppAuthSettingsV2List</a>

---

##### `Backup`<sup>Required</sup> <a name="Backup" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.backup"></a>

```go
func Backup() DataAzurermWindowsFunctionAppBackupList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList">DataAzurermWindowsFunctionAppBackupList</a>

---

##### `BuiltinLoggingEnabled`<sup>Required</sup> <a name="BuiltinLoggingEnabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.builtinLoggingEnabled"></a>

```go
func BuiltinLoggingEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ClientCertificateEnabled`<sup>Required</sup> <a name="ClientCertificateEnabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.clientCertificateEnabled"></a>

```go
func ClientCertificateEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ClientCertificateExclusionPaths`<sup>Required</sup> <a name="ClientCertificateExclusionPaths" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.clientCertificateExclusionPaths"></a>

```go
func ClientCertificateExclusionPaths() *string
```

- *Type:* *string

---

##### `ClientCertificateMode`<sup>Required</sup> <a name="ClientCertificateMode" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.clientCertificateMode"></a>

```go
func ClientCertificateMode() *string
```

- *Type:* *string

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.connectionString"></a>

```go
func ConnectionString() DataAzurermWindowsFunctionAppConnectionStringList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList">DataAzurermWindowsFunctionAppConnectionStringList</a>

---

##### `ContentShareForceDisabled`<sup>Required</sup> <a name="ContentShareForceDisabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.contentShareForceDisabled"></a>

```go
func ContentShareForceDisabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CustomDomainVerificationId`<sup>Required</sup> <a name="CustomDomainVerificationId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.customDomainVerificationId"></a>

```go
func CustomDomainVerificationId() *string
```

- *Type:* *string

---

##### `DailyMemoryTimeQuota`<sup>Required</sup> <a name="DailyMemoryTimeQuota" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.dailyMemoryTimeQuota"></a>

```go
func DailyMemoryTimeQuota() *f64
```

- *Type:* *f64

---

##### `DefaultHostname`<sup>Required</sup> <a name="DefaultHostname" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.defaultHostname"></a>

```go
func DefaultHostname() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `FtpPublishBasicAuthenticationEnabled`<sup>Required</sup> <a name="FtpPublishBasicAuthenticationEnabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.ftpPublishBasicAuthenticationEnabled"></a>

```go
func FtpPublishBasicAuthenticationEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `FunctionsExtensionVersion`<sup>Required</sup> <a name="FunctionsExtensionVersion" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.functionsExtensionVersion"></a>

```go
func FunctionsExtensionVersion() *string
```

- *Type:* *string

---

##### `HostingEnvironmentId`<sup>Required</sup> <a name="HostingEnvironmentId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.hostingEnvironmentId"></a>

```go
func HostingEnvironmentId() *string
```

- *Type:* *string

---

##### `HttpsOnly`<sup>Required</sup> <a name="HttpsOnly" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.httpsOnly"></a>

```go
func HttpsOnly() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.identity"></a>

```go
func Identity() DataAzurermWindowsFunctionAppIdentityList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList">DataAzurermWindowsFunctionAppIdentityList</a>

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `OutboundIpAddresses`<sup>Required</sup> <a name="OutboundIpAddresses" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.outboundIpAddresses"></a>

```go
func OutboundIpAddresses() *string
```

- *Type:* *string

---

##### `OutboundIpAddressList`<sup>Required</sup> <a name="OutboundIpAddressList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.outboundIpAddressList"></a>

```go
func OutboundIpAddressList() *[]*string
```

- *Type:* *[]*string

---

##### `PossibleOutboundIpAddresses`<sup>Required</sup> <a name="PossibleOutboundIpAddresses" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.possibleOutboundIpAddresses"></a>

```go
func PossibleOutboundIpAddresses() *string
```

- *Type:* *string

---

##### `PossibleOutboundIpAddressList`<sup>Required</sup> <a name="PossibleOutboundIpAddressList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.possibleOutboundIpAddressList"></a>

```go
func PossibleOutboundIpAddressList() *[]*string
```

- *Type:* *[]*string

---

##### `PublicNetworkAccessEnabled`<sup>Required</sup> <a name="PublicNetworkAccessEnabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.publicNetworkAccessEnabled"></a>

```go
func PublicNetworkAccessEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ServicePlanId`<sup>Required</sup> <a name="ServicePlanId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.servicePlanId"></a>

```go
func ServicePlanId() *string
```

- *Type:* *string

---

##### `SiteConfig`<sup>Required</sup> <a name="SiteConfig" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.siteConfig"></a>

```go
func SiteConfig() DataAzurermWindowsFunctionAppSiteConfigList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList">DataAzurermWindowsFunctionAppSiteConfigList</a>

---

##### `SiteCredential`<sup>Required</sup> <a name="SiteCredential" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.siteCredential"></a>

```go
func SiteCredential() DataAzurermWindowsFunctionAppSiteCredentialList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList">DataAzurermWindowsFunctionAppSiteCredentialList</a>

---

##### `StickySettings`<sup>Required</sup> <a name="StickySettings" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.stickySettings"></a>

```go
func StickySettings() DataAzurermWindowsFunctionAppStickySettingsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList">DataAzurermWindowsFunctionAppStickySettingsList</a>

---

##### `StorageAccountAccessKey`<sup>Required</sup> <a name="StorageAccountAccessKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.storageAccountAccessKey"></a>

```go
func StorageAccountAccessKey() *string
```

- *Type:* *string

---

##### `StorageAccountName`<sup>Required</sup> <a name="StorageAccountName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.storageAccountName"></a>

```go
func StorageAccountName() *string
```

- *Type:* *string

---

##### `StorageKeyVaultSecretId`<sup>Required</sup> <a name="StorageKeyVaultSecretId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.storageKeyVaultSecretId"></a>

```go
func StorageKeyVaultSecretId() *string
```

- *Type:* *string

---

##### `StorageUsesManagedIdentity`<sup>Required</sup> <a name="StorageUsesManagedIdentity" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.storageUsesManagedIdentity"></a>

```go
func StorageUsesManagedIdentity() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.timeouts"></a>

```go
func Timeouts() DataAzurermWindowsFunctionAppTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference">DataAzurermWindowsFunctionAppTimeoutsOutputReference</a>

---

##### `VirtualNetworkSubnetId`<sup>Required</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.virtualNetworkSubnetId"></a>

```go
func VirtualNetworkSubnetId() *string
```

- *Type:* *string

---

##### `WebdeployPublishBasicAuthenticationEnabled`<sup>Required</sup> <a name="WebdeployPublishBasicAuthenticationEnabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.webdeployPublishBasicAuthenticationEnabled"></a>

```go
func WebdeployPublishBasicAuthenticationEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionApp.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermWindowsFunctionAppAuthSettings <a name="DataAzurermWindowsFunctionAppAuthSettings" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

&dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionAppAuthSettings {

}
```


### DataAzurermWindowsFunctionAppAuthSettingsActiveDirectory <a name="DataAzurermWindowsFunctionAppAuthSettingsActiveDirectory" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectory.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

&dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectory {

}
```


### DataAzurermWindowsFunctionAppAuthSettingsFacebook <a name="DataAzurermWindowsFunctionAppAuthSettingsFacebook" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebook.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

&dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionAppAuthSettingsFacebook {

}
```


### DataAzurermWindowsFunctionAppAuthSettingsGithub <a name="DataAzurermWindowsFunctionAppAuthSettingsGithub" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithub.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

&dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionAppAuthSettingsGithub {

}
```


### DataAzurermWindowsFunctionAppAuthSettingsGoogle <a name="DataAzurermWindowsFunctionAppAuthSettingsGoogle" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogle"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogle.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

&dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionAppAuthSettingsGoogle {

}
```


### DataAzurermWindowsFunctionAppAuthSettingsMicrosoft <a name="DataAzurermWindowsFunctionAppAuthSettingsMicrosoft" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoft"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoft.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

&dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoft {

}
```


### DataAzurermWindowsFunctionAppAuthSettingsTwitter <a name="DataAzurermWindowsFunctionAppAuthSettingsTwitter" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

&dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionAppAuthSettingsTwitter {

}
```


### DataAzurermWindowsFunctionAppAuthSettingsV2 <a name="DataAzurermWindowsFunctionAppAuthSettingsV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

&dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionAppAuthSettingsV2 {

}
```


### DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2 <a name="DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

&dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2 {

}
```


### DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2 <a name="DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

&dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2 {

}
```


### DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2 <a name="DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

&dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2 {

}
```


### DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2 <a name="DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

&dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2 {

}
```


### DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2 <a name="DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

&dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2 {

}
```


### DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2 <a name="DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

&dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2 {

}
```


### DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2 <a name="DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

&dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2 {

}
```


### DataAzurermWindowsFunctionAppAuthSettingsV2Login <a name="DataAzurermWindowsFunctionAppAuthSettingsV2Login" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2Login"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2Login.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

&dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionAppAuthSettingsV2Login {

}
```


### DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2 <a name="DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

&dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2 {

}
```


### DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2 <a name="DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

&dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2 {

}
```


### DataAzurermWindowsFunctionAppBackup <a name="DataAzurermWindowsFunctionAppBackup" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

&dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionAppBackup {

}
```


### DataAzurermWindowsFunctionAppBackupSchedule <a name="DataAzurermWindowsFunctionAppBackupSchedule" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

&dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionAppBackupSchedule {

}
```


### DataAzurermWindowsFunctionAppConfig <a name="DataAzurermWindowsFunctionAppConfig" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

&dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionAppConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ResourceGroupName: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/windows_function_app#name DataAzurermWindowsFunctionApp#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/windows_function_app#resource_group_name DataAzurermWindowsFunctionApp#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/windows_function_app#id DataAzurermWindowsFunctionApp#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeouts">DataAzurermWindowsFunctionAppTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/windows_function_app#name DataAzurermWindowsFunctionApp#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/windows_function_app#resource_group_name DataAzurermWindowsFunctionApp#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/windows_function_app#id DataAzurermWindowsFunctionApp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConfig.property.timeouts"></a>

```go
Timeouts DataAzurermWindowsFunctionAppTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeouts">DataAzurermWindowsFunctionAppTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/windows_function_app#timeouts DataAzurermWindowsFunctionApp#timeouts}

---

### DataAzurermWindowsFunctionAppConnectionString <a name="DataAzurermWindowsFunctionAppConnectionString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionString"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionString.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

&dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionAppConnectionString {

}
```


### DataAzurermWindowsFunctionAppIdentity <a name="DataAzurermWindowsFunctionAppIdentity" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

&dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionAppIdentity {

}
```


### DataAzurermWindowsFunctionAppSiteConfig <a name="DataAzurermWindowsFunctionAppSiteConfig" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

&dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionAppSiteConfig {

}
```


### DataAzurermWindowsFunctionAppSiteConfigApplicationStack <a name="DataAzurermWindowsFunctionAppSiteConfigApplicationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStack"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStack.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

&dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionAppSiteConfigApplicationStack {

}
```


### DataAzurermWindowsFunctionAppSiteConfigAppServiceLogs <a name="DataAzurermWindowsFunctionAppSiteConfigAppServiceLogs" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

&dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogs {

}
```


### DataAzurermWindowsFunctionAppSiteConfigCors <a name="DataAzurermWindowsFunctionAppSiteConfigCors" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCors.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

&dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionAppSiteConfigCors {

}
```


### DataAzurermWindowsFunctionAppSiteConfigIpRestriction <a name="DataAzurermWindowsFunctionAppSiteConfigIpRestriction" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestriction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

&dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionAppSiteConfigIpRestriction {

}
```


### DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeaders <a name="DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeaders" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

&dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeaders {

}
```


### DataAzurermWindowsFunctionAppSiteConfigScmIpRestriction <a name="DataAzurermWindowsFunctionAppSiteConfigScmIpRestriction" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestriction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

&dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestriction {

}
```


### DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeaders <a name="DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeaders" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

&dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeaders {

}
```


### DataAzurermWindowsFunctionAppSiteCredential <a name="DataAzurermWindowsFunctionAppSiteCredential" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredential.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

&dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionAppSiteCredential {

}
```


### DataAzurermWindowsFunctionAppStickySettings <a name="DataAzurermWindowsFunctionAppStickySettings" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

&dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionAppStickySettings {

}
```


### DataAzurermWindowsFunctionAppTimeouts <a name="DataAzurermWindowsFunctionAppTimeouts" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

&dataazurermwindowsfunctionapp.DataAzurermWindowsFunctionAppTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/windows_function_app#read DataAzurermWindowsFunctionApp#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.89.0/docs/data-sources/windows_function_app#read DataAzurermWindowsFunctionApp#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList <a name="DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.get"></a>

```go
func Get(index *f64) DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences">AllowedAudiences</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretSettingName">ClientSecretSettingName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectory">DataAzurermWindowsFunctionAppAuthSettingsActiveDirectory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedAudiences`<sup>Required</sup> <a name="AllowedAudiences" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.allowedAudiences"></a>

```go
func AllowedAudiences() *[]*string
```

- *Type:* *[]*string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `ClientSecretSettingName`<sup>Required</sup> <a name="ClientSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.clientSecretSettingName"></a>

```go
func ClientSecretSettingName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermWindowsFunctionAppAuthSettingsActiveDirectory
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectory">DataAzurermWindowsFunctionAppAuthSettingsActiveDirectory</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsFacebookList <a name="DataAzurermWindowsFunctionAppAuthSettingsFacebookList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppAuthSettingsFacebookList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermWindowsFunctionAppAuthSettingsFacebookList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.get"></a>

```go
func Get(index *f64) DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.appId">AppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.appSecret">AppSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.appSecretSettingName">AppSecretSettingName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.oauthScopes">OauthScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebook">DataAzurermWindowsFunctionAppAuthSettingsFacebook</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.appId"></a>

```go
func AppId() *string
```

- *Type:* *string

---

##### `AppSecret`<sup>Required</sup> <a name="AppSecret" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.appSecret"></a>

```go
func AppSecret() *string
```

- *Type:* *string

---

##### `AppSecretSettingName`<sup>Required</sup> <a name="AppSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.appSecretSettingName"></a>

```go
func AppSecretSettingName() *string
```

- *Type:* *string

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.oauthScopes"></a>

```go
func OauthScopes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermWindowsFunctionAppAuthSettingsFacebook
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebook">DataAzurermWindowsFunctionAppAuthSettingsFacebook</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsGithubList <a name="DataAzurermWindowsFunctionAppAuthSettingsGithubList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppAuthSettingsGithubList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermWindowsFunctionAppAuthSettingsGithubList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.get"></a>

```go
func Get(index *f64) DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.clientSecretSettingName">ClientSecretSettingName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.oauthScopes">OauthScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithub">DataAzurermWindowsFunctionAppAuthSettingsGithub</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `ClientSecretSettingName`<sup>Required</sup> <a name="ClientSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.clientSecretSettingName"></a>

```go
func ClientSecretSettingName() *string
```

- *Type:* *string

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.oauthScopes"></a>

```go
func OauthScopes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermWindowsFunctionAppAuthSettingsGithub
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithub">DataAzurermWindowsFunctionAppAuthSettingsGithub</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsGoogleList <a name="DataAzurermWindowsFunctionAppAuthSettingsGoogleList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppAuthSettingsGoogleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermWindowsFunctionAppAuthSettingsGoogleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.get"></a>

```go
func Get(index *f64) DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientSecretSettingName">ClientSecretSettingName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.oauthScopes">OauthScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogle">DataAzurermWindowsFunctionAppAuthSettingsGoogle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `ClientSecretSettingName`<sup>Required</sup> <a name="ClientSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.clientSecretSettingName"></a>

```go
func ClientSecretSettingName() *string
```

- *Type:* *string

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.oauthScopes"></a>

```go
func OauthScopes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermWindowsFunctionAppAuthSettingsGoogle
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogle">DataAzurermWindowsFunctionAppAuthSettingsGoogle</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsList <a name="DataAzurermWindowsFunctionAppAuthSettingsList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppAuthSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermWindowsFunctionAppAuthSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.get"></a>

```go
func Get(index *f64) DataAzurermWindowsFunctionAppAuthSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList <a name="DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppAuthSettingsMicrosoftList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.get"></a>

```go
func Get(index *f64) DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecretSettingName">ClientSecretSettingName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.oauthScopes">OauthScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoft">DataAzurermWindowsFunctionAppAuthSettingsMicrosoft</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `ClientSecretSettingName`<sup>Required</sup> <a name="ClientSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.clientSecretSettingName"></a>

```go
func ClientSecretSettingName() *string
```

- *Type:* *string

---

##### `OauthScopes`<sup>Required</sup> <a name="OauthScopes" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.oauthScopes"></a>

```go
func OauthScopes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermWindowsFunctionAppAuthSettingsMicrosoft
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoft">DataAzurermWindowsFunctionAppAuthSettingsMicrosoft</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsOutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppAuthSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermWindowsFunctionAppAuthSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.activeDirectory">ActiveDirectory</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList">DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.additionalLoginParameters">AdditionalLoginParameters</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.allowedExternalRedirectUrls">AllowedExternalRedirectUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.defaultProvider">DefaultProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.facebook">Facebook</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList">DataAzurermWindowsFunctionAppAuthSettingsFacebookList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.github">Github</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList">DataAzurermWindowsFunctionAppAuthSettingsGithubList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.google">Google</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList">DataAzurermWindowsFunctionAppAuthSettingsGoogleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.microsoft">Microsoft</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList">DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.runtimeVersion">RuntimeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.tokenRefreshExtensionHours">TokenRefreshExtensionHours</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.tokenStoreEnabled">TokenStoreEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.twitter">Twitter</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList">DataAzurermWindowsFunctionAppAuthSettingsTwitterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.unauthenticatedClientAction">UnauthenticatedClientAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettings">DataAzurermWindowsFunctionAppAuthSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActiveDirectory`<sup>Required</sup> <a name="ActiveDirectory" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.activeDirectory"></a>

```go
func ActiveDirectory() DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList">DataAzurermWindowsFunctionAppAuthSettingsActiveDirectoryList</a>

---

##### `AdditionalLoginParameters`<sup>Required</sup> <a name="AdditionalLoginParameters" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.additionalLoginParameters"></a>

```go
func AdditionalLoginParameters() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `AllowedExternalRedirectUrls`<sup>Required</sup> <a name="AllowedExternalRedirectUrls" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.allowedExternalRedirectUrls"></a>

```go
func AllowedExternalRedirectUrls() *[]*string
```

- *Type:* *[]*string

---

##### `DefaultProvider`<sup>Required</sup> <a name="DefaultProvider" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.defaultProvider"></a>

```go
func DefaultProvider() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Facebook`<sup>Required</sup> <a name="Facebook" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.facebook"></a>

```go
func Facebook() DataAzurermWindowsFunctionAppAuthSettingsFacebookList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsFacebookList">DataAzurermWindowsFunctionAppAuthSettingsFacebookList</a>

---

##### `Github`<sup>Required</sup> <a name="Github" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.github"></a>

```go
func Github() DataAzurermWindowsFunctionAppAuthSettingsGithubList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGithubList">DataAzurermWindowsFunctionAppAuthSettingsGithubList</a>

---

##### `Google`<sup>Required</sup> <a name="Google" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.google"></a>

```go
func Google() DataAzurermWindowsFunctionAppAuthSettingsGoogleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsGoogleList">DataAzurermWindowsFunctionAppAuthSettingsGoogleList</a>

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `Microsoft`<sup>Required</sup> <a name="Microsoft" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.microsoft"></a>

```go
func Microsoft() DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList">DataAzurermWindowsFunctionAppAuthSettingsMicrosoftList</a>

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.runtimeVersion"></a>

```go
func RuntimeVersion() *string
```

- *Type:* *string

---

##### `TokenRefreshExtensionHours`<sup>Required</sup> <a name="TokenRefreshExtensionHours" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.tokenRefreshExtensionHours"></a>

```go
func TokenRefreshExtensionHours() *f64
```

- *Type:* *f64

---

##### `TokenStoreEnabled`<sup>Required</sup> <a name="TokenStoreEnabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.tokenStoreEnabled"></a>

```go
func TokenStoreEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Twitter`<sup>Required</sup> <a name="Twitter" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.twitter"></a>

```go
func Twitter() DataAzurermWindowsFunctionAppAuthSettingsTwitterList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList">DataAzurermWindowsFunctionAppAuthSettingsTwitterList</a>

---

##### `UnauthenticatedClientAction`<sup>Required</sup> <a name="UnauthenticatedClientAction" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.unauthenticatedClientAction"></a>

```go
func UnauthenticatedClientAction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermWindowsFunctionAppAuthSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettings">DataAzurermWindowsFunctionAppAuthSettings</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsTwitterList <a name="DataAzurermWindowsFunctionAppAuthSettingsTwitterList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppAuthSettingsTwitterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermWindowsFunctionAppAuthSettingsTwitterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.get"></a>

```go
func Get(index *f64) DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerKey">ConsumerKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecret">ConsumerSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecretSettingName">ConsumerSecretSettingName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitter">DataAzurermWindowsFunctionAppAuthSettingsTwitter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConsumerKey`<sup>Required</sup> <a name="ConsumerKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerKey"></a>

```go
func ConsumerKey() *string
```

- *Type:* *string

---

##### `ConsumerSecret`<sup>Required</sup> <a name="ConsumerSecret" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecret"></a>

```go
func ConsumerSecret() *string
```

- *Type:* *string

---

##### `ConsumerSecretSettingName`<sup>Required</sup> <a name="ConsumerSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.property.consumerSecretSettingName"></a>

```go
func ConsumerSecretSettingName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermWindowsFunctionAppAuthSettingsTwitter
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsTwitter">DataAzurermWindowsFunctionAppAuthSettingsTwitter</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List <a name="DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.get"></a>

```go
func Get(index *f64) DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.allowedApplications">AllowedApplications</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.allowedAudiences">AllowedAudiences</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.allowedGroups">AllowedGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.allowedIdentities">AllowedIdentities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.clientSecretCertificateThumbprint">ClientSecretCertificateThumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.clientSecretSettingName">ClientSecretSettingName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.jwtAllowedClientApplications">JwtAllowedClientApplications</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.jwtAllowedGroups">JwtAllowedGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.loginParameters">LoginParameters</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.tenantAuthEndpoint">TenantAuthEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.wwwAuthenticationDisabled">WwwAuthenticationDisabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2">DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedApplications`<sup>Required</sup> <a name="AllowedApplications" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.allowedApplications"></a>

```go
func AllowedApplications() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedAudiences`<sup>Required</sup> <a name="AllowedAudiences" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.allowedAudiences"></a>

```go
func AllowedAudiences() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedGroups`<sup>Required</sup> <a name="AllowedGroups" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.allowedGroups"></a>

```go
func AllowedGroups() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedIdentities`<sup>Required</sup> <a name="AllowedIdentities" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.allowedIdentities"></a>

```go
func AllowedIdentities() *[]*string
```

- *Type:* *[]*string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecretCertificateThumbprint`<sup>Required</sup> <a name="ClientSecretCertificateThumbprint" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.clientSecretCertificateThumbprint"></a>

```go
func ClientSecretCertificateThumbprint() *string
```

- *Type:* *string

---

##### `ClientSecretSettingName`<sup>Required</sup> <a name="ClientSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.clientSecretSettingName"></a>

```go
func ClientSecretSettingName() *string
```

- *Type:* *string

---

##### `JwtAllowedClientApplications`<sup>Required</sup> <a name="JwtAllowedClientApplications" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.jwtAllowedClientApplications"></a>

```go
func JwtAllowedClientApplications() *[]*string
```

- *Type:* *[]*string

---

##### `JwtAllowedGroups`<sup>Required</sup> <a name="JwtAllowedGroups" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.jwtAllowedGroups"></a>

```go
func JwtAllowedGroups() *[]*string
```

- *Type:* *[]*string

---

##### `LoginParameters`<sup>Required</sup> <a name="LoginParameters" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.loginParameters"></a>

```go
func LoginParameters() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TenantAuthEndpoint`<sup>Required</sup> <a name="TenantAuthEndpoint" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.tenantAuthEndpoint"></a>

```go
func TenantAuthEndpoint() *string
```

- *Type:* *string

---

##### `WwwAuthenticationDisabled`<sup>Required</sup> <a name="WwwAuthenticationDisabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.wwwAuthenticationDisabled"></a>

```go
func WwwAuthenticationDisabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2OutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2">DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List <a name="DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.get"></a>

```go
func Get(index *f64) DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.property.clientSecretSettingName">ClientSecretSettingName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.property.loginScopes">LoginScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2">DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecretSettingName`<sup>Required</sup> <a name="ClientSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.property.clientSecretSettingName"></a>

```go
func ClientSecretSettingName() *string
```

- *Type:* *string

---

##### `LoginScopes`<sup>Required</sup> <a name="LoginScopes" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.property.loginScopes"></a>

```go
func LoginScopes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2OutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2">DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List <a name="DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.get"></a>

```go
func Get(index *f64) DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2">DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2OutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2">DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List <a name="DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.get"></a>

```go
func Get(index *f64) DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.authorisationEndpoint">AuthorisationEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.certificationUri">CertificationUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.clientCredentialMethod">ClientCredentialMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.clientSecretSettingName">ClientSecretSettingName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.issuerEndpoint">IssuerEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.nameClaimType">NameClaimType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.openidConfigurationEndpoint">OpenidConfigurationEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2">DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorisationEndpoint`<sup>Required</sup> <a name="AuthorisationEndpoint" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.authorisationEndpoint"></a>

```go
func AuthorisationEndpoint() *string
```

- *Type:* *string

---

##### `CertificationUri`<sup>Required</sup> <a name="CertificationUri" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.certificationUri"></a>

```go
func CertificationUri() *string
```

- *Type:* *string

---

##### `ClientCredentialMethod`<sup>Required</sup> <a name="ClientCredentialMethod" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.clientCredentialMethod"></a>

```go
func ClientCredentialMethod() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecretSettingName`<sup>Required</sup> <a name="ClientSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.clientSecretSettingName"></a>

```go
func ClientSecretSettingName() *string
```

- *Type:* *string

---

##### `IssuerEndpoint`<sup>Required</sup> <a name="IssuerEndpoint" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.issuerEndpoint"></a>

```go
func IssuerEndpoint() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NameClaimType`<sup>Required</sup> <a name="NameClaimType" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.nameClaimType"></a>

```go
func NameClaimType() *string
```

- *Type:* *string

---

##### `OpenidConfigurationEndpoint`<sup>Required</sup> <a name="OpenidConfigurationEndpoint" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.openidConfigurationEndpoint"></a>

```go
func OpenidConfigurationEndpoint() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.tokenEndpoint"></a>

```go
func TokenEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2OutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2">DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List <a name="DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.get"></a>

```go
func Get(index *f64) DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.property.appId">AppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.property.appSecretSettingName">AppSecretSettingName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.property.graphApiVersion">GraphApiVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.property.loginScopes">LoginScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2">DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.property.appId"></a>

```go
func AppId() *string
```

- *Type:* *string

---

##### `AppSecretSettingName`<sup>Required</sup> <a name="AppSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.property.appSecretSettingName"></a>

```go
func AppSecretSettingName() *string
```

- *Type:* *string

---

##### `GraphApiVersion`<sup>Required</sup> <a name="GraphApiVersion" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.property.graphApiVersion"></a>

```go
func GraphApiVersion() *string
```

- *Type:* *string

---

##### `LoginScopes`<sup>Required</sup> <a name="LoginScopes" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.property.loginScopes"></a>

```go
func LoginScopes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2OutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2">DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List <a name="DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.get"></a>

```go
func Get(index *f64) DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.property.clientSecretSettingName">ClientSecretSettingName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.property.loginScopes">LoginScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2">DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecretSettingName`<sup>Required</sup> <a name="ClientSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.property.clientSecretSettingName"></a>

```go
func ClientSecretSettingName() *string
```

- *Type:* *string

---

##### `LoginScopes`<sup>Required</sup> <a name="LoginScopes" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.property.loginScopes"></a>

```go
func LoginScopes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2OutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2">DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List <a name="DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.get"></a>

```go
func Get(index *f64) DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.property.allowedAudiences">AllowedAudiences</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.property.clientSecretSettingName">ClientSecretSettingName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.property.loginScopes">LoginScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2">DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedAudiences`<sup>Required</sup> <a name="AllowedAudiences" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.property.allowedAudiences"></a>

```go
func AllowedAudiences() *[]*string
```

- *Type:* *[]*string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecretSettingName`<sup>Required</sup> <a name="ClientSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.property.clientSecretSettingName"></a>

```go
func ClientSecretSettingName() *string
```

- *Type:* *string

---

##### `LoginScopes`<sup>Required</sup> <a name="LoginScopes" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.property.loginScopes"></a>

```go
func LoginScopes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2OutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2">DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsV2List <a name="DataAzurermWindowsFunctionAppAuthSettingsV2List" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppAuthSettingsV2List(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermWindowsFunctionAppAuthSettingsV2List
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.get"></a>

```go
func Get(index *f64) DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2List.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermWindowsFunctionAppAuthSettingsV2LoginList <a name="DataAzurermWindowsFunctionAppAuthSettingsV2LoginList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppAuthSettingsV2LoginList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermWindowsFunctionAppAuthSettingsV2LoginList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.get"></a>

```go
func Get(index *f64) DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.allowedExternalRedirectUrls">AllowedExternalRedirectUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.cookieExpirationConvention">CookieExpirationConvention</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.cookieExpirationTime">CookieExpirationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.logoutEndpoint">LogoutEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.nonceExpirationTime">NonceExpirationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.preserveUrlFragmentsForLogins">PreserveUrlFragmentsForLogins</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.tokenRefreshExtensionTime">TokenRefreshExtensionTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.tokenStoreEnabled">TokenStoreEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.tokenStorePath">TokenStorePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.tokenStoreSasSettingName">TokenStoreSasSettingName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.validateNonce">ValidateNonce</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2Login">DataAzurermWindowsFunctionAppAuthSettingsV2Login</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedExternalRedirectUrls`<sup>Required</sup> <a name="AllowedExternalRedirectUrls" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.allowedExternalRedirectUrls"></a>

```go
func AllowedExternalRedirectUrls() *[]*string
```

- *Type:* *[]*string

---

##### `CookieExpirationConvention`<sup>Required</sup> <a name="CookieExpirationConvention" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.cookieExpirationConvention"></a>

```go
func CookieExpirationConvention() *string
```

- *Type:* *string

---

##### `CookieExpirationTime`<sup>Required</sup> <a name="CookieExpirationTime" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.cookieExpirationTime"></a>

```go
func CookieExpirationTime() *string
```

- *Type:* *string

---

##### `LogoutEndpoint`<sup>Required</sup> <a name="LogoutEndpoint" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.logoutEndpoint"></a>

```go
func LogoutEndpoint() *string
```

- *Type:* *string

---

##### `NonceExpirationTime`<sup>Required</sup> <a name="NonceExpirationTime" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.nonceExpirationTime"></a>

```go
func NonceExpirationTime() *string
```

- *Type:* *string

---

##### `PreserveUrlFragmentsForLogins`<sup>Required</sup> <a name="PreserveUrlFragmentsForLogins" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.preserveUrlFragmentsForLogins"></a>

```go
func PreserveUrlFragmentsForLogins() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TokenRefreshExtensionTime`<sup>Required</sup> <a name="TokenRefreshExtensionTime" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.tokenRefreshExtensionTime"></a>

```go
func TokenRefreshExtensionTime() *f64
```

- *Type:* *f64

---

##### `TokenStoreEnabled`<sup>Required</sup> <a name="TokenStoreEnabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.tokenStoreEnabled"></a>

```go
func TokenStoreEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TokenStorePath`<sup>Required</sup> <a name="TokenStorePath" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.tokenStorePath"></a>

```go
func TokenStorePath() *string
```

- *Type:* *string

---

##### `TokenStoreSasSettingName`<sup>Required</sup> <a name="TokenStoreSasSettingName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.tokenStoreSasSettingName"></a>

```go
func TokenStoreSasSettingName() *string
```

- *Type:* *string

---

##### `ValidateNonce`<sup>Required</sup> <a name="ValidateNonce" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.validateNonce"></a>

```go
func ValidateNonce() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermWindowsFunctionAppAuthSettingsV2Login
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2Login">DataAzurermWindowsFunctionAppAuthSettingsV2Login</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List <a name="DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.get"></a>

```go
func Get(index *f64) DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.allowedAudiences">AllowedAudiences</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.clientSecretSettingName">ClientSecretSettingName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.loginScopes">LoginScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2">DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedAudiences`<sup>Required</sup> <a name="AllowedAudiences" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.allowedAudiences"></a>

```go
func AllowedAudiences() *[]*string
```

- *Type:* *[]*string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecretSettingName`<sup>Required</sup> <a name="ClientSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.clientSecretSettingName"></a>

```go
func ClientSecretSettingName() *string
```

- *Type:* *string

---

##### `LoginScopes`<sup>Required</sup> <a name="LoginScopes" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.loginScopes"></a>

```go
func LoginScopes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2OutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2">DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppAuthSettingsV2OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.activeDirectoryV2">ActiveDirectoryV2</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List">DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.appleV2">AppleV2</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List">DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.authEnabled">AuthEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.azureStaticWebAppV2">AzureStaticWebAppV2</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List">DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.configFilePath">ConfigFilePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.customOidcV2">CustomOidcV2</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List">DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.defaultProvider">DefaultProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.excludedPaths">ExcludedPaths</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.facebookV2">FacebookV2</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List">DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.forwardProxyConvention">ForwardProxyConvention</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.forwardProxyCustomHostHeaderName">ForwardProxyCustomHostHeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.forwardProxyCustomSchemeHeaderName">ForwardProxyCustomSchemeHeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.githubV2">GithubV2</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List">DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.googleV2">GoogleV2</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List">DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.httpRouteApiPrefix">HttpRouteApiPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.login">Login</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList">DataAzurermWindowsFunctionAppAuthSettingsV2LoginList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.microsoftV2">MicrosoftV2</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List">DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.requireAuthentication">RequireAuthentication</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.requireHttps">RequireHttps</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.runtimeVersion">RuntimeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.twitterV2">TwitterV2</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List">DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.unauthenticatedAction">UnauthenticatedAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2">DataAzurermWindowsFunctionAppAuthSettingsV2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActiveDirectoryV2`<sup>Required</sup> <a name="ActiveDirectoryV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.activeDirectoryV2"></a>

```go
func ActiveDirectoryV2() DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List">DataAzurermWindowsFunctionAppAuthSettingsV2ActiveDirectoryV2List</a>

---

##### `AppleV2`<sup>Required</sup> <a name="AppleV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.appleV2"></a>

```go
func AppleV2() DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List">DataAzurermWindowsFunctionAppAuthSettingsV2AppleV2List</a>

---

##### `AuthEnabled`<sup>Required</sup> <a name="AuthEnabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.authEnabled"></a>

```go
func AuthEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AzureStaticWebAppV2`<sup>Required</sup> <a name="AzureStaticWebAppV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.azureStaticWebAppV2"></a>

```go
func AzureStaticWebAppV2() DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List">DataAzurermWindowsFunctionAppAuthSettingsV2AzureStaticWebAppV2List</a>

---

##### `ConfigFilePath`<sup>Required</sup> <a name="ConfigFilePath" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.configFilePath"></a>

```go
func ConfigFilePath() *string
```

- *Type:* *string

---

##### `CustomOidcV2`<sup>Required</sup> <a name="CustomOidcV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.customOidcV2"></a>

```go
func CustomOidcV2() DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List">DataAzurermWindowsFunctionAppAuthSettingsV2CustomOidcV2List</a>

---

##### `DefaultProvider`<sup>Required</sup> <a name="DefaultProvider" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.defaultProvider"></a>

```go
func DefaultProvider() *string
```

- *Type:* *string

---

##### `ExcludedPaths`<sup>Required</sup> <a name="ExcludedPaths" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.excludedPaths"></a>

```go
func ExcludedPaths() *[]*string
```

- *Type:* *[]*string

---

##### `FacebookV2`<sup>Required</sup> <a name="FacebookV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.facebookV2"></a>

```go
func FacebookV2() DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List">DataAzurermWindowsFunctionAppAuthSettingsV2FacebookV2List</a>

---

##### `ForwardProxyConvention`<sup>Required</sup> <a name="ForwardProxyConvention" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.forwardProxyConvention"></a>

```go
func ForwardProxyConvention() *string
```

- *Type:* *string

---

##### `ForwardProxyCustomHostHeaderName`<sup>Required</sup> <a name="ForwardProxyCustomHostHeaderName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.forwardProxyCustomHostHeaderName"></a>

```go
func ForwardProxyCustomHostHeaderName() *string
```

- *Type:* *string

---

##### `ForwardProxyCustomSchemeHeaderName`<sup>Required</sup> <a name="ForwardProxyCustomSchemeHeaderName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.forwardProxyCustomSchemeHeaderName"></a>

```go
func ForwardProxyCustomSchemeHeaderName() *string
```

- *Type:* *string

---

##### `GithubV2`<sup>Required</sup> <a name="GithubV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.githubV2"></a>

```go
func GithubV2() DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List">DataAzurermWindowsFunctionAppAuthSettingsV2GithubV2List</a>

---

##### `GoogleV2`<sup>Required</sup> <a name="GoogleV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.googleV2"></a>

```go
func GoogleV2() DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List">DataAzurermWindowsFunctionAppAuthSettingsV2GoogleV2List</a>

---

##### `HttpRouteApiPrefix`<sup>Required</sup> <a name="HttpRouteApiPrefix" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.httpRouteApiPrefix"></a>

```go
func HttpRouteApiPrefix() *string
```

- *Type:* *string

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.login"></a>

```go
func Login() DataAzurermWindowsFunctionAppAuthSettingsV2LoginList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2LoginList">DataAzurermWindowsFunctionAppAuthSettingsV2LoginList</a>

---

##### `MicrosoftV2`<sup>Required</sup> <a name="MicrosoftV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.microsoftV2"></a>

```go
func MicrosoftV2() DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List">DataAzurermWindowsFunctionAppAuthSettingsV2MicrosoftV2List</a>

---

##### `RequireAuthentication`<sup>Required</sup> <a name="RequireAuthentication" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.requireAuthentication"></a>

```go
func RequireAuthentication() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RequireHttps`<sup>Required</sup> <a name="RequireHttps" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.requireHttps"></a>

```go
func RequireHttps() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.runtimeVersion"></a>

```go
func RuntimeVersion() *string
```

- *Type:* *string

---

##### `TwitterV2`<sup>Required</sup> <a name="TwitterV2" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.twitterV2"></a>

```go
func TwitterV2() DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List">DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List</a>

---

##### `UnauthenticatedAction`<sup>Required</sup> <a name="UnauthenticatedAction" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.unauthenticatedAction"></a>

```go
func UnauthenticatedAction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2OutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermWindowsFunctionAppAuthSettingsV2
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2">DataAzurermWindowsFunctionAppAuthSettingsV2</a>

---


### DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List <a name="DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.get"></a>

```go
func Get(index *f64) DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2List.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference <a name="DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.property.consumerKey">ConsumerKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.property.consumerSecretSettingName">ConsumerSecretSettingName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2">DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConsumerKey`<sup>Required</sup> <a name="ConsumerKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.property.consumerKey"></a>

```go
func ConsumerKey() *string
```

- *Type:* *string

---

##### `ConsumerSecretSettingName`<sup>Required</sup> <a name="ConsumerSecretSettingName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.property.consumerSecretSettingName"></a>

```go
func ConsumerSecretSettingName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2OutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2">DataAzurermWindowsFunctionAppAuthSettingsV2TwitterV2</a>

---


### DataAzurermWindowsFunctionAppBackupList <a name="DataAzurermWindowsFunctionAppBackupList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppBackupList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermWindowsFunctionAppBackupList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.get"></a>

```go
func Get(index *f64) DataAzurermWindowsFunctionAppBackupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermWindowsFunctionAppBackupOutputReference <a name="DataAzurermWindowsFunctionAppBackupOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppBackupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermWindowsFunctionAppBackupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList">DataAzurermWindowsFunctionAppBackupScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.storageAccountUrl">StorageAccountUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackup">DataAzurermWindowsFunctionAppBackup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.schedule"></a>

```go
func Schedule() DataAzurermWindowsFunctionAppBackupScheduleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList">DataAzurermWindowsFunctionAppBackupScheduleList</a>

---

##### `StorageAccountUrl`<sup>Required</sup> <a name="StorageAccountUrl" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.storageAccountUrl"></a>

```go
func StorageAccountUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermWindowsFunctionAppBackup
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackup">DataAzurermWindowsFunctionAppBackup</a>

---


### DataAzurermWindowsFunctionAppBackupScheduleList <a name="DataAzurermWindowsFunctionAppBackupScheduleList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppBackupScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermWindowsFunctionAppBackupScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.get"></a>

```go
func Get(index *f64) DataAzurermWindowsFunctionAppBackupScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermWindowsFunctionAppBackupScheduleOutputReference <a name="DataAzurermWindowsFunctionAppBackupScheduleOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppBackupScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermWindowsFunctionAppBackupScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.frequencyInterval">FrequencyInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.frequencyUnit">FrequencyUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.keepAtLeastOneBackup">KeepAtLeastOneBackup</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.lastExecutionTime">LastExecutionTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.retentionPeriodDays">RetentionPeriodDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupSchedule">DataAzurermWindowsFunctionAppBackupSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FrequencyInterval`<sup>Required</sup> <a name="FrequencyInterval" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.frequencyInterval"></a>

```go
func FrequencyInterval() *f64
```

- *Type:* *f64

---

##### `FrequencyUnit`<sup>Required</sup> <a name="FrequencyUnit" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.frequencyUnit"></a>

```go
func FrequencyUnit() *string
```

- *Type:* *string

---

##### `KeepAtLeastOneBackup`<sup>Required</sup> <a name="KeepAtLeastOneBackup" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.keepAtLeastOneBackup"></a>

```go
func KeepAtLeastOneBackup() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LastExecutionTime`<sup>Required</sup> <a name="LastExecutionTime" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.lastExecutionTime"></a>

```go
func LastExecutionTime() *string
```

- *Type:* *string

---

##### `RetentionPeriodDays`<sup>Required</sup> <a name="RetentionPeriodDays" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.retentionPeriodDays"></a>

```go
func RetentionPeriodDays() *f64
```

- *Type:* *f64

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermWindowsFunctionAppBackupSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppBackupSchedule">DataAzurermWindowsFunctionAppBackupSchedule</a>

---


### DataAzurermWindowsFunctionAppConnectionStringList <a name="DataAzurermWindowsFunctionAppConnectionStringList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppConnectionStringList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermWindowsFunctionAppConnectionStringList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.get"></a>

```go
func Get(index *f64) DataAzurermWindowsFunctionAppConnectionStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermWindowsFunctionAppConnectionStringOutputReference <a name="DataAzurermWindowsFunctionAppConnectionStringOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppConnectionStringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermWindowsFunctionAppConnectionStringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionString">DataAzurermWindowsFunctionAppConnectionString</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionStringOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermWindowsFunctionAppConnectionString
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppConnectionString">DataAzurermWindowsFunctionAppConnectionString</a>

---


### DataAzurermWindowsFunctionAppIdentityList <a name="DataAzurermWindowsFunctionAppIdentityList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppIdentityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermWindowsFunctionAppIdentityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.get"></a>

```go
func Get(index *f64) DataAzurermWindowsFunctionAppIdentityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermWindowsFunctionAppIdentityOutputReference <a name="DataAzurermWindowsFunctionAppIdentityOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermWindowsFunctionAppIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentity">DataAzurermWindowsFunctionAppIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermWindowsFunctionAppIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppIdentity">DataAzurermWindowsFunctionAppIdentity</a>

---


### DataAzurermWindowsFunctionAppSiteConfigApplicationStackList <a name="DataAzurermWindowsFunctionAppSiteConfigApplicationStackList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppSiteConfigApplicationStackList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermWindowsFunctionAppSiteConfigApplicationStackList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.get"></a>

```go
func Get(index *f64) DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference <a name="DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.dotnetVersion">DotnetVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.javaVersion">JavaVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.nodeVersion">NodeVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.powershellCoreVersion">PowershellCoreVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.useCustomRuntime">UseCustomRuntime</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.useDotnetIsolatedRuntime">UseDotnetIsolatedRuntime</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStack">DataAzurermWindowsFunctionAppSiteConfigApplicationStack</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DotnetVersion`<sup>Required</sup> <a name="DotnetVersion" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.dotnetVersion"></a>

```go
func DotnetVersion() *string
```

- *Type:* *string

---

##### `JavaVersion`<sup>Required</sup> <a name="JavaVersion" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.javaVersion"></a>

```go
func JavaVersion() *string
```

- *Type:* *string

---

##### `NodeVersion`<sup>Required</sup> <a name="NodeVersion" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.nodeVersion"></a>

```go
func NodeVersion() *string
```

- *Type:* *string

---

##### `PowershellCoreVersion`<sup>Required</sup> <a name="PowershellCoreVersion" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.powershellCoreVersion"></a>

```go
func PowershellCoreVersion() *string
```

- *Type:* *string

---

##### `UseCustomRuntime`<sup>Required</sup> <a name="UseCustomRuntime" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.useCustomRuntime"></a>

```go
func UseCustomRuntime() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `UseDotnetIsolatedRuntime`<sup>Required</sup> <a name="UseDotnetIsolatedRuntime" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.useDotnetIsolatedRuntime"></a>

```go
func UseDotnetIsolatedRuntime() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermWindowsFunctionAppSiteConfigApplicationStack
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStack">DataAzurermWindowsFunctionAppSiteConfigApplicationStack</a>

---


### DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList <a name="DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.get"></a>

```go
func Get(index *f64) DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference <a name="DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.diskQuotaMb">DiskQuotaMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.retentionPeriodDays">RetentionPeriodDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogs">DataAzurermWindowsFunctionAppSiteConfigAppServiceLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiskQuotaMb`<sup>Required</sup> <a name="DiskQuotaMb" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.diskQuotaMb"></a>

```go
func DiskQuotaMb() *f64
```

- *Type:* *f64

---

##### `RetentionPeriodDays`<sup>Required</sup> <a name="RetentionPeriodDays" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.retentionPeriodDays"></a>

```go
func RetentionPeriodDays() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermWindowsFunctionAppSiteConfigAppServiceLogs
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogs">DataAzurermWindowsFunctionAppSiteConfigAppServiceLogs</a>

---


### DataAzurermWindowsFunctionAppSiteConfigCorsList <a name="DataAzurermWindowsFunctionAppSiteConfigCorsList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppSiteConfigCorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermWindowsFunctionAppSiteConfigCorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.get"></a>

```go
func Get(index *f64) DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference <a name="DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppSiteConfigCorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.property.supportCredentials">SupportCredentials</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCors">DataAzurermWindowsFunctionAppSiteConfigCors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.property.allowedOrigins"></a>

```go
func AllowedOrigins() *[]*string
```

- *Type:* *[]*string

---

##### `SupportCredentials`<sup>Required</sup> <a name="SupportCredentials" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.property.supportCredentials"></a>

```go
func SupportCredentials() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermWindowsFunctionAppSiteConfigCors
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCors">DataAzurermWindowsFunctionAppSiteConfigCors</a>

---


### DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList <a name="DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.get"></a>

```go
func Get(index *f64) DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference <a name="DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid">XAzureFdid</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe">XFdHealthProbe</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor">XForwardedFor</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost">XForwardedHost</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeaders">DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `XAzureFdid`<sup>Required</sup> <a name="XAzureFdid" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```go
func XAzureFdid() *[]*string
```

- *Type:* *[]*string

---

##### `XFdHealthProbe`<sup>Required</sup> <a name="XFdHealthProbe" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```go
func XFdHealthProbe() *[]*string
```

- *Type:* *[]*string

---

##### `XForwardedFor`<sup>Required</sup> <a name="XForwardedFor" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```go
func XForwardedFor() *[]*string
```

- *Type:* *[]*string

---

##### `XForwardedHost`<sup>Required</sup> <a name="XForwardedHost" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```go
func XForwardedHost() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeaders
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeaders">DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeaders</a>

---


### DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList <a name="DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppSiteConfigIpRestrictionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.get"></a>

```go
func Get(index *f64) DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference <a name="DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList">DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.serviceTag">ServiceTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestriction">DataAzurermWindowsFunctionAppSiteConfigIpRestriction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.headers"></a>

```go
func Headers() DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList">DataAzurermWindowsFunctionAppSiteConfigIpRestrictionHeadersList</a>

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `ServiceTag`<sup>Required</sup> <a name="ServiceTag" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.serviceTag"></a>

```go
func ServiceTag() *string
```

- *Type:* *string

---

##### `VirtualNetworkSubnetId`<sup>Required</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```go
func VirtualNetworkSubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermWindowsFunctionAppSiteConfigIpRestriction
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestriction">DataAzurermWindowsFunctionAppSiteConfigIpRestriction</a>

---


### DataAzurermWindowsFunctionAppSiteConfigList <a name="DataAzurermWindowsFunctionAppSiteConfigList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppSiteConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermWindowsFunctionAppSiteConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.get"></a>

```go
func Get(index *f64) DataAzurermWindowsFunctionAppSiteConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermWindowsFunctionAppSiteConfigOutputReference <a name="DataAzurermWindowsFunctionAppSiteConfigOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppSiteConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermWindowsFunctionAppSiteConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.alwaysOn">AlwaysOn</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.apiDefinitionUrl">ApiDefinitionUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.apiManagementApiId">ApiManagementApiId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.appCommandLine">AppCommandLine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.applicationInsightsConnectionString">ApplicationInsightsConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.applicationInsightsKey">ApplicationInsightsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.applicationStack">ApplicationStack</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList">DataAzurermWindowsFunctionAppSiteConfigApplicationStackList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.appScaleLimit">AppScaleLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.appServiceLogs">AppServiceLogs</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList">DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.cors">Cors</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList">DataAzurermWindowsFunctionAppSiteConfigCorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.defaultDocuments">DefaultDocuments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.detailedErrorLoggingEnabled">DetailedErrorLoggingEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.elasticInstanceMinimum">ElasticInstanceMinimum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.ftpsState">FtpsState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.healthCheckEvictionTimeInMin">HealthCheckEvictionTimeInMin</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.healthCheckPath">HealthCheckPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.http2Enabled">Http2Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.ipRestriction">IpRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList">DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.loadBalancingMode">LoadBalancingMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.managedPipelineMode">ManagedPipelineMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.minimumTlsVersion">MinimumTlsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.preWarmedInstanceCount">PreWarmedInstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.remoteDebuggingEnabled">RemoteDebuggingEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.remoteDebuggingVersion">RemoteDebuggingVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled">RuntimeScaleMonitoringEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.scmIpRestriction">ScmIpRestriction</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList">DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.scmMinimumTlsVersion">ScmMinimumTlsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.scmType">ScmType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.scmUseMainIpRestriction">ScmUseMainIpRestriction</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.use32BitWorker">Use32BitWorker</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.vnetRouteAllEnabled">VnetRouteAllEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.websocketsEnabled">WebsocketsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.windowsFxVersion">WindowsFxVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.workerCount">WorkerCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfig">DataAzurermWindowsFunctionAppSiteConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlwaysOn`<sup>Required</sup> <a name="AlwaysOn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.alwaysOn"></a>

```go
func AlwaysOn() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ApiDefinitionUrl`<sup>Required</sup> <a name="ApiDefinitionUrl" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.apiDefinitionUrl"></a>

```go
func ApiDefinitionUrl() *string
```

- *Type:* *string

---

##### `ApiManagementApiId`<sup>Required</sup> <a name="ApiManagementApiId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.apiManagementApiId"></a>

```go
func ApiManagementApiId() *string
```

- *Type:* *string

---

##### `AppCommandLine`<sup>Required</sup> <a name="AppCommandLine" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.appCommandLine"></a>

```go
func AppCommandLine() *string
```

- *Type:* *string

---

##### `ApplicationInsightsConnectionString`<sup>Required</sup> <a name="ApplicationInsightsConnectionString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.applicationInsightsConnectionString"></a>

```go
func ApplicationInsightsConnectionString() *string
```

- *Type:* *string

---

##### `ApplicationInsightsKey`<sup>Required</sup> <a name="ApplicationInsightsKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.applicationInsightsKey"></a>

```go
func ApplicationInsightsKey() *string
```

- *Type:* *string

---

##### `ApplicationStack`<sup>Required</sup> <a name="ApplicationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.applicationStack"></a>

```go
func ApplicationStack() DataAzurermWindowsFunctionAppSiteConfigApplicationStackList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigApplicationStackList">DataAzurermWindowsFunctionAppSiteConfigApplicationStackList</a>

---

##### `AppScaleLimit`<sup>Required</sup> <a name="AppScaleLimit" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.appScaleLimit"></a>

```go
func AppScaleLimit() *f64
```

- *Type:* *f64

---

##### `AppServiceLogs`<sup>Required</sup> <a name="AppServiceLogs" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.appServiceLogs"></a>

```go
func AppServiceLogs() DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList">DataAzurermWindowsFunctionAppSiteConfigAppServiceLogsList</a>

---

##### `Cors`<sup>Required</sup> <a name="Cors" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.cors"></a>

```go
func Cors() DataAzurermWindowsFunctionAppSiteConfigCorsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigCorsList">DataAzurermWindowsFunctionAppSiteConfigCorsList</a>

---

##### `DefaultDocuments`<sup>Required</sup> <a name="DefaultDocuments" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.defaultDocuments"></a>

```go
func DefaultDocuments() *[]*string
```

- *Type:* *[]*string

---

##### `DetailedErrorLoggingEnabled`<sup>Required</sup> <a name="DetailedErrorLoggingEnabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.detailedErrorLoggingEnabled"></a>

```go
func DetailedErrorLoggingEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ElasticInstanceMinimum`<sup>Required</sup> <a name="ElasticInstanceMinimum" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.elasticInstanceMinimum"></a>

```go
func ElasticInstanceMinimum() *f64
```

- *Type:* *f64

---

##### `FtpsState`<sup>Required</sup> <a name="FtpsState" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.ftpsState"></a>

```go
func FtpsState() *string
```

- *Type:* *string

---

##### `HealthCheckEvictionTimeInMin`<sup>Required</sup> <a name="HealthCheckEvictionTimeInMin" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.healthCheckEvictionTimeInMin"></a>

```go
func HealthCheckEvictionTimeInMin() *f64
```

- *Type:* *f64

---

##### `HealthCheckPath`<sup>Required</sup> <a name="HealthCheckPath" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.healthCheckPath"></a>

```go
func HealthCheckPath() *string
```

- *Type:* *string

---

##### `Http2Enabled`<sup>Required</sup> <a name="Http2Enabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.http2Enabled"></a>

```go
func Http2Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IpRestriction`<sup>Required</sup> <a name="IpRestriction" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.ipRestriction"></a>

```go
func IpRestriction() DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList">DataAzurermWindowsFunctionAppSiteConfigIpRestrictionList</a>

---

##### `LoadBalancingMode`<sup>Required</sup> <a name="LoadBalancingMode" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.loadBalancingMode"></a>

```go
func LoadBalancingMode() *string
```

- *Type:* *string

---

##### `ManagedPipelineMode`<sup>Required</sup> <a name="ManagedPipelineMode" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.managedPipelineMode"></a>

```go
func ManagedPipelineMode() *string
```

- *Type:* *string

---

##### `MinimumTlsVersion`<sup>Required</sup> <a name="MinimumTlsVersion" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.minimumTlsVersion"></a>

```go
func MinimumTlsVersion() *string
```

- *Type:* *string

---

##### `PreWarmedInstanceCount`<sup>Required</sup> <a name="PreWarmedInstanceCount" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.preWarmedInstanceCount"></a>

```go
func PreWarmedInstanceCount() *f64
```

- *Type:* *f64

---

##### `RemoteDebuggingEnabled`<sup>Required</sup> <a name="RemoteDebuggingEnabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.remoteDebuggingEnabled"></a>

```go
func RemoteDebuggingEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RemoteDebuggingVersion`<sup>Required</sup> <a name="RemoteDebuggingVersion" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.remoteDebuggingVersion"></a>

```go
func RemoteDebuggingVersion() *string
```

- *Type:* *string

---

##### `RuntimeScaleMonitoringEnabled`<sup>Required</sup> <a name="RuntimeScaleMonitoringEnabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.runtimeScaleMonitoringEnabled"></a>

```go
func RuntimeScaleMonitoringEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ScmIpRestriction`<sup>Required</sup> <a name="ScmIpRestriction" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.scmIpRestriction"></a>

```go
func ScmIpRestriction() DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList">DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList</a>

---

##### `ScmMinimumTlsVersion`<sup>Required</sup> <a name="ScmMinimumTlsVersion" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.scmMinimumTlsVersion"></a>

```go
func ScmMinimumTlsVersion() *string
```

- *Type:* *string

---

##### `ScmType`<sup>Required</sup> <a name="ScmType" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.scmType"></a>

```go
func ScmType() *string
```

- *Type:* *string

---

##### `ScmUseMainIpRestriction`<sup>Required</sup> <a name="ScmUseMainIpRestriction" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.scmUseMainIpRestriction"></a>

```go
func ScmUseMainIpRestriction() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Use32BitWorker`<sup>Required</sup> <a name="Use32BitWorker" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.use32BitWorker"></a>

```go
func Use32BitWorker() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `VnetRouteAllEnabled`<sup>Required</sup> <a name="VnetRouteAllEnabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.vnetRouteAllEnabled"></a>

```go
func VnetRouteAllEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `WebsocketsEnabled`<sup>Required</sup> <a name="WebsocketsEnabled" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.websocketsEnabled"></a>

```go
func WebsocketsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `WindowsFxVersion`<sup>Required</sup> <a name="WindowsFxVersion" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.windowsFxVersion"></a>

```go
func WindowsFxVersion() *string
```

- *Type:* *string

---

##### `WorkerCount`<sup>Required</sup> <a name="WorkerCount" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.workerCount"></a>

```go
func WorkerCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermWindowsFunctionAppSiteConfig
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfig">DataAzurermWindowsFunctionAppSiteConfig</a>

---


### DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList <a name="DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.get"></a>

```go
func Get(index *f64) DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference <a name="DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid">XAzureFdid</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe">XFdHealthProbe</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor">XForwardedFor</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost">XForwardedHost</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeaders">DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `XAzureFdid`<sup>Required</sup> <a name="XAzureFdid" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xAzureFdid"></a>

```go
func XAzureFdid() *[]*string
```

- *Type:* *[]*string

---

##### `XFdHealthProbe`<sup>Required</sup> <a name="XFdHealthProbe" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xFdHealthProbe"></a>

```go
func XFdHealthProbe() *[]*string
```

- *Type:* *[]*string

---

##### `XForwardedFor`<sup>Required</sup> <a name="XForwardedFor" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedFor"></a>

```go
func XForwardedFor() *[]*string
```

- *Type:* *[]*string

---

##### `XForwardedHost`<sup>Required</sup> <a name="XForwardedHost" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.xForwardedHost"></a>

```go
func XForwardedHost() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeaders
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeaders">DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeaders</a>

---


### DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList <a name="DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.get"></a>

```go
func Get(index *f64) DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference <a name="DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList">DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.serviceTag">ServiceTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId">VirtualNetworkSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestriction">DataAzurermWindowsFunctionAppSiteConfigScmIpRestriction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.headers"></a>

```go
func Headers() DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList">DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionHeadersList</a>

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `ServiceTag`<sup>Required</sup> <a name="ServiceTag" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.serviceTag"></a>

```go
func ServiceTag() *string
```

- *Type:* *string

---

##### `VirtualNetworkSubnetId`<sup>Required</sup> <a name="VirtualNetworkSubnetId" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.virtualNetworkSubnetId"></a>

```go
func VirtualNetworkSubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestrictionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermWindowsFunctionAppSiteConfigScmIpRestriction
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteConfigScmIpRestriction">DataAzurermWindowsFunctionAppSiteConfigScmIpRestriction</a>

---


### DataAzurermWindowsFunctionAppSiteCredentialList <a name="DataAzurermWindowsFunctionAppSiteCredentialList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppSiteCredentialList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermWindowsFunctionAppSiteCredentialList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.get"></a>

```go
func Get(index *f64) DataAzurermWindowsFunctionAppSiteCredentialOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermWindowsFunctionAppSiteCredentialOutputReference <a name="DataAzurermWindowsFunctionAppSiteCredentialOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppSiteCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermWindowsFunctionAppSiteCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredential">DataAzurermWindowsFunctionAppSiteCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermWindowsFunctionAppSiteCredential
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppSiteCredential">DataAzurermWindowsFunctionAppSiteCredential</a>

---


### DataAzurermWindowsFunctionAppStickySettingsList <a name="DataAzurermWindowsFunctionAppStickySettingsList" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppStickySettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermWindowsFunctionAppStickySettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.get"></a>

```go
func Get(index *f64) DataAzurermWindowsFunctionAppStickySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermWindowsFunctionAppStickySettingsOutputReference <a name="DataAzurermWindowsFunctionAppStickySettingsOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppStickySettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermWindowsFunctionAppStickySettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.property.appSettingNames">AppSettingNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.property.connectionStringNames">ConnectionStringNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettings">DataAzurermWindowsFunctionAppStickySettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppSettingNames`<sup>Required</sup> <a name="AppSettingNames" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.property.appSettingNames"></a>

```go
func AppSettingNames() *[]*string
```

- *Type:* *[]*string

---

##### `ConnectionStringNames`<sup>Required</sup> <a name="ConnectionStringNames" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.property.connectionStringNames"></a>

```go
func ConnectionStringNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermWindowsFunctionAppStickySettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppStickySettings">DataAzurermWindowsFunctionAppStickySettings</a>

---


### DataAzurermWindowsFunctionAppTimeoutsOutputReference <a name="DataAzurermWindowsFunctionAppTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermwindowsfunctionapp"

dataazurermwindowsfunctionapp.NewDataAzurermWindowsFunctionAppTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermWindowsFunctionAppTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermWindowsFunctionApp.DataAzurermWindowsFunctionAppTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



