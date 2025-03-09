# `dataAzurermVpnServerConfiguration` Submodule <a name="`dataAzurermVpnServerConfiguration` Submodule" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermVpnServerConfiguration <a name="DataAzurermVpnServerConfiguration" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/vpn_server_configuration azurerm_vpn_server_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermvpnserverconfiguration"

dataazurermvpnserverconfiguration.NewDataAzurermVpnServerConfiguration(scope Construct, id *string, config DataAzurermVpnServerConfigurationConfig) DataAzurermVpnServerConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig">DataAzurermVpnServerConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig">DataAzurermVpnServerConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermVpnServerConfigurationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts">DataAzurermVpnServerConfigurationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermVpnServerConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermvpnserverconfiguration"

dataazurermvpnserverconfiguration.DataAzurermVpnServerConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermvpnserverconfiguration"

dataazurermvpnserverconfiguration.DataAzurermVpnServerConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermvpnserverconfiguration"

dataazurermvpnserverconfiguration.DataAzurermVpnServerConfiguration_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermvpnserverconfiguration"

dataazurermvpnserverconfiguration.DataAzurermVpnServerConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermVpnServerConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermVpnServerConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermVpnServerConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/vpn_server_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermVpnServerConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.azureActiveDirectoryAuthentication">AzureActiveDirectoryAuthentication</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList">DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.clientRevokedCertificate">ClientRevokedCertificate</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList">DataAzurermVpnServerConfigurationClientRevokedCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.clientRootCertificate">ClientRootCertificate</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList">DataAzurermVpnServerConfigurationClientRootCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.ipsecPolicy">IpsecPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList">DataAzurermVpnServerConfigurationIpsecPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.radius">Radius</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList">DataAzurermVpnServerConfigurationRadiusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference">DataAzurermVpnServerConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.vpnAuthenticationTypes">VpnAuthenticationTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.vpnProtocols">VpnProtocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AzureActiveDirectoryAuthentication`<sup>Required</sup> <a name="AzureActiveDirectoryAuthentication" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.azureActiveDirectoryAuthentication"></a>

```go
func AzureActiveDirectoryAuthentication() DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList">DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList</a>

---

##### `ClientRevokedCertificate`<sup>Required</sup> <a name="ClientRevokedCertificate" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.clientRevokedCertificate"></a>

```go
func ClientRevokedCertificate() DataAzurermVpnServerConfigurationClientRevokedCertificateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList">DataAzurermVpnServerConfigurationClientRevokedCertificateList</a>

---

##### `ClientRootCertificate`<sup>Required</sup> <a name="ClientRootCertificate" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.clientRootCertificate"></a>

```go
func ClientRootCertificate() DataAzurermVpnServerConfigurationClientRootCertificateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList">DataAzurermVpnServerConfigurationClientRootCertificateList</a>

---

##### `IpsecPolicy`<sup>Required</sup> <a name="IpsecPolicy" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.ipsecPolicy"></a>

```go
func IpsecPolicy() DataAzurermVpnServerConfigurationIpsecPolicyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList">DataAzurermVpnServerConfigurationIpsecPolicyList</a>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Radius`<sup>Required</sup> <a name="Radius" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.radius"></a>

```go
func Radius() DataAzurermVpnServerConfigurationRadiusList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList">DataAzurermVpnServerConfigurationRadiusList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.timeouts"></a>

```go
func Timeouts() DataAzurermVpnServerConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference">DataAzurermVpnServerConfigurationTimeoutsOutputReference</a>

---

##### `VpnAuthenticationTypes`<sup>Required</sup> <a name="VpnAuthenticationTypes" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.vpnAuthenticationTypes"></a>

```go
func VpnAuthenticationTypes() *[]*string
```

- *Type:* *[]*string

---

##### `VpnProtocols`<sup>Required</sup> <a name="VpnProtocols" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.vpnProtocols"></a>

```go
func VpnProtocols() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication <a name="DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermvpnserverconfiguration"

&dataazurermvpnserverconfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication {

}
```


### DataAzurermVpnServerConfigurationClientRevokedCertificate <a name="DataAzurermVpnServerConfigurationClientRevokedCertificate" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermvpnserverconfiguration"

&dataazurermvpnserverconfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificate {

}
```


### DataAzurermVpnServerConfigurationClientRootCertificate <a name="DataAzurermVpnServerConfigurationClientRootCertificate" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermvpnserverconfiguration"

&dataazurermvpnserverconfiguration.DataAzurermVpnServerConfigurationClientRootCertificate {

}
```


