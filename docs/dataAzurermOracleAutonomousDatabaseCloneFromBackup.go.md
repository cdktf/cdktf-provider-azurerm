# `dataAzurermOracleAutonomousDatabaseCloneFromBackup` Submodule <a name="`dataAzurermOracleAutonomousDatabaseCloneFromBackup` Submodule" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOracleAutonomousDatabaseCloneFromBackup <a name="DataAzurermOracleAutonomousDatabaseCloneFromBackup" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_backup azurerm_oracle_autonomous_database_clone_from_backup}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleautonomousdatabaseclonefrombackup"

dataazurermoracleautonomousdatabaseclonefrombackup.NewDataAzurermOracleAutonomousDatabaseCloneFromBackup(scope Construct, id *string, config DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig) DataAzurermOracleAutonomousDatabaseCloneFromBackup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig">DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig">DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermOracleAutonomousDatabaseCloneFromBackup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleautonomousdatabaseclonefrombackup"

dataazurermoracleautonomousdatabaseclonefrombackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleautonomousdatabaseclonefrombackup"

dataazurermoracleautonomousdatabaseclonefrombackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleautonomousdatabaseclonefrombackup"

dataazurermoracleautonomousdatabaseclonefrombackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleautonomousdatabaseclonefrombackup"

dataazurermoracleautonomousdatabaseclonefrombackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermOracleAutonomousDatabaseCloneFromBackup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermOracleAutonomousDatabaseCloneFromBackup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermOracleAutonomousDatabaseCloneFromBackup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermOracleAutonomousDatabaseCloneFromBackup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.actualUsedDataStorageSizeInTb">ActualUsedDataStorageSizeInTb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.allocatedStorageSizeInTb">AllocatedStorageSizeInTb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.allowedIpAddresses">AllowedIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.autoScalingEnabled">AutoScalingEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.autoScalingForStorageEnabled">AutoScalingForStorageEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.availableUpgradeVersions">AvailableUpgradeVersions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.backupRetentionPeriodInDays">BackupRetentionPeriodInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.characterSet">CharacterSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.computeCount">ComputeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.computeModel">ComputeModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.connectionStrings">ConnectionStrings</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.cpuCoreCount">CpuCoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.customerContacts">CustomerContacts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.databaseVersion">DatabaseVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.databaseWorkload">DatabaseWorkload</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.dataStorageSizeInGb">DataStorageSizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.dataStorageSizeInTb">DataStorageSizeInTb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.failedDataRecoveryInSeconds">FailedDataRecoveryInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.inMemoryAreaInGb">InMemoryAreaInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.licenseModel">LicenseModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.lifecycleState">LifecycleState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.localAdgAutoFailoverMaxDataLossLimitInSeconds">LocalAdgAutoFailoverMaxDataLossLimitInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.localDataGuardEnabled">LocalDataGuardEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.longTermBackupSchedule">LongTermBackupSchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList">DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.memoryPerOracleComputeUnitInGb">MemoryPerOracleComputeUnitInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.mtlsConnectionRequired">MtlsConnectionRequired</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.nationalCharacterSet">NationalCharacterSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.nextLongTermBackupTimestamp">NextLongTermBackupTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.ocid">Ocid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.ociUrl">OciUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.peerDatabaseIds">PeerDatabaseIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.preview">Preview</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.previewVersionWithServiceTermsAccepted">PreviewVersionWithServiceTermsAccepted</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.privateEndpointIp">PrivateEndpointIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.privateEndpointLabel">PrivateEndpointLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.privateEndpointUrl">PrivateEndpointUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.provisionableCpus">ProvisionableCpus</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.remoteDataGuardEnabled">RemoteDataGuardEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.serviceConsoleUrl">ServiceConsoleUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.sourceAutonomousDatabaseId">SourceAutonomousDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.sqlWebDeveloperUrl">SqlWebDeveloperUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.supportedRegionsToCloneTo">SupportedRegionsToCloneTo</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeCreatedInUtc">TimeCreatedInUtc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeDataGuardRoleChangedInUtc">TimeDataGuardRoleChangedInUtc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeDeletionOfFreeAutonomousDatabaseInUtc">TimeDeletionOfFreeAutonomousDatabaseInUtc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeLocalDataGuardEnabledInUtc">TimeLocalDataGuardEnabledInUtc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeMaintenanceBeginInUtc">TimeMaintenanceBeginInUtc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeMaintenanceEndInUtc">TimeMaintenanceEndInUtc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeOfLastFailoverInUtc">TimeOfLastFailoverInUtc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeOfLastRefreshInUtc">TimeOfLastRefreshInUtc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeOfLastRefreshPointInUtc">TimeOfLastRefreshPointInUtc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeOfLastSwitchoverInUtc">TimeOfLastSwitchoverInUtc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference">DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeReclamationOfFreeAutonomousDatabaseInUtc">TimeReclamationOfFreeAutonomousDatabaseInUtc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.usedDataStorageSizeInGb">UsedDataStorageSizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.usedDataStorageSizeInTb">UsedDataStorageSizeInTb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ActualUsedDataStorageSizeInTb`<sup>Required</sup> <a name="ActualUsedDataStorageSizeInTb" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.actualUsedDataStorageSizeInTb"></a>

