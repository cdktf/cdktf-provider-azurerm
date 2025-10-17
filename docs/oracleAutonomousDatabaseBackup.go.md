# `oracleAutonomousDatabaseBackup` Submodule <a name="`oracleAutonomousDatabaseBackup` Submodule" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleAutonomousDatabaseBackup <a name="OracleAutonomousDatabaseBackup" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup azurerm_oracle_autonomous_database_backup}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/oracleautonomousdatabasebackup"

oracleautonomousdatabasebackup.NewOracleAutonomousDatabaseBackup(scope Construct, id *string, config OracleAutonomousDatabaseBackupConfig) OracleAutonomousDatabaseBackup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig">OracleAutonomousDatabaseBackupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig">OracleAutonomousDatabaseBackupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.putTimeouts"></a>

```go
func PutTimeouts(value OracleAutonomousDatabaseBackupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts">OracleAutonomousDatabaseBackupTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OracleAutonomousDatabaseBackup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/oracleautonomousdatabasebackup"

oracleautonomousdatabasebackup.OracleAutonomousDatabaseBackup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/oracleautonomousdatabasebackup"

oracleautonomousdatabasebackup.OracleAutonomousDatabaseBackup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/oracleautonomousdatabasebackup"

oracleautonomousdatabasebackup.OracleAutonomousDatabaseBackup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/oracleautonomousdatabasebackup"

oracleautonomousdatabasebackup.OracleAutonomousDatabaseBackup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OracleAutonomousDatabaseBackup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OracleAutonomousDatabaseBackup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OracleAutonomousDatabaseBackup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OracleAutonomousDatabaseBackup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference">OracleAutonomousDatabaseBackupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.autonomousDatabaseIdInput">AutonomousDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.retentionPeriodInDaysInput">RetentionPeriodInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.retentionPeriodInDays">RetentionPeriodInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.timeouts"></a>

```go
func Timeouts() OracleAutonomousDatabaseBackupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference">OracleAutonomousDatabaseBackupTimeoutsOutputReference</a>

---

##### `AutonomousDatabaseIdInput`<sup>Optional</sup> <a name="AutonomousDatabaseIdInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.autonomousDatabaseIdInput"></a>

```go
func AutonomousDatabaseIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RetentionPeriodInDaysInput`<sup>Optional</sup> <a name="RetentionPeriodInDaysInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.retentionPeriodInDaysInput"></a>

```go
func RetentionPeriodInDaysInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.autonomousDatabaseId"></a>

```go
func AutonomousDatabaseId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RetentionPeriodInDays`<sup>Required</sup> <a name="RetentionPeriodInDays" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.retentionPeriodInDays"></a>

```go
func RetentionPeriodInDays() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OracleAutonomousDatabaseBackupConfig <a name="OracleAutonomousDatabaseBackupConfig" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/oracleautonomousdatabasebackup"

&oracleautonomousdatabasebackup.OracleAutonomousDatabaseBackupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AutonomousDatabaseId: *string,
	Name: *string,
	RetentionPeriodInDays: *f64,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.autonomousDatabaseId">AutonomousDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#autonomous_database_id OracleAutonomousDatabaseBackup#autonomous_database_id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#name OracleAutonomousDatabaseBackup#name}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.retentionPeriodInDays">RetentionPeriodInDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#retention_period_in_days OracleAutonomousDatabaseBackup#retention_period_in_days}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#id OracleAutonomousDatabaseBackup#id}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts">OracleAutonomousDatabaseBackupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#type OracleAutonomousDatabaseBackup#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutonomousDatabaseId`<sup>Required</sup> <a name="AutonomousDatabaseId" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.autonomousDatabaseId"></a>

```go
AutonomousDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#autonomous_database_id OracleAutonomousDatabaseBackup#autonomous_database_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#name OracleAutonomousDatabaseBackup#name}.

---

##### `RetentionPeriodInDays`<sup>Required</sup> <a name="RetentionPeriodInDays" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.retentionPeriodInDays"></a>

```go
RetentionPeriodInDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#retention_period_in_days OracleAutonomousDatabaseBackup#retention_period_in_days}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#id OracleAutonomousDatabaseBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.timeouts"></a>

```go
Timeouts OracleAutonomousDatabaseBackupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts">OracleAutonomousDatabaseBackupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#timeouts OracleAutonomousDatabaseBackup#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#type OracleAutonomousDatabaseBackup#type}.

---

### OracleAutonomousDatabaseBackupTimeouts <a name="OracleAutonomousDatabaseBackupTimeouts" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/oracleautonomousdatabasebackup"

&oracleautonomousdatabasebackup.OracleAutonomousDatabaseBackupTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#create OracleAutonomousDatabaseBackup#create}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#delete OracleAutonomousDatabaseBackup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#read OracleAutonomousDatabaseBackup#read}. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#update OracleAutonomousDatabaseBackup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#create OracleAutonomousDatabaseBackup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#delete OracleAutonomousDatabaseBackup#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#read OracleAutonomousDatabaseBackup#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.49.0/docs/resources/oracle_autonomous_database_backup#update OracleAutonomousDatabaseBackup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleAutonomousDatabaseBackupTimeoutsOutputReference <a name="OracleAutonomousDatabaseBackupTimeoutsOutputReference" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/oracleautonomousdatabasebackup"

oracleautonomousdatabasebackup.NewOracleAutonomousDatabaseBackupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OracleAutonomousDatabaseBackupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.oracleAutonomousDatabaseBackup.OracleAutonomousDatabaseBackupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