### DataAzurermVpnServerConfigurationConfig <a name="DataAzurermVpnServerConfigurationConfig" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermvpnserverconfiguration"

&dataazurermvpnserverconfiguration.DataAzurermVpnServerConfigurationConfig {
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
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/vpn_server_configuration#name DataAzurermVpnServerConfiguration#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/vpn_server_configuration#resource_group_name DataAzurermVpnServerConfiguration#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/vpn_server_configuration#id DataAzurermVpnServerConfiguration#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts">DataAzurermVpnServerConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/vpn_server_configuration#name DataAzurermVpnServerConfiguration#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/vpn_server_configuration#resource_group_name DataAzurermVpnServerConfiguration#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/vpn_server_configuration#id DataAzurermVpnServerConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationConfig.property.timeouts"></a>

```go
Timeouts DataAzurermVpnServerConfigurationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts">DataAzurermVpnServerConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/vpn_server_configuration#timeouts DataAzurermVpnServerConfiguration#timeouts}

---

### DataAzurermVpnServerConfigurationIpsecPolicy <a name="DataAzurermVpnServerConfigurationIpsecPolicy" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermvpnserverconfiguration"

&dataazurermvpnserverconfiguration.DataAzurermVpnServerConfigurationIpsecPolicy {

}
```


### DataAzurermVpnServerConfigurationRadius <a name="DataAzurermVpnServerConfigurationRadius" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadius"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadius.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermvpnserverconfiguration"

&dataazurermvpnserverconfiguration.DataAzurermVpnServerConfigurationRadius {

}
```


### DataAzurermVpnServerConfigurationRadiusClientRootCertificate <a name="DataAzurermVpnServerConfigurationRadiusClientRootCertificate" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermvpnserverconfiguration"

&dataazurermvpnserverconfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificate {

}
```


### DataAzurermVpnServerConfigurationRadiusServer <a name="DataAzurermVpnServerConfigurationRadiusServer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermvpnserverconfiguration"

&dataazurermvpnserverconfiguration.DataAzurermVpnServerConfigurationRadiusServer {

}
```


### DataAzurermVpnServerConfigurationRadiusServerRootCertificate <a name="DataAzurermVpnServerConfigurationRadiusServerRootCertificate" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermvpnserverconfiguration"

&dataazurermvpnserverconfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificate {

}
```


### DataAzurermVpnServerConfigurationTimeouts <a name="DataAzurermVpnServerConfigurationTimeouts" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermvpnserverconfiguration"

&dataazurermvpnserverconfiguration.DataAzurermVpnServerConfigurationTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/vpn_server_configuration#read DataAzurermVpnServerConfiguration#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.22.0/docs/data-sources/vpn_server_configuration#read DataAzurermVpnServerConfiguration#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList <a name="DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermvpnserverconfiguration"

dataazurermvpnserverconfiguration.NewDataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.get"></a>

```go
func Get(index *f64) DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference <a name="DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermvpnserverconfiguration"

dataazurermvpnserverconfiguration.NewDataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.audience">Audience</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.tenant">Tenant</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication">DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.audience"></a>

```go
func Audience() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `Tenant`<sup>Required</sup> <a name="Tenant" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.tenant"></a>

```go
func Tenant() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication">DataAzurermVpnServerConfigurationAzureActiveDirectoryAuthentication</a>

---


### DataAzurermVpnServerConfigurationClientRevokedCertificateList <a name="DataAzurermVpnServerConfigurationClientRevokedCertificateList" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermvpnserverconfiguration"

dataazurermvpnserverconfiguration.NewDataAzurermVpnServerConfigurationClientRevokedCertificateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermVpnServerConfigurationClientRevokedCertificateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.get"></a>

```go
func Get(index *f64) DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference <a name="DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermvpnserverconfiguration"

dataazurermvpnserverconfiguration.NewDataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.thumbprint">Thumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificate">DataAzurermVpnServerConfigurationClientRevokedCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.thumbprint"></a>

```go
func Thumbprint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermVpnServerConfigurationClientRevokedCertificate
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRevokedCertificate">DataAzurermVpnServerConfigurationClientRevokedCertificate</a>

---


### DataAzurermVpnServerConfigurationClientRootCertificateList <a name="DataAzurermVpnServerConfigurationClientRootCertificateList" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermvpnserverconfiguration"

dataazurermvpnserverconfiguration.NewDataAzurermVpnServerConfigurationClientRootCertificateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermVpnServerConfigurationClientRootCertificateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.get"></a>

```go
func Get(index *f64) DataAzurermVpnServerConfigurationClientRootCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermVpnServerConfigurationClientRootCertificateOutputReference <a name="DataAzurermVpnServerConfigurationClientRootCertificateOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermvpnserverconfiguration"

dataazurermvpnserverconfiguration.NewDataAzurermVpnServerConfigurationClientRootCertificateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermVpnServerConfigurationClientRootCertificateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.publicCertData">PublicCertData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificate">DataAzurermVpnServerConfigurationClientRootCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PublicCertData`<sup>Required</sup> <a name="PublicCertData" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.publicCertData"></a>

```go
func PublicCertData() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermVpnServerConfigurationClientRootCertificate
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationClientRootCertificate">DataAzurermVpnServerConfigurationClientRootCertificate</a>

---


### DataAzurermVpnServerConfigurationIpsecPolicyList <a name="DataAzurermVpnServerConfigurationIpsecPolicyList" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermvpnserverconfiguration"

dataazurermvpnserverconfiguration.NewDataAzurermVpnServerConfigurationIpsecPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermVpnServerConfigurationIpsecPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.get"></a>

```go
func Get(index *f64) DataAzurermVpnServerConfigurationIpsecPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermVpnServerConfigurationIpsecPolicyOutputReference <a name="DataAzurermVpnServerConfigurationIpsecPolicyOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermvpnserverconfiguration"

dataazurermvpnserverconfiguration.NewDataAzurermVpnServerConfigurationIpsecPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermVpnServerConfigurationIpsecPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.dhGroup">DhGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.ikeEncryption">IkeEncryption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.ikeIntegrity">IkeIntegrity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.ipsecEncryption">IpsecEncryption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.ipsecIntegrity">IpsecIntegrity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.pfsGroup">PfsGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.saDataSizeKilobytes">SaDataSizeKilobytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.saLifetimeSeconds">SaLifetimeSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicy">DataAzurermVpnServerConfigurationIpsecPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DhGroup`<sup>Required</sup> <a name="DhGroup" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.dhGroup"></a>

```go
func DhGroup() *string
```

- *Type:* *string

---

##### `IkeEncryption`<sup>Required</sup> <a name="IkeEncryption" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.ikeEncryption"></a>

```go
func IkeEncryption() *string
```

- *Type:* *string

---

##### `IkeIntegrity`<sup>Required</sup> <a name="IkeIntegrity" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.ikeIntegrity"></a>

```go
func IkeIntegrity() *string
```

- *Type:* *string

---

##### `IpsecEncryption`<sup>Required</sup> <a name="IpsecEncryption" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.ipsecEncryption"></a>

```go
func IpsecEncryption() *string
```

- *Type:* *string

---

##### `IpsecIntegrity`<sup>Required</sup> <a name="IpsecIntegrity" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.ipsecIntegrity"></a>

```go
func IpsecIntegrity() *string
```

- *Type:* *string

---

##### `PfsGroup`<sup>Required</sup> <a name="PfsGroup" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.pfsGroup"></a>

```go
func PfsGroup() *string
```

- *Type:* *string

---

##### `SaDataSizeKilobytes`<sup>Required</sup> <a name="SaDataSizeKilobytes" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.saDataSizeKilobytes"></a>

```go
func SaDataSizeKilobytes() *f64
```

- *Type:* *f64

---

##### `SaLifetimeSeconds`<sup>Required</sup> <a name="SaLifetimeSeconds" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.saLifetimeSeconds"></a>

```go
func SaLifetimeSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermVpnServerConfigurationIpsecPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationIpsecPolicy">DataAzurermVpnServerConfigurationIpsecPolicy</a>

---


### DataAzurermVpnServerConfigurationRadiusClientRootCertificateList <a name="DataAzurermVpnServerConfigurationRadiusClientRootCertificateList" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermvpnserverconfiguration"

dataazurermvpnserverconfiguration.NewDataAzurermVpnServerConfigurationRadiusClientRootCertificateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermVpnServerConfigurationRadiusClientRootCertificateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.get"></a>

```go
func Get(index *f64) DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference <a name="DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermvpnserverconfiguration"

dataazurermvpnserverconfiguration.NewDataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.thumbprint">Thumbprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificate">DataAzurermVpnServerConfigurationRadiusClientRootCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Thumbprint`<sup>Required</sup> <a name="Thumbprint" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.thumbprint"></a>

```go
func Thumbprint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermVpnServerConfigurationRadiusClientRootCertificate
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificate">DataAzurermVpnServerConfigurationRadiusClientRootCertificate</a>

---


### DataAzurermVpnServerConfigurationRadiusList <a name="DataAzurermVpnServerConfigurationRadiusList" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermvpnserverconfiguration"

dataazurermvpnserverconfiguration.NewDataAzurermVpnServerConfigurationRadiusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermVpnServerConfigurationRadiusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.get"></a>

```go
func Get(index *f64) DataAzurermVpnServerConfigurationRadiusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermVpnServerConfigurationRadiusOutputReference <a name="DataAzurermVpnServerConfigurationRadiusOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermvpnserverconfiguration"

dataazurermvpnserverconfiguration.NewDataAzurermVpnServerConfigurationRadiusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermVpnServerConfigurationRadiusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.clientRootCertificate">ClientRootCertificate</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList">DataAzurermVpnServerConfigurationRadiusClientRootCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.server">Server</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList">DataAzurermVpnServerConfigurationRadiusServerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.serverRootCertificate">ServerRootCertificate</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList">DataAzurermVpnServerConfigurationRadiusServerRootCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadius">DataAzurermVpnServerConfigurationRadius</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientRootCertificate`<sup>Required</sup> <a name="ClientRootCertificate" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.clientRootCertificate"></a>

```go
func ClientRootCertificate() DataAzurermVpnServerConfigurationRadiusClientRootCertificateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusClientRootCertificateList">DataAzurermVpnServerConfigurationRadiusClientRootCertificateList</a>

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.server"></a>

```go
func Server() DataAzurermVpnServerConfigurationRadiusServerList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList">DataAzurermVpnServerConfigurationRadiusServerList</a>

---

##### `ServerRootCertificate`<sup>Required</sup> <a name="ServerRootCertificate" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.serverRootCertificate"></a>

```go
func ServerRootCertificate() DataAzurermVpnServerConfigurationRadiusServerRootCertificateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList">DataAzurermVpnServerConfigurationRadiusServerRootCertificateList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermVpnServerConfigurationRadius
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadius">DataAzurermVpnServerConfigurationRadius</a>

---


### DataAzurermVpnServerConfigurationRadiusServerList <a name="DataAzurermVpnServerConfigurationRadiusServerList" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermvpnserverconfiguration"

dataazurermvpnserverconfiguration.NewDataAzurermVpnServerConfigurationRadiusServerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermVpnServerConfigurationRadiusServerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.get"></a>

```go
func Get(index *f64) DataAzurermVpnServerConfigurationRadiusServerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermVpnServerConfigurationRadiusServerOutputReference <a name="DataAzurermVpnServerConfigurationRadiusServerOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermvpnserverconfiguration"

dataazurermvpnserverconfiguration.NewDataAzurermVpnServerConfigurationRadiusServerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermVpnServerConfigurationRadiusServerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.score">Score</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServer">DataAzurermVpnServerConfigurationRadiusServer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `Score`<sup>Required</sup> <a name="Score" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.score"></a>

```go
func Score() *f64
```

- *Type:* *f64

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermVpnServerConfigurationRadiusServer
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServer">DataAzurermVpnServerConfigurationRadiusServer</a>

---


### DataAzurermVpnServerConfigurationRadiusServerRootCertificateList <a name="DataAzurermVpnServerConfigurationRadiusServerRootCertificateList" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermvpnserverconfiguration"

dataazurermvpnserverconfiguration.NewDataAzurermVpnServerConfigurationRadiusServerRootCertificateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermVpnServerConfigurationRadiusServerRootCertificateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.get"></a>

```go
func Get(index *f64) DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference <a name="DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermvpnserverconfiguration"

dataazurermvpnserverconfiguration.NewDataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.publicCertData">PublicCertData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificate">DataAzurermVpnServerConfigurationRadiusServerRootCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PublicCertData`<sup>Required</sup> <a name="PublicCertData" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.publicCertData"></a>

```go
func PublicCertData() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermVpnServerConfigurationRadiusServerRootCertificate
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationRadiusServerRootCertificate">DataAzurermVpnServerConfigurationRadiusServerRootCertificate</a>

---


### DataAzurermVpnServerConfigurationTimeoutsOutputReference <a name="DataAzurermVpnServerConfigurationTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermvpnserverconfiguration"

dataazurermvpnserverconfiguration.NewDataAzurermVpnServerConfigurationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermVpnServerConfigurationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermVpnServerConfiguration.DataAzurermVpnServerConfigurationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