```go
func ActualUsedDataStorageSizeInTb() *f64
```

- *Type:* *f64

---

##### `AllocatedStorageSizeInTb`<sup>Required</sup> <a name="AllocatedStorageSizeInTb" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.allocatedStorageSizeInTb"></a>

```go
func AllocatedStorageSizeInTb() *f64
```

- *Type:* *f64

---

##### `AllowedIpAddresses`<sup>Required</sup> <a name="AllowedIpAddresses" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.allowedIpAddresses"></a>

```go
func AllowedIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `AutoScalingEnabled`<sup>Required</sup> <a name="AutoScalingEnabled" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.autoScalingEnabled"></a>

```go
func AutoScalingEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AutoScalingForStorageEnabled`<sup>Required</sup> <a name="AutoScalingForStorageEnabled" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.autoScalingForStorageEnabled"></a>

```go
func AutoScalingForStorageEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AvailableUpgradeVersions`<sup>Required</sup> <a name="AvailableUpgradeVersions" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.availableUpgradeVersions"></a>

```go
func AvailableUpgradeVersions() *[]*string
```

- *Type:* *[]*string

---

##### `BackupRetentionPeriodInDays`<sup>Required</sup> <a name="BackupRetentionPeriodInDays" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.backupRetentionPeriodInDays"></a>

```go
func BackupRetentionPeriodInDays() *f64
```

- *Type:* *f64

---

##### `CharacterSet`<sup>Required</sup> <a name="CharacterSet" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.characterSet"></a>

```go
func CharacterSet() *string
```

- *Type:* *string

---

##### `ComputeCount`<sup>Required</sup> <a name="ComputeCount" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.computeCount"></a>

```go
func ComputeCount() *f64
```

- *Type:* *f64

---

##### `ComputeModel`<sup>Required</sup> <a name="ComputeModel" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.computeModel"></a>

```go
func ComputeModel() *string
```

- *Type:* *string

---

##### `ConnectionStrings`<sup>Required</sup> <a name="ConnectionStrings" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.connectionStrings"></a>

```go
func ConnectionStrings() *[]*string
```

- *Type:* *[]*string

---

##### `CpuCoreCount`<sup>Required</sup> <a name="CpuCoreCount" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.cpuCoreCount"></a>

```go
func CpuCoreCount() *f64
```

- *Type:* *f64

---

##### `CustomerContacts`<sup>Required</sup> <a name="CustomerContacts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.customerContacts"></a>

```go
func CustomerContacts() *[]*string
```

- *Type:* *[]*string

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.databaseVersion"></a>

```go
func DatabaseVersion() *string
```

- *Type:* *string

---

##### `DatabaseWorkload`<sup>Required</sup> <a name="DatabaseWorkload" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.databaseWorkload"></a>

```go
func DatabaseWorkload() *string
```

- *Type:* *string

---

##### `DataStorageSizeInGb`<sup>Required</sup> <a name="DataStorageSizeInGb" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.dataStorageSizeInGb"></a>

```go
func DataStorageSizeInGb() *f64
```

- *Type:* *f64

---

##### `DataStorageSizeInTb`<sup>Required</sup> <a name="DataStorageSizeInTb" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.dataStorageSizeInTb"></a>

```go
func DataStorageSizeInTb() *f64
```

- *Type:* *f64

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FailedDataRecoveryInSeconds`<sup>Required</sup> <a name="FailedDataRecoveryInSeconds" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.failedDataRecoveryInSeconds"></a>

