# `netappSnapshotPolicy` Submodule <a name="`netappSnapshotPolicy` Submodule" id="@cdktf/provider-azurerm.netappSnapshotPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappSnapshotPolicy <a name="NetappSnapshotPolicy" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy azurerm_netapp_snapshot_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/netappsnapshotpolicy"

netappsnapshotpolicy.NewNetappSnapshotPolicy(scope Construct, id *string, config NetappSnapshotPolicyConfig) NetappSnapshotPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig">NetappSnapshotPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig">NetappSnapshotPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putDailySchedule">PutDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putHourlySchedule">PutHourlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putMonthlySchedule">PutMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putWeeklySchedule">PutWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetDailySchedule">ResetDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetHourlySchedule">ResetHourlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetMonthlySchedule">ResetMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetWeeklySchedule">ResetWeeklySchedule</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDailySchedule` <a name="PutDailySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putDailySchedule"></a>

```go
func PutDailySchedule(value NetappSnapshotPolicyDailySchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putDailySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule">NetappSnapshotPolicyDailySchedule</a>

---

##### `PutHourlySchedule` <a name="PutHourlySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putHourlySchedule"></a>

```go
func PutHourlySchedule(value NetappSnapshotPolicyHourlySchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putHourlySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule">NetappSnapshotPolicyHourlySchedule</a>

---

##### `PutMonthlySchedule` <a name="PutMonthlySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putMonthlySchedule"></a>

```go
func PutMonthlySchedule(value NetappSnapshotPolicyMonthlySchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putMonthlySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule">NetappSnapshotPolicyMonthlySchedule</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putTimeouts"></a>

```go
func PutTimeouts(value NetappSnapshotPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts">NetappSnapshotPolicyTimeouts</a>

---

##### `PutWeeklySchedule` <a name="PutWeeklySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putWeeklySchedule"></a>

```go
func PutWeeklySchedule(value NetappSnapshotPolicyWeeklySchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.putWeeklySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule">NetappSnapshotPolicyWeeklySchedule</a>

---

##### `ResetDailySchedule` <a name="ResetDailySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetDailySchedule"></a>

```go
func ResetDailySchedule()
```

##### `ResetHourlySchedule` <a name="ResetHourlySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetHourlySchedule"></a>

```go
func ResetHourlySchedule()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetMonthlySchedule` <a name="ResetMonthlySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetMonthlySchedule"></a>

```go
func ResetMonthlySchedule()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWeeklySchedule` <a name="ResetWeeklySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.resetWeeklySchedule"></a>

```go
func ResetWeeklySchedule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetappSnapshotPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/netappsnapshotpolicy"

netappsnapshotpolicy.NetappSnapshotPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/netappsnapshotpolicy"

netappsnapshotpolicy.NetappSnapshotPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/netappsnapshotpolicy"

netappsnapshotpolicy.NetappSnapshotPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/netappsnapshotpolicy"

netappsnapshotpolicy.NetappSnapshotPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetappSnapshotPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetappSnapshotPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetappSnapshotPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetappSnapshotPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.dailySchedule">DailySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference">NetappSnapshotPolicyDailyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.hourlySchedule">HourlySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference">NetappSnapshotPolicyHourlyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.monthlySchedule">MonthlySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference">NetappSnapshotPolicyMonthlyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference">NetappSnapshotPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.weeklySchedule">WeeklySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference">NetappSnapshotPolicyWeeklyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.accountNameInput">AccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.dailyScheduleInput">DailyScheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule">NetappSnapshotPolicyDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.hourlyScheduleInput">HourlyScheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule">NetappSnapshotPolicyHourlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.monthlyScheduleInput">MonthlyScheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule">NetappSnapshotPolicyMonthlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.weeklyScheduleInput">WeeklyScheduleInput</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule">NetappSnapshotPolicyWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.accountName">AccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DailySchedule`<sup>Required</sup> <a name="DailySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.dailySchedule"></a>

```go
func DailySchedule() NetappSnapshotPolicyDailyScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference">NetappSnapshotPolicyDailyScheduleOutputReference</a>

---

##### `HourlySchedule`<sup>Required</sup> <a name="HourlySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.hourlySchedule"></a>

```go
func HourlySchedule() NetappSnapshotPolicyHourlyScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference">NetappSnapshotPolicyHourlyScheduleOutputReference</a>

---

##### `MonthlySchedule`<sup>Required</sup> <a name="MonthlySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.monthlySchedule"></a>

```go
func MonthlySchedule() NetappSnapshotPolicyMonthlyScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference">NetappSnapshotPolicyMonthlyScheduleOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.timeouts"></a>

```go
func Timeouts() NetappSnapshotPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference">NetappSnapshotPolicyTimeoutsOutputReference</a>

---

##### `WeeklySchedule`<sup>Required</sup> <a name="WeeklySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.weeklySchedule"></a>

```go
func WeeklySchedule() NetappSnapshotPolicyWeeklyScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference">NetappSnapshotPolicyWeeklyScheduleOutputReference</a>

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.accountNameInput"></a>

```go
func AccountNameInput() *string
```

- *Type:* *string

---

##### `DailyScheduleInput`<sup>Optional</sup> <a name="DailyScheduleInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.dailyScheduleInput"></a>

```go
func DailyScheduleInput() NetappSnapshotPolicyDailySchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule">NetappSnapshotPolicyDailySchedule</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HourlyScheduleInput`<sup>Optional</sup> <a name="HourlyScheduleInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.hourlyScheduleInput"></a>

```go
func HourlyScheduleInput() NetappSnapshotPolicyHourlySchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule">NetappSnapshotPolicyHourlySchedule</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MonthlyScheduleInput`<sup>Optional</sup> <a name="MonthlyScheduleInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.monthlyScheduleInput"></a>

```go
func MonthlyScheduleInput() NetappSnapshotPolicyMonthlySchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule">NetappSnapshotPolicyMonthlySchedule</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WeeklyScheduleInput`<sup>Optional</sup> <a name="WeeklyScheduleInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.weeklyScheduleInput"></a>

```go
func WeeklyScheduleInput() NetappSnapshotPolicyWeeklySchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule">NetappSnapshotPolicyWeeklySchedule</a>

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.accountName"></a>

```go
func AccountName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetappSnapshotPolicyConfig <a name="NetappSnapshotPolicyConfig" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/netappsnapshotpolicy"

&netappsnapshotpolicy.NetappSnapshotPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AccountName: *string,
	Enabled: interface{},
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	DailySchedule: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule,
	HourlySchedule: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule,
	Id: *string,
	MonthlySchedule: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts,
	WeeklySchedule: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.accountName">AccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#account_name NetappSnapshotPolicy#account_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#enabled NetappSnapshotPolicy#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#location NetappSnapshotPolicy#location}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#name NetappSnapshotPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#resource_group_name NetappSnapshotPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.dailySchedule">DailySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule">NetappSnapshotPolicyDailySchedule</a></code> | daily_schedule block. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.hourlySchedule">HourlySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule">NetappSnapshotPolicyHourlySchedule</a></code> | hourly_schedule block. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#id NetappSnapshotPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.monthlySchedule">MonthlySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule">NetappSnapshotPolicyMonthlySchedule</a></code> | monthly_schedule block. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#tags NetappSnapshotPolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts">NetappSnapshotPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.weeklySchedule">WeeklySchedule</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule">NetappSnapshotPolicyWeeklySchedule</a></code> | weekly_schedule block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.accountName"></a>

```go
AccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#account_name NetappSnapshotPolicy#account_name}.

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#enabled NetappSnapshotPolicy#enabled}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#location NetappSnapshotPolicy#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#name NetappSnapshotPolicy#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#resource_group_name NetappSnapshotPolicy#resource_group_name}.

---

##### `DailySchedule`<sup>Optional</sup> <a name="DailySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.dailySchedule"></a>

```go
DailySchedule NetappSnapshotPolicyDailySchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule">NetappSnapshotPolicyDailySchedule</a>

daily_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#daily_schedule NetappSnapshotPolicy#daily_schedule}

---

##### `HourlySchedule`<sup>Optional</sup> <a name="HourlySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.hourlySchedule"></a>

```go
HourlySchedule NetappSnapshotPolicyHourlySchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule">NetappSnapshotPolicyHourlySchedule</a>

hourly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#hourly_schedule NetappSnapshotPolicy#hourly_schedule}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#id NetappSnapshotPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MonthlySchedule`<sup>Optional</sup> <a name="MonthlySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.monthlySchedule"></a>

```go
MonthlySchedule NetappSnapshotPolicyMonthlySchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule">NetappSnapshotPolicyMonthlySchedule</a>

monthly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#monthly_schedule NetappSnapshotPolicy#monthly_schedule}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#tags NetappSnapshotPolicy#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.timeouts"></a>

```go
Timeouts NetappSnapshotPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts">NetappSnapshotPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#timeouts NetappSnapshotPolicy#timeouts}

---

##### `WeeklySchedule`<sup>Optional</sup> <a name="WeeklySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyConfig.property.weeklySchedule"></a>

```go
WeeklySchedule NetappSnapshotPolicyWeeklySchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule">NetappSnapshotPolicyWeeklySchedule</a>

weekly_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#weekly_schedule NetappSnapshotPolicy#weekly_schedule}

---

### NetappSnapshotPolicyDailySchedule <a name="NetappSnapshotPolicyDailySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/netappsnapshotpolicy"

&netappsnapshotpolicy.NetappSnapshotPolicyDailySchedule {
	Hour: *f64,
	Minute: *f64,
	SnapshotsToKeep: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule.property.hour">Hour</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#hour NetappSnapshotPolicy#hour}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule.property.minute">Minute</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#minute NetappSnapshotPolicy#minute}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#snapshots_to_keep NetappSnapshotPolicy#snapshots_to_keep}. |

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule.property.hour"></a>

```go
Hour *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#hour NetappSnapshotPolicy#hour}.

---

##### `Minute`<sup>Required</sup> <a name="Minute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule.property.minute"></a>

```go
Minute *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#minute NetappSnapshotPolicy#minute}.

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule.property.snapshotsToKeep"></a>

```go
SnapshotsToKeep *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#snapshots_to_keep NetappSnapshotPolicy#snapshots_to_keep}.

---

### NetappSnapshotPolicyHourlySchedule <a name="NetappSnapshotPolicyHourlySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/netappsnapshotpolicy"

&netappsnapshotpolicy.NetappSnapshotPolicyHourlySchedule {
	Minute: *f64,
	SnapshotsToKeep: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule.property.minute">Minute</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#minute NetappSnapshotPolicy#minute}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#snapshots_to_keep NetappSnapshotPolicy#snapshots_to_keep}. |

---

##### `Minute`<sup>Required</sup> <a name="Minute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule.property.minute"></a>

```go
Minute *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#minute NetappSnapshotPolicy#minute}.

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule.property.snapshotsToKeep"></a>

```go
SnapshotsToKeep *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#snapshots_to_keep NetappSnapshotPolicy#snapshots_to_keep}.

---

### NetappSnapshotPolicyMonthlySchedule <a name="NetappSnapshotPolicyMonthlySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/netappsnapshotpolicy"

&netappsnapshotpolicy.NetappSnapshotPolicyMonthlySchedule {
	DaysOfMonth: *[]*f64,
	Hour: *f64,
	Minute: *f64,
	SnapshotsToKeep: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule.property.daysOfMonth">DaysOfMonth</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#days_of_month NetappSnapshotPolicy#days_of_month}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule.property.hour">Hour</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#hour NetappSnapshotPolicy#hour}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule.property.minute">Minute</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#minute NetappSnapshotPolicy#minute}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#snapshots_to_keep NetappSnapshotPolicy#snapshots_to_keep}. |

---

##### `DaysOfMonth`<sup>Required</sup> <a name="DaysOfMonth" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule.property.daysOfMonth"></a>

```go
DaysOfMonth *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#days_of_month NetappSnapshotPolicy#days_of_month}.

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule.property.hour"></a>

```go
Hour *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#hour NetappSnapshotPolicy#hour}.

---

##### `Minute`<sup>Required</sup> <a name="Minute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule.property.minute"></a>

```go
Minute *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#minute NetappSnapshotPolicy#minute}.

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule.property.snapshotsToKeep"></a>

```go
SnapshotsToKeep *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#snapshots_to_keep NetappSnapshotPolicy#snapshots_to_keep}.

---

### NetappSnapshotPolicyTimeouts <a name="NetappSnapshotPolicyTimeouts" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/netappsnapshotpolicy"

&netappsnapshotpolicy.NetappSnapshotPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#create NetappSnapshotPolicy#create}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#delete NetappSnapshotPolicy#delete}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#read NetappSnapshotPolicy#read}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#update NetappSnapshotPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#create NetappSnapshotPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#delete NetappSnapshotPolicy#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#read NetappSnapshotPolicy#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#update NetappSnapshotPolicy#update}.

---

### NetappSnapshotPolicyWeeklySchedule <a name="NetappSnapshotPolicyWeeklySchedule" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/netappsnapshotpolicy"

&netappsnapshotpolicy.NetappSnapshotPolicyWeeklySchedule {
	DaysOfWeek: *[]*string,
	Hour: *f64,
	Minute: *f64,
	SnapshotsToKeep: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule.property.daysOfWeek">DaysOfWeek</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#days_of_week NetappSnapshotPolicy#days_of_week}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule.property.hour">Hour</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#hour NetappSnapshotPolicy#hour}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule.property.minute">Minute</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#minute NetappSnapshotPolicy#minute}. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#snapshots_to_keep NetappSnapshotPolicy#snapshots_to_keep}. |

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule.property.daysOfWeek"></a>

```go
DaysOfWeek *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#days_of_week NetappSnapshotPolicy#days_of_week}.

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule.property.hour"></a>

```go
Hour *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#hour NetappSnapshotPolicy#hour}.

---

##### `Minute`<sup>Required</sup> <a name="Minute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule.property.minute"></a>

```go
Minute *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#minute NetappSnapshotPolicy#minute}.

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule.property.snapshotsToKeep"></a>

```go
SnapshotsToKeep *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/netapp_snapshot_policy#snapshots_to_keep NetappSnapshotPolicy#snapshots_to_keep}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappSnapshotPolicyDailyScheduleOutputReference <a name="NetappSnapshotPolicyDailyScheduleOutputReference" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/netappsnapshotpolicy"

netappsnapshotpolicy.NewNetappSnapshotPolicyDailyScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetappSnapshotPolicyDailyScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.hourInput">HourInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.minuteInput">MinuteInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeepInput">SnapshotsToKeepInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.hour">Hour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.minute">Minute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule">NetappSnapshotPolicyDailySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HourInput`<sup>Optional</sup> <a name="HourInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.hourInput"></a>

```go
func HourInput() *f64
```

- *Type:* *f64

---

##### `MinuteInput`<sup>Optional</sup> <a name="MinuteInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.minuteInput"></a>

```go
func MinuteInput() *f64
```

- *Type:* *f64

---

##### `SnapshotsToKeepInput`<sup>Optional</sup> <a name="SnapshotsToKeepInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```go
func SnapshotsToKeepInput() *f64
```

- *Type:* *f64

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.hour"></a>

```go
func Hour() *f64
```

- *Type:* *f64

---

##### `Minute`<sup>Required</sup> <a name="Minute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.minute"></a>

```go
func Minute() *f64
```

- *Type:* *f64

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.snapshotsToKeep"></a>

```go
func SnapshotsToKeep() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailyScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() NetappSnapshotPolicyDailySchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyDailySchedule">NetappSnapshotPolicyDailySchedule</a>

---


### NetappSnapshotPolicyHourlyScheduleOutputReference <a name="NetappSnapshotPolicyHourlyScheduleOutputReference" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/netappsnapshotpolicy"

netappsnapshotpolicy.NewNetappSnapshotPolicyHourlyScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetappSnapshotPolicyHourlyScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.minuteInput">MinuteInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeepInput">SnapshotsToKeepInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.minute">Minute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule">NetappSnapshotPolicyHourlySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MinuteInput`<sup>Optional</sup> <a name="MinuteInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.minuteInput"></a>

```go
func MinuteInput() *f64
```

- *Type:* *f64

---

##### `SnapshotsToKeepInput`<sup>Optional</sup> <a name="SnapshotsToKeepInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```go
func SnapshotsToKeepInput() *f64
```

- *Type:* *f64

---

##### `Minute`<sup>Required</sup> <a name="Minute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.minute"></a>

```go
func Minute() *f64
```

- *Type:* *f64

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.snapshotsToKeep"></a>

```go
func SnapshotsToKeep() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlyScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() NetappSnapshotPolicyHourlySchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyHourlySchedule">NetappSnapshotPolicyHourlySchedule</a>

---


### NetappSnapshotPolicyMonthlyScheduleOutputReference <a name="NetappSnapshotPolicyMonthlyScheduleOutputReference" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/netappsnapshotpolicy"

netappsnapshotpolicy.NewNetappSnapshotPolicyMonthlyScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetappSnapshotPolicyMonthlyScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonthInput">DaysOfMonthInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.hourInput">HourInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.minuteInput">MinuteInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeepInput">SnapshotsToKeepInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonth">DaysOfMonth</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.hour">Hour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.minute">Minute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule">NetappSnapshotPolicyMonthlySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysOfMonthInput`<sup>Optional</sup> <a name="DaysOfMonthInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonthInput"></a>

```go
func DaysOfMonthInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `HourInput`<sup>Optional</sup> <a name="HourInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.hourInput"></a>

```go
func HourInput() *f64
```

- *Type:* *f64

---

##### `MinuteInput`<sup>Optional</sup> <a name="MinuteInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.minuteInput"></a>

```go
func MinuteInput() *f64
```

- *Type:* *f64

---

##### `SnapshotsToKeepInput`<sup>Optional</sup> <a name="SnapshotsToKeepInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```go
func SnapshotsToKeepInput() *f64
```

- *Type:* *f64

---

##### `DaysOfMonth`<sup>Required</sup> <a name="DaysOfMonth" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.daysOfMonth"></a>

```go
func DaysOfMonth() *[]*f64
```

- *Type:* *[]*f64

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.hour"></a>

```go
func Hour() *f64
```

- *Type:* *f64

---

##### `Minute`<sup>Required</sup> <a name="Minute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.minute"></a>

```go
func Minute() *f64
```

- *Type:* *f64

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.snapshotsToKeep"></a>

```go
func SnapshotsToKeep() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlyScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() NetappSnapshotPolicyMonthlySchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyMonthlySchedule">NetappSnapshotPolicyMonthlySchedule</a>

---


### NetappSnapshotPolicyTimeoutsOutputReference <a name="NetappSnapshotPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/netappsnapshotpolicy"

netappsnapshotpolicy.NewNetappSnapshotPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetappSnapshotPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetappSnapshotPolicyWeeklyScheduleOutputReference <a name="NetappSnapshotPolicyWeeklyScheduleOutputReference" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/netappsnapshotpolicy"

netappsnapshotpolicy.NewNetappSnapshotPolicyWeeklyScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetappSnapshotPolicyWeeklyScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.daysOfWeekInput">DaysOfWeekInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.hourInput">HourInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.minuteInput">MinuteInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeepInput">SnapshotsToKeepInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.daysOfWeek">DaysOfWeek</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.hour">Hour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.minute">Minute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeep">SnapshotsToKeep</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule">NetappSnapshotPolicyWeeklySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysOfWeekInput`<sup>Optional</sup> <a name="DaysOfWeekInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.daysOfWeekInput"></a>

```go
func DaysOfWeekInput() *[]*string
```

- *Type:* *[]*string

---

##### `HourInput`<sup>Optional</sup> <a name="HourInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.hourInput"></a>

```go
func HourInput() *f64
```

- *Type:* *f64

---

##### `MinuteInput`<sup>Optional</sup> <a name="MinuteInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.minuteInput"></a>

```go
func MinuteInput() *f64
```

- *Type:* *f64

---

##### `SnapshotsToKeepInput`<sup>Optional</sup> <a name="SnapshotsToKeepInput" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeepInput"></a>

```go
func SnapshotsToKeepInput() *f64
```

- *Type:* *f64

---

##### `DaysOfWeek`<sup>Required</sup> <a name="DaysOfWeek" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.daysOfWeek"></a>

```go
func DaysOfWeek() *[]*string
```

- *Type:* *[]*string

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.hour"></a>

```go
func Hour() *f64
```

- *Type:* *f64

---

##### `Minute`<sup>Required</sup> <a name="Minute" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.minute"></a>

```go
func Minute() *f64
```

- *Type:* *f64

---

##### `SnapshotsToKeep`<sup>Required</sup> <a name="SnapshotsToKeep" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.snapshotsToKeep"></a>

```go
func SnapshotsToKeep() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklyScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() NetappSnapshotPolicyWeeklySchedule
```

- *Type:* <a href="#@cdktf/provider-azurerm.netappSnapshotPolicy.NetappSnapshotPolicyWeeklySchedule">NetappSnapshotPolicyWeeklySchedule</a>

---



