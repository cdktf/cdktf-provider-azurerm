# `dataAzurermNetappBackupVault` Submodule <a name="`dataAzurermNetappBackupVault` Submodule" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermNetappBackupVault <a name="DataAzurermNetappBackupVault" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/netapp_backup_vault azurerm_netapp_backup_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermnetappbackupvault"

dataazurermnetappbackupvault.NewDataAzurermNetappBackupVault(scope Construct, id *string, config DataAzurermNetappBackupVaultConfig) DataAzurermNetappBackupVault
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig">DataAzurermNetappBackupVaultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig">DataAzurermNetappBackupVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermNetappBackupVaultTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeouts">DataAzurermNetappBackupVaultTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermNetappBackupVault resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermnetappbackupvault"

dataazurermnetappbackupvault.DataAzurermNetappBackupVault_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermnetappbackupvault"

dataazurermnetappbackupvault.DataAzurermNetappBackupVault_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermnetappbackupvault"

dataazurermnetappbackupvault.DataAzurermNetappBackupVault_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermnetappbackupvault"

dataazurermnetappbackupvault.DataAzurermNetappBackupVault_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermNetappBackupVault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermNetappBackupVault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermNetappBackupVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/netapp_backup_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermNetappBackupVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference">DataAzurermNetappBackupVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.accountNameInput">AccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.accountName">AccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.timeouts"></a>

```go
func Timeouts() DataAzurermNetappBackupVaultTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference">DataAzurermNetappBackupVaultTimeoutsOutputReference</a>

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.accountNameInput"></a>

```go
func AccountNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.accountName"></a>

```go
func AccountName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVault.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermNetappBackupVaultConfig <a name="DataAzurermNetappBackupVaultConfig" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermnetappbackupvault"

&dataazurermnetappbackupvault.DataAzurermNetappBackupVaultConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountName: *string,
	Name: *string,
	ResourceGroupName: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.accountName">AccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/netapp_backup_vault#account_name DataAzurermNetappBackupVault#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/netapp_backup_vault#name DataAzurermNetappBackupVault#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/netapp_backup_vault#resource_group_name DataAzurermNetappBackupVault#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/netapp_backup_vault#id DataAzurermNetappBackupVault#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeouts">DataAzurermNetappBackupVaultTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.accountName"></a>

```go
AccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/netapp_backup_vault#account_name DataAzurermNetappBackupVault#account_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/netapp_backup_vault#name DataAzurermNetappBackupVault#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/netapp_backup_vault#resource_group_name DataAzurermNetappBackupVault#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/netapp_backup_vault#id DataAzurermNetappBackupVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultConfig.property.timeouts"></a>

```go
Timeouts DataAzurermNetappBackupVaultTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeouts">DataAzurermNetappBackupVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/netapp_backup_vault#timeouts DataAzurermNetappBackupVault#timeouts}

---

### DataAzurermNetappBackupVaultTimeouts <a name="DataAzurermNetappBackupVaultTimeouts" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermnetappbackupvault"

&dataazurermnetappbackupvault.DataAzurermNetappBackupVaultTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/netapp_backup_vault#read DataAzurermNetappBackupVault#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.36.0/docs/data-sources/netapp_backup_vault#read DataAzurermNetappBackupVault#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermNetappBackupVaultTimeoutsOutputReference <a name="DataAzurermNetappBackupVaultTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermnetappbackupvault"

dataazurermnetappbackupvault.NewDataAzurermNetappBackupVaultTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermNetappBackupVaultTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermNetappBackupVault.DataAzurermNetappBackupVaultTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