```go
func FailedDataRecoveryInSeconds() *f64
```

- *Type:* *f64

---

##### `InMemoryAreaInGb`<sup>Required</sup> <a name="InMemoryAreaInGb" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.inMemoryAreaInGb"></a>

```go
func InMemoryAreaInGb() *f64
```

- *Type:* *f64

---

##### `LicenseModel`<sup>Required</sup> <a name="LicenseModel" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.licenseModel"></a>

```go
func LicenseModel() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.lifecycleState"></a>

```go
func LifecycleState() *string
```

- *Type:* *string

---

##### `LocalAdgAutoFailoverMaxDataLossLimitInSeconds`<sup>Required</sup> <a name="LocalAdgAutoFailoverMaxDataLossLimitInSeconds" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.localAdgAutoFailoverMaxDataLossLimitInSeconds"></a>

```go
func LocalAdgAutoFailoverMaxDataLossLimitInSeconds() *f64
```

- *Type:* *f64

---

##### `LocalDataGuardEnabled`<sup>Required</sup> <a name="LocalDataGuardEnabled" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.localDataGuardEnabled"></a>

```go
func LocalDataGuardEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `LongTermBackupSchedule`<sup>Required</sup> <a name="LongTermBackupSchedule" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.longTermBackupSchedule"></a>

```go
func LongTermBackupSchedule() DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList">DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList</a>

---

##### `MemoryPerOracleComputeUnitInGb`<sup>Required</sup> <a name="MemoryPerOracleComputeUnitInGb" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.memoryPerOracleComputeUnitInGb"></a>

```go
func MemoryPerOracleComputeUnitInGb() *f64
```

- *Type:* *f64

---

##### `MtlsConnectionRequired`<sup>Required</sup> <a name="MtlsConnectionRequired" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.mtlsConnectionRequired"></a>

```go
func MtlsConnectionRequired() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NationalCharacterSet`<sup>Required</sup> <a name="NationalCharacterSet" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.nationalCharacterSet"></a>

```go
func NationalCharacterSet() *string
```

- *Type:* *string

---

##### `NextLongTermBackupTimestamp`<sup>Required</sup> <a name="NextLongTermBackupTimestamp" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.nextLongTermBackupTimestamp"></a>

```go
func NextLongTermBackupTimestamp() *string
```

- *Type:* *string

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.ocid"></a>

```go
func Ocid() *string
```

- *Type:* *string

---

##### `OciUrl`<sup>Required</sup> <a name="OciUrl" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.ociUrl"></a>

```go
func OciUrl() *string
```

- *Type:* *string

---

##### `PeerDatabaseIds`<sup>Required</sup> <a name="PeerDatabaseIds" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.peerDatabaseIds"></a>

```go
func PeerDatabaseIds() *[]*string
```

- *Type:* *[]*string

---

##### `Preview`<sup>Required</sup> <a name="Preview" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.preview"></a>

```go
func Preview() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PreviewVersionWithServiceTermsAccepted`<sup>Required</sup> <a name="PreviewVersionWithServiceTermsAccepted" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.previewVersionWithServiceTermsAccepted"></a>

```go
func PreviewVersionWithServiceTermsAccepted() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PrivateEndpointIp`<sup>Required</sup> <a name="PrivateEndpointIp" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.privateEndpointIp"></a>

```go
func PrivateEndpointIp() *string
```

- *Type:* *string

---

##### `PrivateEndpointLabel`<sup>Required</sup> <a name="PrivateEndpointLabel" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.privateEndpointLabel"></a>

```go
func PrivateEndpointLabel() *string
```

- *Type:* *string

---

##### `PrivateEndpointUrl`<sup>Required</sup> <a name="PrivateEndpointUrl" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.privateEndpointUrl"></a>

```go
func PrivateEndpointUrl() *string
```

- *Type:* *string

---

##### `ProvisionableCpus`<sup>Required</sup> <a name="ProvisionableCpus" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.provisionableCpus"></a>

```go
func ProvisionableCpus() *[]*f64
```

- *Type:* *[]*f64

---

##### `RemoteDataGuardEnabled`<sup>Required</sup> <a name="RemoteDataGuardEnabled" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.remoteDataGuardEnabled"></a>

```go
func RemoteDataGuardEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ServiceConsoleUrl`<sup>Required</sup> <a name="ServiceConsoleUrl" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.serviceConsoleUrl"></a>

```go
func ServiceConsoleUrl() *string
```

- *Type:* *string

---

##### `SourceAutonomousDatabaseId`<sup>Required</sup> <a name="SourceAutonomousDatabaseId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.sourceAutonomousDatabaseId"></a>

```go
func SourceAutonomousDatabaseId() *string
```

- *Type:* *string

---

##### `SqlWebDeveloperUrl`<sup>Required</sup> <a name="SqlWebDeveloperUrl" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.sqlWebDeveloperUrl"></a>

```go
func SqlWebDeveloperUrl() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `SupportedRegionsToCloneTo`<sup>Required</sup> <a name="SupportedRegionsToCloneTo" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.supportedRegionsToCloneTo"></a>

