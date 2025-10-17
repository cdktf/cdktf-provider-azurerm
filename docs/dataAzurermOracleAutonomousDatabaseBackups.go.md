# `dataAzurermOracleAutonomousDatabaseBackups` Submodule <a name="`dataAzurermOracleAutonomousDatabaseBackups` Submodule" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermOracleAutonomousDatabaseBackups <a name="DataAzurermOracleAutonomousDatabaseBackups" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_backups azurerm_oracle_autonomous_database_backups}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleautonomousdatabasebackups"

dataazurermoracleautonomousdatabasebackups.NewDataAzurermOracleAutonomousDatabaseBackups(scope Construct, id *string, config DataAzurermOracleAutonomousDatabaseBackupsConfig) DataAzurermOracleAutonomousDatabaseBackups
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig">DataAzurermOracleAutonomousDatabaseBackupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig">DataAzurermOracleAutonomousDatabaseBackupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermOracleAutonomousDatabaseBackupsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeouts">DataAzurermOracleAutonomousDatabaseBackupsTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermOracleAutonomousDatabaseBackups resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleautonomousdatabasebackups"

dataazurermoracleautonomousdatabasebackups.DataAzurermOracleAutonomousDatabaseBackups_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleautonomousdatabasebackups"

dataazurermoracleautonomousdatabasebackups.DataAzurermOracleAutonomousDatabaseBackups_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleautonomousdatabasebackups"

dataazurermoracleautonomousdatabasebackups.DataAzurermOracleAutonomousDatabaseBackups_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleautonomousdatabasebackups"

dataazurermoracleautonomousdatabasebackups.DataAzurermOracleAutonomousDatabaseBackups_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermOracleAutonomousDatabaseBackups resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermOracleAutonomousDatabaseBackups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermOracleAutonomousDatabaseBackups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_backups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermOracleAutonomousDatabaseBackups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.autonomousDatabaseBackups">AutonomousDatabaseBackups</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList">DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference">DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.autonomousDatabaseIdInput">AutonomousDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AutonomousDatabaseBackups`<sup>Required</sup> <a name="AutonomousDatabaseBackups" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.autonomousDatabaseBackups"></a>

```go
func AutonomousDatabaseBackups() DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList">DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.timeouts"></a>

```go
func Timeouts() DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference">DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference</a>

---

##### `AutonomousDatabaseIdInput`<sup>Optional</sup> <a name="AutonomousDatabaseIdInput" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.autonomousDatabaseIdInput"></a>

```go
func AutonomousDatabaseIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.autonomousDatabaseId"></a>

```go
func AutonomousDatabaseId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackups.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackups <a name="DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackups" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackups"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackups.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleautonomousdatabasebackups"

&dataazurermoracleautonomousdatabasebackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackups {

}
```


### DataAzurermOracleAutonomousDatabaseBackupsConfig <a name="DataAzurermOracleAutonomousDatabaseBackupsConfig" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleautonomousdatabasebackups"

&dataazurermoracleautonomousdatabasebackups.DataAzurermOracleAutonomousDatabaseBackupsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AutonomousDatabaseId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_backups#autonomous_database_id DataAzurermOracleAutonomousDatabaseBackups#autonomous_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_backups#id DataAzurermOracleAutonomousDatabaseBackups#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeouts">DataAzurermOracleAutonomousDatabaseBackupsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.autonomousDatabaseId"></a>

```go
AutonomousDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_backups#autonomous_database_id DataAzurermOracleAutonomousDatabaseBackups#autonomous_database_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_backups#id DataAzurermOracleAutonomousDatabaseBackups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsConfig.property.timeouts"></a>

```go
Timeouts DataAzurermOracleAutonomousDatabaseBackupsTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeouts">DataAzurermOracleAutonomousDatabaseBackupsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_backups#timeouts DataAzurermOracleAutonomousDatabaseBackups#timeouts}

---

### DataAzurermOracleAutonomousDatabaseBackupsTimeouts <a name="DataAzurermOracleAutonomousDatabaseBackupsTimeouts" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleautonomousdatabasebackups"

&dataazurermoracleautonomousdatabasebackups.DataAzurermOracleAutonomousDatabaseBackupsTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_backups#read DataAzurermOracleAutonomousDatabaseBackups#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/data-sources/oracle_autonomous_database_backups#read DataAzurermOracleAutonomousDatabaseBackups#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList <a name="DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleautonomousdatabasebackups"

dataazurermoracleautonomousdatabasebackups.NewDataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.get"></a>

```go
func Get(index *f64) DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference <a name="DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleautonomousdatabasebackups"

dataazurermoracleautonomousdatabasebackups.NewDataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.automatic">Automatic</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.autonomousDatabaseBackupOcid">AutonomousDatabaseBackupOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.autonomousDatabaseOcid">AutonomousDatabaseOcid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.databaseBackupSizeInTbs">DatabaseBackupSizeInTbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.databaseVersion">DatabaseVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.lifecycleState">LifecycleState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.provisioningState">ProvisioningState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.restorable">Restorable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.retentionPeriodInDays">RetentionPeriodInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.timeAvailableTil">TimeAvailableTil</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.timeEnded">TimeEnded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackups">DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Automatic`<sup>Required</sup> <a name="Automatic" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.automatic"></a>

```go
func Automatic() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AutonomousDatabaseBackupOcid`<sup>Required</sup> <a name="AutonomousDatabaseBackupOcid" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.autonomousDatabaseBackupOcid"></a>

```go
func AutonomousDatabaseBackupOcid() *string
```

- *Type:* *string

---

##### `AutonomousDatabaseOcid`<sup>Required</sup> <a name="AutonomousDatabaseOcid" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.autonomousDatabaseOcid"></a>

```go
func AutonomousDatabaseOcid() *string
```

- *Type:* *string

---

##### `DatabaseBackupSizeInTbs`<sup>Required</sup> <a name="DatabaseBackupSizeInTbs" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.databaseBackupSizeInTbs"></a>

```go
func DatabaseBackupSizeInTbs() *f64
```

- *Type:* *f64

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.databaseVersion"></a>

```go
func DatabaseVersion() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.lifecycleState"></a>

```go
func LifecycleState() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `ProvisioningState`<sup>Required</sup> <a name="ProvisioningState" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.provisioningState"></a>

```go
func ProvisioningState() *string
```

- *Type:* *string

---

##### `Restorable`<sup>Required</sup> <a name="Restorable" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.restorable"></a>

```go
func Restorable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RetentionPeriodInDays`<sup>Required</sup> <a name="RetentionPeriodInDays" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.retentionPeriodInDays"></a>

```go
func RetentionPeriodInDays() *f64
```

- *Type:* *f64

---

##### `TimeAvailableTil`<sup>Required</sup> <a name="TimeAvailableTil" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.timeAvailableTil"></a>

```go
func TimeAvailableTil() *string
```

- *Type:* *string

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.timeEnded"></a>

```go
func TimeEnded() *string
```

- *Type:* *string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackups
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackups">DataAzurermOracleAutonomousDatabaseBackupsAutonomousDatabaseBackups</a>

---


### DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference <a name="DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/dataazurermoracleautonomousdatabasebackups"

dataazurermoracleautonomousdatabasebackups.NewDataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermOracleAutonomousDatabaseBackups.DataAzurermOracleAutonomousDatabaseBackupsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



