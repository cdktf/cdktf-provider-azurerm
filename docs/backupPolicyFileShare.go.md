# `azurerm_backup_policy_file_share`

Refer to the Terraform Registory for docs: [`azurerm_backup_policy_file_share`](https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share).

# `backupPolicyFileShare` Submodule <a name="`backupPolicyFileShare` Submodule" id="@cdktf/provider-azurerm.backupPolicyFileShare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupPolicyFileShare <a name="BackupPolicyFileShare" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share azurerm_backup_policy_file_share}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/backuppolicyfileshare"

backuppolicyfileshare.NewBackupPolicyFileShare(scope Construct, id *string, config BackupPolicyFileShareConfig) BackupPolicyFileShare
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig">BackupPolicyFileShareConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig">BackupPolicyFileShareConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putBackup">PutBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putRetentionDaily">PutRetentionDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putRetentionMonthly">PutRetentionMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putRetentionWeekly">PutRetentionWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putRetentionYearly">PutRetentionYearly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetRetentionMonthly">ResetRetentionMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetRetentionWeekly">ResetRetentionWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetRetentionYearly">ResetRetentionYearly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetTimezone">ResetTimezone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutBackup` <a name="PutBackup" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putBackup"></a>

```go
func PutBackup(value BackupPolicyFileShareBackup)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putBackup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup">BackupPolicyFileShareBackup</a>

---

##### `PutRetentionDaily` <a name="PutRetentionDaily" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putRetentionDaily"></a>

```go
func PutRetentionDaily(value BackupPolicyFileShareRetentionDaily)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putRetentionDaily.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDaily">BackupPolicyFileShareRetentionDaily</a>

---

##### `PutRetentionMonthly` <a name="PutRetentionMonthly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putRetentionMonthly"></a>

```go
func PutRetentionMonthly(value BackupPolicyFileShareRetentionMonthly)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putRetentionMonthly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly">BackupPolicyFileShareRetentionMonthly</a>

---

##### `PutRetentionWeekly` <a name="PutRetentionWeekly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putRetentionWeekly"></a>

```go
func PutRetentionWeekly(value BackupPolicyFileShareRetentionWeekly)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putRetentionWeekly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly">BackupPolicyFileShareRetentionWeekly</a>

---

##### `PutRetentionYearly` <a name="PutRetentionYearly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putRetentionYearly"></a>