```go
func SupportedRegionsToCloneTo() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreatedInUtc`<sup>Required</sup> <a name="TimeCreatedInUtc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeCreatedInUtc"></a>

```go
func TimeCreatedInUtc() *string
```

- *Type:* *string

---

##### `TimeDataGuardRoleChangedInUtc`<sup>Required</sup> <a name="TimeDataGuardRoleChangedInUtc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeDataGuardRoleChangedInUtc"></a>

```go
func TimeDataGuardRoleChangedInUtc() *string
```

- *Type:* *string

---

##### `TimeDeletionOfFreeAutonomousDatabaseInUtc`<sup>Required</sup> <a name="TimeDeletionOfFreeAutonomousDatabaseInUtc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeDeletionOfFreeAutonomousDatabaseInUtc"></a>

```go
func TimeDeletionOfFreeAutonomousDatabaseInUtc() *string
```

- *Type:* *string

---

##### `TimeLocalDataGuardEnabledInUtc`<sup>Required</sup> <a name="TimeLocalDataGuardEnabledInUtc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeLocalDataGuardEnabledInUtc"></a>

```go
func TimeLocalDataGuardEnabledInUtc() *string
```

- *Type:* *string

---

##### `TimeMaintenanceBeginInUtc`<sup>Required</sup> <a name="TimeMaintenanceBeginInUtc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeMaintenanceBeginInUtc"></a>

```go
func TimeMaintenanceBeginInUtc() *string
```

- *Type:* *string

---

##### `TimeMaintenanceEndInUtc`<sup>Required</sup> <a name="TimeMaintenanceEndInUtc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeMaintenanceEndInUtc"></a>

```go
func TimeMaintenanceEndInUtc() *string
```

- *Type:* *string

---

##### `TimeOfLastFailoverInUtc`<sup>Required</sup> <a name="TimeOfLastFailoverInUtc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeOfLastFailoverInUtc"></a>

```go
func TimeOfLastFailoverInUtc() *string
```

- *Type:* *string

---

##### `TimeOfLastRefreshInUtc`<sup>Required</sup> <a name="TimeOfLastRefreshInUtc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeOfLastRefreshInUtc"></a>

```go
func TimeOfLastRefreshInUtc() *string
```

- *Type:* *string

---

##### `TimeOfLastRefreshPointInUtc`<sup>Required</sup> <a name="TimeOfLastRefreshPointInUtc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeOfLastRefreshPointInUtc"></a>

```go
func TimeOfLastRefreshPointInUtc() *string
```

