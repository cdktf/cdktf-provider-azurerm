# `dataAzurermOracleExascaleDatabaseStorageVault` Submodule <a name="`dataAzurermOracleExascaleDatabaseStorageVault` Submodule" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOracleExascaleDatabaseStorageVault <a name="DataAzurermOracleExascaleDatabaseStorageVault" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_exascale_database_storage_vault azurerm_oracle_exascale_database_storage_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleexascaledatabasestoragevault"

dataazurermoracleexascaledatabasestoragevault.NewDataAzurermOracleExascaleDatabaseStorageVault(scope Construct, id *string, config DataAzurermOracleExascaleDatabaseStorageVaultConfig) DataAzurermOracleExascaleDatabaseStorageVault
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig">DataAzurermOracleExascaleDatabaseStorageVaultConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig">DataAzurermOracleExascaleDatabaseStorageVaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermOracleExascaleDatabaseStorageVaultTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeouts">DataAzurermOracleExascaleDatabaseStorageVaultTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermOracleExascaleDatabaseStorageVault resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleexascaledatabasestoragevault"

dataazurermoracleexascaledatabasestoragevault.DataAzurermOracleExascaleDatabaseStorageVault_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleexascaledatabasestoragevault"

dataazurermoracleexascaledatabasestoragevault.DataAzurermOracleExascaleDatabaseStorageVault_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleexascaledatabasestoragevault"

dataazurermoracleexascaledatabasestoragevault.DataAzurermOracleExascaleDatabaseStorageVault_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleexascaledatabasestoragevault"

dataazurermoracleexascaledatabasestoragevault.DataAzurermOracleExascaleDatabaseStorageVault_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermOracleExascaleDatabaseStorageVault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermOracleExascaleDatabaseStorageVault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermOracleExascaleDatabaseStorageVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_exascale_database_storage_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermOracleExascaleDatabaseStorageVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.additionalFlashCachePercentage">AdditionalFlashCachePercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.highCapacityDatabaseStorage">HighCapacityDatabaseStorage</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList">DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.lifecycleState">LifecycleState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.ociUrl">OciUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference">DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.virtualMachineClusterCount">VirtualMachineClusterCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.zones">Zones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AdditionalFlashCachePercentage`<sup>Required</sup> <a name="AdditionalFlashCachePercentage" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.additionalFlashCachePercentage"></a>

```go
func AdditionalFlashCachePercentage() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `HighCapacityDatabaseStorage`<sup>Required</sup> <a name="HighCapacityDatabaseStorage" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.highCapacityDatabaseStorage"></a>

```go
func HighCapacityDatabaseStorage() DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList">DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.lifecycleState"></a>

```go
func LifecycleState() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.ociUrl"></a>

```go
func OciUrl() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.timeouts"></a>

```go
func Timeouts() DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference">DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference</a>

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `VirtualMachineClusterCount`<sup>Required</sup> <a name="VirtualMachineClusterCount" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.virtualMachineClusterCount"></a>

```go
func VirtualMachineClusterCount() *f64
```

- *Type:* *f64

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.zones"></a>

```go
func Zones() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVault.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOracleExascaleDatabaseStorageVaultConfig <a name="DataAzurermOracleExascaleDatabaseStorageVaultConfig" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleexascaledatabasestoragevault"

&dataazurermoracleexascaledatabasestoragevault.DataAzurermOracleExascaleDatabaseStorageVaultConfig {
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
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_exascale_database_storage_vault#name DataAzurermOracleExascaleDatabaseStorageVault#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_exascale_database_storage_vault#resource_group_name DataAzurermOracleExascaleDatabaseStorageVault#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_exascale_database_storage_vault#id DataAzurermOracleExascaleDatabaseStorageVault#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeouts">DataAzurermOracleExascaleDatabaseStorageVaultTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_exascale_database_storage_vault#name DataAzurermOracleExascaleDatabaseStorageVault#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_exascale_database_storage_vault#resource_group_name DataAzurermOracleExascaleDatabaseStorageVault#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_exascale_database_storage_vault#id DataAzurermOracleExascaleDatabaseStorageVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultConfig.property.timeouts"></a>

```go
Timeouts DataAzurermOracleExascaleDatabaseStorageVaultTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeouts">DataAzurermOracleExascaleDatabaseStorageVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_exascale_database_storage_vault#timeouts DataAzurermOracleExascaleDatabaseStorageVault#timeouts}

---

### DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage <a name="DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleexascaledatabasestoragevault"

&dataazurermoracleexascaledatabasestoragevault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage {

}
```


### DataAzurermOracleExascaleDatabaseStorageVaultTimeouts <a name="DataAzurermOracleExascaleDatabaseStorageVaultTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleexascaledatabasestoragevault"

&dataazurermoracleexascaledatabasestoragevault.DataAzurermOracleExascaleDatabaseStorageVaultTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_exascale_database_storage_vault#read DataAzurermOracleExascaleDatabaseStorageVault#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_exascale_database_storage_vault#read DataAzurermOracleExascaleDatabaseStorageVault#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList <a name="DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleexascaledatabasestoragevault"

dataazurermoracleexascaledatabasestoragevault.NewDataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.get"></a>

```go
func Get(index *f64) DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference <a name="DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleexascaledatabasestoragevault"

dataazurermoracleexascaledatabasestoragevault.NewDataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.availableSizeInGb">AvailableSizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGb">TotalSizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailableSizeInGb`<sup>Required</sup> <a name="AvailableSizeInGb" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.availableSizeInGb"></a>

```go
func AvailableSizeInGb() *f64
```

- *Type:* *f64

---

##### `TotalSizeInGb`<sup>Required</sup> <a name="TotalSizeInGb" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGb"></a>

```go
func TotalSizeInGb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage">DataAzurermOracleExascaleDatabaseStorageVaultHighCapacityDatabaseStorage</a>

---


### DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference <a name="DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleexascaledatabasestoragevault"

dataazurermoracleexascaledatabasestoragevault.NewDataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermOracleExascaleDatabaseStorageVault.DataAzurermOracleExascaleDatabaseStorageVaultTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