```go
func PutRetentionYearly(value BackupPolicyFileShareRetentionYearly)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putRetentionYearly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly">BackupPolicyFileShareRetentionYearly</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putTimeouts"></a>

```go
func PutTimeouts(value BackupPolicyFileShareTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts">BackupPolicyFileShareTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetId"></a>

```go
func ResetId()
```

##### `ResetRetentionMonthly` <a name="ResetRetentionMonthly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetRetentionMonthly"></a>

```go
func ResetRetentionMonthly()
```

##### `ResetRetentionWeekly` <a name="ResetRetentionWeekly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetRetentionWeekly"></a>

```go
func ResetRetentionWeekly()
```

##### `ResetRetentionYearly` <a name="ResetRetentionYearly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetRetentionYearly"></a>

```go
func ResetRetentionYearly()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.resetTimezone"></a>

```go
func ResetTimezone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BackupPolicyFileShare resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/backuppolicyfileshare"

backuppolicyfileshare.BackupPolicyFileShare_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/backuppolicyfileshare"

backuppolicyfileshare.BackupPolicyFileShare_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/backuppolicyfileshare"

backuppolicyfileshare.BackupPolicyFileShare_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/backuppolicyfileshare"

backuppolicyfileshare.BackupPolicyFileShare_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BackupPolicyFileShare resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BackupPolicyFileShare to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BackupPolicyFileShare that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BackupPolicyFileShare to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.backup">Backup</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference">BackupPolicyFileShareBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionDaily">RetentionDaily</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference">BackupPolicyFileShareRetentionDailyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionMonthly">RetentionMonthly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference">BackupPolicyFileShareRetentionMonthlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionWeekly">RetentionWeekly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference">BackupPolicyFileShareRetentionWeeklyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionYearly">RetentionYearly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference">BackupPolicyFileShareRetentionYearlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference">BackupPolicyFileShareTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.backupInput">BackupInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup">BackupPolicyFileShareBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.recoveryVaultNameInput">RecoveryVaultNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionDailyInput">RetentionDailyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDaily">BackupPolicyFileShareRetentionDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionMonthlyInput">RetentionMonthlyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly">BackupPolicyFileShareRetentionMonthly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionWeeklyInput">RetentionWeeklyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly">BackupPolicyFileShareRetentionWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionYearlyInput">RetentionYearlyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly">BackupPolicyFileShareRetentionYearly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.timezoneInput">TimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.recoveryVaultName">RecoveryVaultName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backup`<sup>Required</sup> <a name="Backup" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.backup"></a>

```go
func Backup() BackupPolicyFileShareBackupOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference">BackupPolicyFileShareBackupOutputReference</a>

---

##### `RetentionDaily`<sup>Required</sup> <a name="RetentionDaily" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionDaily"></a>

```go
func RetentionDaily() BackupPolicyFileShareRetentionDailyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference">BackupPolicyFileShareRetentionDailyOutputReference</a>

---

##### `RetentionMonthly`<sup>Required</sup> <a name="RetentionMonthly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionMonthly"></a>

```go
func RetentionMonthly() BackupPolicyFileShareRetentionMonthlyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference">BackupPolicyFileShareRetentionMonthlyOutputReference</a>

---

##### `RetentionWeekly`<sup>Required</sup> <a name="RetentionWeekly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionWeekly"></a>

```go
func RetentionWeekly() BackupPolicyFileShareRetentionWeeklyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference">BackupPolicyFileShareRetentionWeeklyOutputReference</a>

---

##### `RetentionYearly`<sup>Required</sup> <a name="RetentionYearly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionYearly"></a>

```go
func RetentionYearly() BackupPolicyFileShareRetentionYearlyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference">BackupPolicyFileShareRetentionYearlyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.timeouts"></a>

```go
func Timeouts() BackupPolicyFileShareTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference">BackupPolicyFileShareTimeoutsOutputReference</a>

---

##### `BackupInput`<sup>Optional</sup> <a name="BackupInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.backupInput"></a>

```go
func BackupInput() BackupPolicyFileShareBackup
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup">BackupPolicyFileShareBackup</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RecoveryVaultNameInput`<sup>Optional</sup> <a name="RecoveryVaultNameInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.recoveryVaultNameInput"></a>

```go
func RecoveryVaultNameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `RetentionDailyInput`<sup>Optional</sup> <a name="RetentionDailyInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionDailyInput"></a>

```go
func RetentionDailyInput() BackupPolicyFileShareRetentionDaily
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDaily">BackupPolicyFileShareRetentionDaily</a>

---

##### `RetentionMonthlyInput`<sup>Optional</sup> <a name="RetentionMonthlyInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionMonthlyInput"></a>

```go
func RetentionMonthlyInput() BackupPolicyFileShareRetentionMonthly
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly">BackupPolicyFileShareRetentionMonthly</a>

---

##### `RetentionWeeklyInput`<sup>Optional</sup> <a name="RetentionWeeklyInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionWeeklyInput"></a>

```go
func RetentionWeeklyInput() BackupPolicyFileShareRetentionWeekly
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly">BackupPolicyFileShareRetentionWeekly</a>

---

##### `RetentionYearlyInput`<sup>Optional</sup> <a name="RetentionYearlyInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.retentionYearlyInput"></a>

```go
func RetentionYearlyInput() BackupPolicyFileShareRetentionYearly
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly">BackupPolicyFileShareRetentionYearly</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.timezoneInput"></a>

```go
func TimezoneInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RecoveryVaultName`<sup>Required</sup> <a name="RecoveryVaultName" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.recoveryVaultName"></a>

```go
func RecoveryVaultName() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShare.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupPolicyFileShareBackup <a name="BackupPolicyFileShareBackup" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/backuppolicyfileshare"

&backuppolicyfileshare.BackupPolicyFileShareBackup {
	Frequency: *string,
	Hourly: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly,
	Time: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup.property.frequency">Frequency</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#frequency BackupPolicyFileShare#frequency}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup.property.hourly">Hourly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly">BackupPolicyFileShareBackupHourly</a></code> | hourly block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup.property.time">Time</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#time BackupPolicyFileShare#time}. |

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup.property.frequency"></a>

```go
Frequency *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#frequency BackupPolicyFileShare#frequency}.

---

##### `Hourly`<sup>Optional</sup> <a name="Hourly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup.property.hourly"></a>

```go
Hourly BackupPolicyFileShareBackupHourly
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly">BackupPolicyFileShareBackupHourly</a>

hourly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#hourly BackupPolicyFileShare#hourly}

---

##### `Time`<sup>Optional</sup> <a name="Time" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup.property.time"></a>

```go
Time *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#time BackupPolicyFileShare#time}.

---

### BackupPolicyFileShareBackupHourly <a name="BackupPolicyFileShareBackupHourly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/backuppolicyfileshare"

&backuppolicyfileshare.BackupPolicyFileShareBackupHourly {
	Interval: *f64,
	StartTime: *string,
	WindowDuration: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly.property.interval">Interval</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#interval BackupPolicyFileShare#interval}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly.property.startTime">StartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#start_time BackupPolicyFileShare#start_time}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly.property.windowDuration">WindowDuration</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#window_duration BackupPolicyFileShare#window_duration}. |

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly.property.interval"></a>

```go
Interval *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#interval BackupPolicyFileShare#interval}.

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#start_time BackupPolicyFileShare#start_time}.

---

##### `WindowDuration`<sup>Required</sup> <a name="WindowDuration" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly.property.windowDuration"></a>

```go
WindowDuration *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#window_duration BackupPolicyFileShare#window_duration}.

---

### BackupPolicyFileShareConfig <a name="BackupPolicyFileShareConfig" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/backuppolicyfileshare"

&backuppolicyfileshare.BackupPolicyFileShareConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Backup: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup,
	Name: *string,
	RecoveryVaultName: *string,
	ResourceGroupName: *string,
	RetentionDaily: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDaily,
	Id: *string,
	RetentionMonthly: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly,
	RetentionWeekly: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly,
	RetentionYearly: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts,
	Timezone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.backup">Backup</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup">BackupPolicyFileShareBackup</a></code> | backup block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#name BackupPolicyFileShare#name}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.recoveryVaultName">RecoveryVaultName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#recovery_vault_name BackupPolicyFileShare#recovery_vault_name}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#resource_group_name BackupPolicyFileShare#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.retentionDaily">RetentionDaily</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDaily">BackupPolicyFileShareRetentionDaily</a></code> | retention_daily block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#id BackupPolicyFileShare#id}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.retentionMonthly">RetentionMonthly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly">BackupPolicyFileShareRetentionMonthly</a></code> | retention_monthly block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.retentionWeekly">RetentionWeekly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly">BackupPolicyFileShareRetentionWeekly</a></code> | retention_weekly block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.retentionYearly">RetentionYearly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly">BackupPolicyFileShareRetentionYearly</a></code> | retention_yearly block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts">BackupPolicyFileShareTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.timezone">Timezone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#timezone BackupPolicyFileShare#timezone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Backup`<sup>Required</sup> <a name="Backup" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.backup"></a>

```go
Backup BackupPolicyFileShareBackup
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup">BackupPolicyFileShareBackup</a>

backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#backup BackupPolicyFileShare#backup}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#name BackupPolicyFileShare#name}.

---

##### `RecoveryVaultName`<sup>Required</sup> <a name="RecoveryVaultName" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.recoveryVaultName"></a>

```go
RecoveryVaultName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#recovery_vault_name BackupPolicyFileShare#recovery_vault_name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#resource_group_name BackupPolicyFileShare#resource_group_name}.

---

##### `RetentionDaily`<sup>Required</sup> <a name="RetentionDaily" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.retentionDaily"></a>

```go
RetentionDaily BackupPolicyFileShareRetentionDaily
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDaily">BackupPolicyFileShareRetentionDaily</a>

retention_daily block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#retention_daily BackupPolicyFileShare#retention_daily}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#id BackupPolicyFileShare#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RetentionMonthly`<sup>Optional</sup> <a name="RetentionMonthly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.retentionMonthly"></a>

```go
RetentionMonthly BackupPolicyFileShareRetentionMonthly
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly">BackupPolicyFileShareRetentionMonthly</a>

retention_monthly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#retention_monthly BackupPolicyFileShare#retention_monthly}

---

##### `RetentionWeekly`<sup>Optional</sup> <a name="RetentionWeekly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.retentionWeekly"></a>

```go
RetentionWeekly BackupPolicyFileShareRetentionWeekly
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly">BackupPolicyFileShareRetentionWeekly</a>

retention_weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#retention_weekly BackupPolicyFileShare#retention_weekly}

---

##### `RetentionYearly`<sup>Optional</sup> <a name="RetentionYearly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.retentionYearly"></a>

```go
RetentionYearly BackupPolicyFileShareRetentionYearly
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly">BackupPolicyFileShareRetentionYearly</a>

retention_yearly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#retention_yearly BackupPolicyFileShare#retention_yearly}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.timeouts"></a>

```go
Timeouts BackupPolicyFileShareTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts">BackupPolicyFileShareTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#timeouts BackupPolicyFileShare#timeouts}

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareConfig.property.timezone"></a>

```go
Timezone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#timezone BackupPolicyFileShare#timezone}.

---

### BackupPolicyFileShareRetentionDaily <a name="BackupPolicyFileShareRetentionDaily" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDaily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDaily.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/backuppolicyfileshare"

&backuppolicyfileshare.BackupPolicyFileShareRetentionDaily {
	Count: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDaily.property.count">Count</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#count BackupPolicyFileShare#count}. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDaily.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#count BackupPolicyFileShare#count}.

---

### BackupPolicyFileShareRetentionMonthly <a name="BackupPolicyFileShareRetentionMonthly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/backuppolicyfileshare"

&backuppolicyfileshare.BackupPolicyFileShareRetentionMonthly {
	Count: *f64,
	Days: *[]*f64,
	IncludeLastDays: interface{},
	Weekdays: *[]*string,
	Weeks: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly.property.count">Count</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#count BackupPolicyFileShare#count}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly.property.days">Days</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#days BackupPolicyFileShare#days}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly.property.includeLastDays">IncludeLastDays</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#include_last_days BackupPolicyFileShare#include_last_days}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly.property.weekdays">Weekdays</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#weekdays BackupPolicyFileShare#weekdays}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly.property.weeks">Weeks</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#weeks BackupPolicyFileShare#weeks}. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#count BackupPolicyFileShare#count}.

---

##### `Days`<sup>Optional</sup> <a name="Days" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly.property.days"></a>

```go
Days *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#days BackupPolicyFileShare#days}.

---

##### `IncludeLastDays`<sup>Optional</sup> <a name="IncludeLastDays" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly.property.includeLastDays"></a>

```go
IncludeLastDays interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#include_last_days BackupPolicyFileShare#include_last_days}.

---

##### `Weekdays`<sup>Optional</sup> <a name="Weekdays" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly.property.weekdays"></a>

```go
Weekdays *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#weekdays BackupPolicyFileShare#weekdays}.

---

##### `Weeks`<sup>Optional</sup> <a name="Weeks" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly.property.weeks"></a>

```go
Weeks *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#weeks BackupPolicyFileShare#weeks}.

---

### BackupPolicyFileShareRetentionWeekly <a name="BackupPolicyFileShareRetentionWeekly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/backuppolicyfileshare"

&backuppolicyfileshare.BackupPolicyFileShareRetentionWeekly {
	Count: *f64,
	Weekdays: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly.property.count">Count</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#count BackupPolicyFileShare#count}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly.property.weekdays">Weekdays</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#weekdays BackupPolicyFileShare#weekdays}. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#count BackupPolicyFileShare#count}.

---

##### `Weekdays`<sup>Required</sup> <a name="Weekdays" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly.property.weekdays"></a>

```go
Weekdays *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#weekdays BackupPolicyFileShare#weekdays}.

---

### BackupPolicyFileShareRetentionYearly <a name="BackupPolicyFileShareRetentionYearly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/backuppolicyfileshare"

&backuppolicyfileshare.BackupPolicyFileShareRetentionYearly {
	Count: *f64,
	Months: *[]*string,
	Days: *[]*f64,
	IncludeLastDays: interface{},
	Weekdays: *[]*string,
	Weeks: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.property.count">Count</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#count BackupPolicyFileShare#count}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.property.months">Months</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#months BackupPolicyFileShare#months}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.property.days">Days</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#days BackupPolicyFileShare#days}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.property.includeLastDays">IncludeLastDays</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#include_last_days BackupPolicyFileShare#include_last_days}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.property.weekdays">Weekdays</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#weekdays BackupPolicyFileShare#weekdays}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.property.weeks">Weeks</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#weeks BackupPolicyFileShare#weeks}. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#count BackupPolicyFileShare#count}.

---

##### `Months`<sup>Required</sup> <a name="Months" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.property.months"></a>

```go
Months *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#months BackupPolicyFileShare#months}.

---

##### `Days`<sup>Optional</sup> <a name="Days" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.property.days"></a>

```go
Days *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#days BackupPolicyFileShare#days}.

---

##### `IncludeLastDays`<sup>Optional</sup> <a name="IncludeLastDays" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.property.includeLastDays"></a>

```go
IncludeLastDays interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#include_last_days BackupPolicyFileShare#include_last_days}.

---

##### `Weekdays`<sup>Optional</sup> <a name="Weekdays" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.property.weekdays"></a>

```go
Weekdays *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#weekdays BackupPolicyFileShare#weekdays}.

---

##### `Weeks`<sup>Optional</sup> <a name="Weeks" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly.property.weeks"></a>

```go
Weeks *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#weeks BackupPolicyFileShare#weeks}.

---

### BackupPolicyFileShareTimeouts <a name="BackupPolicyFileShareTimeouts" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/backuppolicyfileshare"

&backuppolicyfileshare.BackupPolicyFileShareTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#create BackupPolicyFileShare#create}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#delete BackupPolicyFileShare#delete}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#read BackupPolicyFileShare#read}. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#update BackupPolicyFileShare#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#create BackupPolicyFileShare#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#delete BackupPolicyFileShare#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#read BackupPolicyFileShare#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.78.0/docs/resources/backup_policy_file_share#update BackupPolicyFileShare#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupPolicyFileShareBackupHourlyOutputReference <a name="BackupPolicyFileShareBackupHourlyOutputReference" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/backuppolicyfileshare"

backuppolicyfileshare.NewBackupPolicyFileShareBackupHourlyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BackupPolicyFileShareBackupHourlyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.intervalInput">IntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.windowDurationInput">WindowDurationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.interval">Interval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.windowDuration">WindowDuration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly">BackupPolicyFileShareBackupHourly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.intervalInput"></a>

```go
func IntervalInput() *f64
```

- *Type:* *f64

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `WindowDurationInput`<sup>Optional</sup> <a name="WindowDurationInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.windowDurationInput"></a>

```go
func WindowDurationInput() *f64
```

- *Type:* *f64

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.interval"></a>

```go
func Interval() *f64
```

- *Type:* *f64

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `WindowDuration`<sup>Required</sup> <a name="WindowDuration" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.windowDuration"></a>

```go
func WindowDuration() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference.property.internalValue"></a>

```go
func InternalValue() BackupPolicyFileShareBackupHourly
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly">BackupPolicyFileShareBackupHourly</a>

---


### BackupPolicyFileShareBackupOutputReference <a name="BackupPolicyFileShareBackupOutputReference" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/backuppolicyfileshare"

backuppolicyfileshare.NewBackupPolicyFileShareBackupOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BackupPolicyFileShareBackupOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.putHourly">PutHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.resetHourly">ResetHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.resetTime">ResetTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHourly` <a name="PutHourly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.putHourly"></a>

```go
func PutHourly(value BackupPolicyFileShareBackupHourly)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.putHourly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly">BackupPolicyFileShareBackupHourly</a>

---

##### `ResetHourly` <a name="ResetHourly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.resetHourly"></a>

```go
func ResetHourly()
```

##### `ResetTime` <a name="ResetTime" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.resetTime"></a>

```go
func ResetTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.hourly">Hourly</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference">BackupPolicyFileShareBackupHourlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.frequencyInput">FrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.hourlyInput">HourlyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly">BackupPolicyFileShareBackupHourly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.timeInput">TimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.frequency">Frequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.time">Time</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup">BackupPolicyFileShareBackup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hourly`<sup>Required</sup> <a name="Hourly" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.hourly"></a>

```go
func Hourly() BackupPolicyFileShareBackupHourlyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourlyOutputReference">BackupPolicyFileShareBackupHourlyOutputReference</a>

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.frequencyInput"></a>

```go
func FrequencyInput() *string
```

- *Type:* *string

---

##### `HourlyInput`<sup>Optional</sup> <a name="HourlyInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.hourlyInput"></a>

```go
func HourlyInput() BackupPolicyFileShareBackupHourly
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupHourly">BackupPolicyFileShareBackupHourly</a>

---

##### `TimeInput`<sup>Optional</sup> <a name="TimeInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.timeInput"></a>

```go
func TimeInput() *string
```

- *Type:* *string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.frequency"></a>

```go
func Frequency() *string
```

- *Type:* *string

---

##### `Time`<sup>Required</sup> <a name="Time" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.time"></a>

```go
func Time() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackupOutputReference.property.internalValue"></a>

```go
func InternalValue() BackupPolicyFileShareBackup
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareBackup">BackupPolicyFileShareBackup</a>

---


### BackupPolicyFileShareRetentionDailyOutputReference <a name="BackupPolicyFileShareRetentionDailyOutputReference" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/backuppolicyfileshare"

backuppolicyfileshare.NewBackupPolicyFileShareRetentionDailyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BackupPolicyFileShareRetentionDailyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDaily">BackupPolicyFileShareRetentionDaily</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDailyOutputReference.property.internalValue"></a>

```go
func InternalValue() BackupPolicyFileShareRetentionDaily
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionDaily">BackupPolicyFileShareRetentionDaily</a>

---


### BackupPolicyFileShareRetentionMonthlyOutputReference <a name="BackupPolicyFileShareRetentionMonthlyOutputReference" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/backuppolicyfileshare"

backuppolicyfileshare.NewBackupPolicyFileShareRetentionMonthlyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BackupPolicyFileShareRetentionMonthlyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.resetDays">ResetDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.resetIncludeLastDays">ResetIncludeLastDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.resetWeekdays">ResetWeekdays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.resetWeeks">ResetWeeks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDays` <a name="ResetDays" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.resetDays"></a>

```go
func ResetDays()
```

##### `ResetIncludeLastDays` <a name="ResetIncludeLastDays" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.resetIncludeLastDays"></a>

```go
func ResetIncludeLastDays()
```

##### `ResetWeekdays` <a name="ResetWeekdays" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.resetWeekdays"></a>

```go
func ResetWeekdays()
```

##### `ResetWeeks` <a name="ResetWeeks" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.resetWeeks"></a>

```go
func ResetWeeks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.daysInput">DaysInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.includeLastDaysInput">IncludeLastDaysInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.weekdaysInput">WeekdaysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.weeksInput">WeeksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.days">Days</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.includeLastDays">IncludeLastDays</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.weekdays">Weekdays</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.weeks">Weeks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly">BackupPolicyFileShareRetentionMonthly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.daysInput"></a>

```go
func DaysInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `IncludeLastDaysInput`<sup>Optional</sup> <a name="IncludeLastDaysInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.includeLastDaysInput"></a>

```go
func IncludeLastDaysInput() interface{}
```

- *Type:* interface{}

---

##### `WeekdaysInput`<sup>Optional</sup> <a name="WeekdaysInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.weekdaysInput"></a>

```go
func WeekdaysInput() *[]*string
```

- *Type:* *[]*string

---

##### `WeeksInput`<sup>Optional</sup> <a name="WeeksInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.weeksInput"></a>

```go
func WeeksInput() *[]*string
```

- *Type:* *[]*string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.days"></a>

```go
func Days() *[]*f64
```

- *Type:* *[]*f64

---

##### `IncludeLastDays`<sup>Required</sup> <a name="IncludeLastDays" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.includeLastDays"></a>

```go
func IncludeLastDays() interface{}
```

- *Type:* interface{}

---

##### `Weekdays`<sup>Required</sup> <a name="Weekdays" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.weekdays"></a>

```go
func Weekdays() *[]*string
```

- *Type:* *[]*string

---

##### `Weeks`<sup>Required</sup> <a name="Weeks" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.weeks"></a>

```go
func Weeks() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthlyOutputReference.property.internalValue"></a>

```go
func InternalValue() BackupPolicyFileShareRetentionMonthly
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionMonthly">BackupPolicyFileShareRetentionMonthly</a>

---


### BackupPolicyFileShareRetentionWeeklyOutputReference <a name="BackupPolicyFileShareRetentionWeeklyOutputReference" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/backuppolicyfileshare"

backuppolicyfileshare.NewBackupPolicyFileShareRetentionWeeklyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BackupPolicyFileShareRetentionWeeklyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.weekdaysInput">WeekdaysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.weekdays">Weekdays</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly">BackupPolicyFileShareRetentionWeekly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `WeekdaysInput`<sup>Optional</sup> <a name="WeekdaysInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.weekdaysInput"></a>

```go
func WeekdaysInput() *[]*string
```

- *Type:* *[]*string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Weekdays`<sup>Required</sup> <a name="Weekdays" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.weekdays"></a>

```go
func Weekdays() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeeklyOutputReference.property.internalValue"></a>

```go
func InternalValue() BackupPolicyFileShareRetentionWeekly
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionWeekly">BackupPolicyFileShareRetentionWeekly</a>

---


### BackupPolicyFileShareRetentionYearlyOutputReference <a name="BackupPolicyFileShareRetentionYearlyOutputReference" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/backuppolicyfileshare"

backuppolicyfileshare.NewBackupPolicyFileShareRetentionYearlyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BackupPolicyFileShareRetentionYearlyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.resetDays">ResetDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.resetIncludeLastDays">ResetIncludeLastDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.resetWeekdays">ResetWeekdays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.resetWeeks">ResetWeeks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDays` <a name="ResetDays" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.resetDays"></a>

```go
func ResetDays()
```

##### `ResetIncludeLastDays` <a name="ResetIncludeLastDays" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.resetIncludeLastDays"></a>

```go
func ResetIncludeLastDays()
```

##### `ResetWeekdays` <a name="ResetWeekdays" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.resetWeekdays"></a>

```go
func ResetWeekdays()
```

##### `ResetWeeks` <a name="ResetWeeks" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.resetWeeks"></a>

```go
func ResetWeeks()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.daysInput">DaysInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.includeLastDaysInput">IncludeLastDaysInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.monthsInput">MonthsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.weekdaysInput">WeekdaysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.weeksInput">WeeksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.days">Days</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.includeLastDays">IncludeLastDays</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.months">Months</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.weekdays">Weekdays</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.weeks">Weeks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly">BackupPolicyFileShareRetentionYearly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.daysInput"></a>

```go
func DaysInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `IncludeLastDaysInput`<sup>Optional</sup> <a name="IncludeLastDaysInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.includeLastDaysInput"></a>

```go
func IncludeLastDaysInput() interface{}
```

- *Type:* interface{}

---

##### `MonthsInput`<sup>Optional</sup> <a name="MonthsInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.monthsInput"></a>

```go
func MonthsInput() *[]*string
```

- *Type:* *[]*string

---

##### `WeekdaysInput`<sup>Optional</sup> <a name="WeekdaysInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.weekdaysInput"></a>

```go
func WeekdaysInput() *[]*string
```

- *Type:* *[]*string

---

##### `WeeksInput`<sup>Optional</sup> <a name="WeeksInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.weeksInput"></a>

```go
func WeeksInput() *[]*string
```

- *Type:* *[]*string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.days"></a>

```go
func Days() *[]*f64
```

- *Type:* *[]*f64

---

##### `IncludeLastDays`<sup>Required</sup> <a name="IncludeLastDays" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.includeLastDays"></a>

```go
func IncludeLastDays() interface{}
```

- *Type:* interface{}

---

##### `Months`<sup>Required</sup> <a name="Months" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.months"></a>

```go
func Months() *[]*string
```

- *Type:* *[]*string

---

##### `Weekdays`<sup>Required</sup> <a name="Weekdays" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.weekdays"></a>

```go
func Weekdays() *[]*string
```

- *Type:* *[]*string

---

##### `Weeks`<sup>Required</sup> <a name="Weeks" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.weeks"></a>

```go
func Weeks() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearlyOutputReference.property.internalValue"></a>

```go
func InternalValue() BackupPolicyFileShareRetentionYearly
```

- *Type:* <a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareRetentionYearly">BackupPolicyFileShareRetentionYearly</a>

---


### BackupPolicyFileShareTimeoutsOutputReference <a name="BackupPolicyFileShareTimeoutsOutputReference" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/backuppolicyfileshare"

backuppolicyfileshare.NewBackupPolicyFileShareTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BackupPolicyFileShareTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.backupPolicyFileShare.BackupPolicyFileShareTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