- *Type:* *string

---

##### `TimeOfLastSwitchoverInUtc`<sup>Required</sup> <a name="TimeOfLastSwitchoverInUtc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeOfLastSwitchoverInUtc"></a>

```go
func TimeOfLastSwitchoverInUtc() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeouts"></a>

```go
func Timeouts() DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference">DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference</a>

---

##### `TimeReclamationOfFreeAutonomousDatabaseInUtc`<sup>Required</sup> <a name="TimeReclamationOfFreeAutonomousDatabaseInUtc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeReclamationOfFreeAutonomousDatabaseInUtc"></a>

```go
func TimeReclamationOfFreeAutonomousDatabaseInUtc() *string
```

- *Type:* *string

---

##### `UsedDataStorageSizeInGb`<sup>Required</sup> <a name="UsedDataStorageSizeInGb" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.usedDataStorageSizeInGb"></a>

```go
func UsedDataStorageSizeInGb() *f64
```

- *Type:* *f64

---

##### `UsedDataStorageSizeInTb`<sup>Required</sup> <a name="UsedDataStorageSizeInTb" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.usedDataStorageSizeInTb"></a>

```go
func UsedDataStorageSizeInTb() *f64
```

- *Type:* *f64

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.virtualNetworkId"></a>

```go
func VirtualNetworkId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig <a name="DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleautonomousdatabaseclonefrombackup"

&dataazurermoracleautonomousdatabaseclonefrombackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig {
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
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#name DataAzurermOracleAutonomousDatabaseCloneFromBackup#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#resource_group_name DataAzurermOracleAutonomousDatabaseCloneFromBackup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#id DataAzurermOracleAutonomousDatabaseCloneFromBackup#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#name DataAzurermOracleAutonomousDatabaseCloneFromBackup#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#resource_group_name DataAzurermOracleAutonomousDatabaseCloneFromBackup#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#id DataAzurermOracleAutonomousDatabaseCloneFromBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupConfig.property.timeouts"></a>

```go
Timeouts DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts">DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#timeouts DataAzurermOracleAutonomousDatabaseCloneFromBackup#timeouts}

---

### DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule <a name="DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleautonomousdatabaseclonefrombackup"

&dataazurermoracleautonomousdatabaseclonefrombackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule {

}
```


### DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts <a name="DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleautonomousdatabaseclonefrombackup"

&dataazurermoracleautonomousdatabaseclonefrombackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#read DataAzurermOracleAutonomousDatabaseCloneFromBackup#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_clone_from_backup#read DataAzurermOracleAutonomousDatabaseCloneFromBackup#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList <a name="DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleautonomousdatabaseclonefrombackup"

dataazurermoracleautonomousdatabaseclonefrombackup.NewDataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.get"></a>

```go
func Get(index *f64) DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference <a name="DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleautonomousdatabaseclonefrombackup"

dataazurermoracleautonomousdatabaseclonefrombackup.NewDataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.repeatCadence">RepeatCadence</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.retentionPeriodInDays">RetentionPeriodInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.timeOfBackupInUtc">TimeOfBackupInUtc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule">DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RepeatCadence`<sup>Required</sup> <a name="RepeatCadence" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.repeatCadence"></a>

```go
func RepeatCadence() *string
```

- *Type:* *string

---

##### `RetentionPeriodInDays`<sup>Required</sup> <a name="RetentionPeriodInDays" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.retentionPeriodInDays"></a>

```go
func RetentionPeriodInDays() *f64
```

- *Type:* *f64

---

##### `TimeOfBackupInUtc`<sup>Required</sup> <a name="TimeOfBackupInUtc" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.timeOfBackupInUtc"></a>

```go
func TimeOfBackupInUtc() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule">DataAzurermOracleAutonomousDatabaseCloneFromBackupLongTermBackupSchedule</a>

---


### DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference <a name="DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleautonomousdatabaseclonefrombackup"

dataazurermoracleautonomousdatabaseclonefrombackup.NewDataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseCloneFromBackup.DataAzurermOracleAutonomousDatabaseCloneFromBackupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



