# `monitorScheduledQueryRulesAlertV2` Submodule <a name="`monitorScheduledQueryRulesAlertV2` Submodule" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorScheduledQueryRulesAlertV2 <a name="MonitorScheduledQueryRulesAlertV2" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2 azurerm_monitor_scheduled_query_rules_alert_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/monitorscheduledqueryrulesalertv2"

monitorscheduledqueryrulesalertv2.NewMonitorScheduledQueryRulesAlertV2(scope Construct, id *string, config MonitorScheduledQueryRulesAlertV2Config) MonitorScheduledQueryRulesAlertV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config">MonitorScheduledQueryRulesAlertV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config">MonitorScheduledQueryRulesAlertV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.putCriteria">PutCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetAutoMitigationEnabled">ResetAutoMitigationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetMuteActionsAfterAlertDuration">ResetMuteActionsAfterAlertDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetQueryTimeRangeOverride">ResetQueryTimeRangeOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetSkipQueryValidation">ResetSkipQueryValidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetTargetResourceTypes">ResetTargetResourceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetWorkspaceAlertsStorageEnabled">ResetWorkspaceAlertsStorageEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAction` <a name="PutAction" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.putAction"></a>

```go
func PutAction(value MonitorScheduledQueryRulesAlertV2Action)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Action">MonitorScheduledQueryRulesAlertV2Action</a>

---

##### `PutCriteria` <a name="PutCriteria" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.putCriteria"></a>

```go
func PutCriteria(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.putCriteria.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.putIdentity"></a>

```go
func PutIdentity(value MonitorScheduledQueryRulesAlertV2Identity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Identity">MonitorScheduledQueryRulesAlertV2Identity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.putTimeouts"></a>

```go
func PutTimeouts(value MonitorScheduledQueryRulesAlertV2Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Timeouts">MonitorScheduledQueryRulesAlertV2Timeouts</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetAction"></a>

```go
func ResetAction()
```

##### `ResetAutoMitigationEnabled` <a name="ResetAutoMitigationEnabled" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetAutoMitigationEnabled"></a>

```go
func ResetAutoMitigationEnabled()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetMuteActionsAfterAlertDuration` <a name="ResetMuteActionsAfterAlertDuration" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetMuteActionsAfterAlertDuration"></a>

```go
func ResetMuteActionsAfterAlertDuration()
```

##### `ResetQueryTimeRangeOverride` <a name="ResetQueryTimeRangeOverride" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetQueryTimeRangeOverride"></a>

```go
func ResetQueryTimeRangeOverride()
```

##### `ResetSkipQueryValidation` <a name="ResetSkipQueryValidation" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetSkipQueryValidation"></a>

```go
func ResetSkipQueryValidation()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTargetResourceTypes` <a name="ResetTargetResourceTypes" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetTargetResourceTypes"></a>

```go
func ResetTargetResourceTypes()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWorkspaceAlertsStorageEnabled` <a name="ResetWorkspaceAlertsStorageEnabled" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.resetWorkspaceAlertsStorageEnabled"></a>

```go
func ResetWorkspaceAlertsStorageEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MonitorScheduledQueryRulesAlertV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/monitorscheduledqueryrulesalertv2"

monitorscheduledqueryrulesalertv2.MonitorScheduledQueryRulesAlertV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/monitorscheduledqueryrulesalertv2"

monitorscheduledqueryrulesalertv2.MonitorScheduledQueryRulesAlertV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/monitorscheduledqueryrulesalertv2"

monitorscheduledqueryrulesalertv2.MonitorScheduledQueryRulesAlertV2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/monitorscheduledqueryrulesalertv2"

monitorscheduledqueryrulesalertv2.MonitorScheduledQueryRulesAlertV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MonitorScheduledQueryRulesAlertV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MonitorScheduledQueryRulesAlertV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MonitorScheduledQueryRulesAlertV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MonitorScheduledQueryRulesAlertV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.action">Action</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference">MonitorScheduledQueryRulesAlertV2ActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.createdWithApiVersion">CreatedWithApiVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.criteria">Criteria</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList">MonitorScheduledQueryRulesAlertV2CriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference">MonitorScheduledQueryRulesAlertV2IdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.isALegacyLogAnalyticsRule">IsALegacyLogAnalyticsRule</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.isWorkspaceAlertsStorageConfigured">IsWorkspaceAlertsStorageConfigured</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference">MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Action">MonitorScheduledQueryRulesAlertV2Action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.autoMitigationEnabledInput">AutoMitigationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.criteriaInput">CriteriaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.evaluationFrequencyInput">EvaluationFrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Identity">MonitorScheduledQueryRulesAlertV2Identity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.muteActionsAfterAlertDurationInput">MuteActionsAfterAlertDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.queryTimeRangeOverrideInput">QueryTimeRangeOverrideInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.severityInput">SeverityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.skipQueryValidationInput">SkipQueryValidationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.targetResourceTypesInput">TargetResourceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.windowDurationInput">WindowDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.workspaceAlertsStorageEnabledInput">WorkspaceAlertsStorageEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.autoMitigationEnabled">AutoMitigationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.evaluationFrequency">EvaluationFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.muteActionsAfterAlertDuration">MuteActionsAfterAlertDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.queryTimeRangeOverride">QueryTimeRangeOverride</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.severity">Severity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.skipQueryValidation">SkipQueryValidation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.targetResourceTypes">TargetResourceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.windowDuration">WindowDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.workspaceAlertsStorageEnabled">WorkspaceAlertsStorageEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.action"></a>

```go
func Action() MonitorScheduledQueryRulesAlertV2ActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference">MonitorScheduledQueryRulesAlertV2ActionOutputReference</a>

---

##### `CreatedWithApiVersion`<sup>Required</sup> <a name="CreatedWithApiVersion" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.createdWithApiVersion"></a>

```go
func CreatedWithApiVersion() *string
```

- *Type:* *string

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.criteria"></a>

```go
func Criteria() MonitorScheduledQueryRulesAlertV2CriteriaList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList">MonitorScheduledQueryRulesAlertV2CriteriaList</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.identity"></a>

```go
func Identity() MonitorScheduledQueryRulesAlertV2IdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference">MonitorScheduledQueryRulesAlertV2IdentityOutputReference</a>

---

##### `IsALegacyLogAnalyticsRule`<sup>Required</sup> <a name="IsALegacyLogAnalyticsRule" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.isALegacyLogAnalyticsRule"></a>

```go
func IsALegacyLogAnalyticsRule() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsWorkspaceAlertsStorageConfigured`<sup>Required</sup> <a name="IsWorkspaceAlertsStorageConfigured" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.isWorkspaceAlertsStorageConfigured"></a>

```go
func IsWorkspaceAlertsStorageConfigured() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.timeouts"></a>

```go
func Timeouts() MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference">MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.actionInput"></a>

```go
func ActionInput() MonitorScheduledQueryRulesAlertV2Action
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Action">MonitorScheduledQueryRulesAlertV2Action</a>

---

##### `AutoMitigationEnabledInput`<sup>Optional</sup> <a name="AutoMitigationEnabledInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.autoMitigationEnabledInput"></a>

```go
func AutoMitigationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `CriteriaInput`<sup>Optional</sup> <a name="CriteriaInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.criteriaInput"></a>

```go
func CriteriaInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EvaluationFrequencyInput`<sup>Optional</sup> <a name="EvaluationFrequencyInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.evaluationFrequencyInput"></a>

```go
func EvaluationFrequencyInput() *string
```

- *Type:* *string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.identityInput"></a>

```go
func IdentityInput() MonitorScheduledQueryRulesAlertV2Identity
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Identity">MonitorScheduledQueryRulesAlertV2Identity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MuteActionsAfterAlertDurationInput`<sup>Optional</sup> <a name="MuteActionsAfterAlertDurationInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.muteActionsAfterAlertDurationInput"></a>

```go
func MuteActionsAfterAlertDurationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `QueryTimeRangeOverrideInput`<sup>Optional</sup> <a name="QueryTimeRangeOverrideInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.queryTimeRangeOverrideInput"></a>

```go
func QueryTimeRangeOverrideInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.severityInput"></a>

```go
func SeverityInput() *f64
```

- *Type:* *f64

---

##### `SkipQueryValidationInput`<sup>Optional</sup> <a name="SkipQueryValidationInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.skipQueryValidationInput"></a>

```go
func SkipQueryValidationInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TargetResourceTypesInput`<sup>Optional</sup> <a name="TargetResourceTypesInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.targetResourceTypesInput"></a>

```go
func TargetResourceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WindowDurationInput`<sup>Optional</sup> <a name="WindowDurationInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.windowDurationInput"></a>

```go
func WindowDurationInput() *string
```

- *Type:* *string

---

##### `WorkspaceAlertsStorageEnabledInput`<sup>Optional</sup> <a name="WorkspaceAlertsStorageEnabledInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.workspaceAlertsStorageEnabledInput"></a>

```go
func WorkspaceAlertsStorageEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AutoMitigationEnabled`<sup>Required</sup> <a name="AutoMitigationEnabled" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.autoMitigationEnabled"></a>

```go
func AutoMitigationEnabled() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `EvaluationFrequency`<sup>Required</sup> <a name="EvaluationFrequency" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.evaluationFrequency"></a>

```go
func EvaluationFrequency() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MuteActionsAfterAlertDuration`<sup>Required</sup> <a name="MuteActionsAfterAlertDuration" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.muteActionsAfterAlertDuration"></a>

```go
func MuteActionsAfterAlertDuration() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `QueryTimeRangeOverride`<sup>Required</sup> <a name="QueryTimeRangeOverride" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.queryTimeRangeOverride"></a>

```go
func QueryTimeRangeOverride() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.severity"></a>

```go
func Severity() *f64
```

- *Type:* *f64

---

##### `SkipQueryValidation`<sup>Required</sup> <a name="SkipQueryValidation" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.skipQueryValidation"></a>

```go
func SkipQueryValidation() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TargetResourceTypes`<sup>Required</sup> <a name="TargetResourceTypes" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.targetResourceTypes"></a>

```go
func TargetResourceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `WindowDuration`<sup>Required</sup> <a name="WindowDuration" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.windowDuration"></a>

```go
func WindowDuration() *string
```

- *Type:* *string

---

##### `WorkspaceAlertsStorageEnabled`<sup>Required</sup> <a name="WorkspaceAlertsStorageEnabled" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.workspaceAlertsStorageEnabled"></a>

```go
func WorkspaceAlertsStorageEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorScheduledQueryRulesAlertV2Action <a name="MonitorScheduledQueryRulesAlertV2Action" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Action"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Action.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/monitorscheduledqueryrulesalertv2"

&monitorscheduledqueryrulesalertv2.MonitorScheduledQueryRulesAlertV2Action {
	ActionGroups: *[]*string,
	CustomProperties: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Action.property.actionGroups">ActionGroups</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#action_groups MonitorScheduledQueryRulesAlertV2#action_groups}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Action.property.customProperties">CustomProperties</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#custom_properties MonitorScheduledQueryRulesAlertV2#custom_properties}. |

---

##### `ActionGroups`<sup>Optional</sup> <a name="ActionGroups" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Action.property.actionGroups"></a>

```go
ActionGroups *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#action_groups MonitorScheduledQueryRulesAlertV2#action_groups}.

---

##### `CustomProperties`<sup>Optional</sup> <a name="CustomProperties" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Action.property.customProperties"></a>

```go
CustomProperties *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#custom_properties MonitorScheduledQueryRulesAlertV2#custom_properties}.

---

### MonitorScheduledQueryRulesAlertV2Config <a name="MonitorScheduledQueryRulesAlertV2Config" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/monitorscheduledqueryrulesalertv2"

&monitorscheduledqueryrulesalertv2.MonitorScheduledQueryRulesAlertV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Criteria: interface{},
	EvaluationFrequency: *string,
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	Scopes: *[]*string,
	Severity: *f64,
	WindowDuration: *string,
	Action: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Action,
	AutoMitigationEnabled: interface{},
	Description: *string,
	DisplayName: *string,
	Enabled: interface{},
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Identity,
	MuteActionsAfterAlertDuration: *string,
	QueryTimeRangeOverride: *string,
	SkipQueryValidation: interface{},
	Tags: *map[string]*string,
	TargetResourceTypes: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Timeouts,
	WorkspaceAlertsStorageEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.criteria">Criteria</a></code> | <code>interface{}</code> | criteria block. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.evaluationFrequency">EvaluationFrequency</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#evaluation_frequency MonitorScheduledQueryRulesAlertV2#evaluation_frequency}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#location MonitorScheduledQueryRulesAlertV2#location}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#name MonitorScheduledQueryRulesAlertV2#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#resource_group_name MonitorScheduledQueryRulesAlertV2#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.scopes">Scopes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#scopes MonitorScheduledQueryRulesAlertV2#scopes}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.severity">Severity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#severity MonitorScheduledQueryRulesAlertV2#severity}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.windowDuration">WindowDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#window_duration MonitorScheduledQueryRulesAlertV2#window_duration}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.action">Action</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Action">MonitorScheduledQueryRulesAlertV2Action</a></code> | action block. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.autoMitigationEnabled">AutoMitigationEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#auto_mitigation_enabled MonitorScheduledQueryRulesAlertV2#auto_mitigation_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#description MonitorScheduledQueryRulesAlertV2#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#display_name MonitorScheduledQueryRulesAlertV2#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#enabled MonitorScheduledQueryRulesAlertV2#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#id MonitorScheduledQueryRulesAlertV2#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Identity">MonitorScheduledQueryRulesAlertV2Identity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.muteActionsAfterAlertDuration">MuteActionsAfterAlertDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#mute_actions_after_alert_duration MonitorScheduledQueryRulesAlertV2#mute_actions_after_alert_duration}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.queryTimeRangeOverride">QueryTimeRangeOverride</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#query_time_range_override MonitorScheduledQueryRulesAlertV2#query_time_range_override}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.skipQueryValidation">SkipQueryValidation</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#skip_query_validation MonitorScheduledQueryRulesAlertV2#skip_query_validation}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#tags MonitorScheduledQueryRulesAlertV2#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.targetResourceTypes">TargetResourceTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#target_resource_types MonitorScheduledQueryRulesAlertV2#target_resource_types}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Timeouts">MonitorScheduledQueryRulesAlertV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.workspaceAlertsStorageEnabled">WorkspaceAlertsStorageEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#workspace_alerts_storage_enabled MonitorScheduledQueryRulesAlertV2#workspace_alerts_storage_enabled}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.criteria"></a>

```go
Criteria interface{}
```

- *Type:* interface{}

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#criteria MonitorScheduledQueryRulesAlertV2#criteria}

---

##### `EvaluationFrequency`<sup>Required</sup> <a name="EvaluationFrequency" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.evaluationFrequency"></a>

```go
EvaluationFrequency *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#evaluation_frequency MonitorScheduledQueryRulesAlertV2#evaluation_frequency}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#location MonitorScheduledQueryRulesAlertV2#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#name MonitorScheduledQueryRulesAlertV2#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#resource_group_name MonitorScheduledQueryRulesAlertV2#resource_group_name}.

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#scopes MonitorScheduledQueryRulesAlertV2#scopes}.

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.severity"></a>

```go
Severity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#severity MonitorScheduledQueryRulesAlertV2#severity}.

---

##### `WindowDuration`<sup>Required</sup> <a name="WindowDuration" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.windowDuration"></a>

```go
WindowDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#window_duration MonitorScheduledQueryRulesAlertV2#window_duration}.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.action"></a>

```go
Action MonitorScheduledQueryRulesAlertV2Action
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Action">MonitorScheduledQueryRulesAlertV2Action</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#action MonitorScheduledQueryRulesAlertV2#action}

---

##### `AutoMitigationEnabled`<sup>Optional</sup> <a name="AutoMitigationEnabled" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.autoMitigationEnabled"></a>

```go
AutoMitigationEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#auto_mitigation_enabled MonitorScheduledQueryRulesAlertV2#auto_mitigation_enabled}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#description MonitorScheduledQueryRulesAlertV2#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#display_name MonitorScheduledQueryRulesAlertV2#display_name}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#enabled MonitorScheduledQueryRulesAlertV2#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#id MonitorScheduledQueryRulesAlertV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.identity"></a>

```go
Identity MonitorScheduledQueryRulesAlertV2Identity
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Identity">MonitorScheduledQueryRulesAlertV2Identity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#identity MonitorScheduledQueryRulesAlertV2#identity}

---

##### `MuteActionsAfterAlertDuration`<sup>Optional</sup> <a name="MuteActionsAfterAlertDuration" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.muteActionsAfterAlertDuration"></a>

```go
MuteActionsAfterAlertDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#mute_actions_after_alert_duration MonitorScheduledQueryRulesAlertV2#mute_actions_after_alert_duration}.

---

##### `QueryTimeRangeOverride`<sup>Optional</sup> <a name="QueryTimeRangeOverride" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.queryTimeRangeOverride"></a>

```go
QueryTimeRangeOverride *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#query_time_range_override MonitorScheduledQueryRulesAlertV2#query_time_range_override}.

---

##### `SkipQueryValidation`<sup>Optional</sup> <a name="SkipQueryValidation" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.skipQueryValidation"></a>

```go
SkipQueryValidation interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#skip_query_validation MonitorScheduledQueryRulesAlertV2#skip_query_validation}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#tags MonitorScheduledQueryRulesAlertV2#tags}.

---

##### `TargetResourceTypes`<sup>Optional</sup> <a name="TargetResourceTypes" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.targetResourceTypes"></a>

```go
TargetResourceTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#target_resource_types MonitorScheduledQueryRulesAlertV2#target_resource_types}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.timeouts"></a>

```go
Timeouts MonitorScheduledQueryRulesAlertV2Timeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Timeouts">MonitorScheduledQueryRulesAlertV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#timeouts MonitorScheduledQueryRulesAlertV2#timeouts}

---

##### `WorkspaceAlertsStorageEnabled`<sup>Optional</sup> <a name="WorkspaceAlertsStorageEnabled" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Config.property.workspaceAlertsStorageEnabled"></a>

```go
WorkspaceAlertsStorageEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#workspace_alerts_storage_enabled MonitorScheduledQueryRulesAlertV2#workspace_alerts_storage_enabled}.

---

### MonitorScheduledQueryRulesAlertV2Criteria <a name="MonitorScheduledQueryRulesAlertV2Criteria" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Criteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Criteria.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/monitorscheduledqueryrulesalertv2"

&monitorscheduledqueryrulesalertv2.MonitorScheduledQueryRulesAlertV2Criteria {
	Operator: *string,
	Query: *string,
	Threshold: *f64,
	TimeAggregationMethod: *string,
	Dimension: interface{},
	FailingPeriods: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods,
	MetricMeasureColumn: *string,
	ResourceIdColumn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Criteria.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#operator MonitorScheduledQueryRulesAlertV2#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Criteria.property.query">Query</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#query MonitorScheduledQueryRulesAlertV2#query}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Criteria.property.threshold">Threshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#threshold MonitorScheduledQueryRulesAlertV2#threshold}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Criteria.property.timeAggregationMethod">TimeAggregationMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#time_aggregation_method MonitorScheduledQueryRulesAlertV2#time_aggregation_method}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Criteria.property.dimension">Dimension</a></code> | <code>interface{}</code> | dimension block. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Criteria.property.failingPeriods">FailingPeriods</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods">MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods</a></code> | failing_periods block. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Criteria.property.metricMeasureColumn">MetricMeasureColumn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#metric_measure_column MonitorScheduledQueryRulesAlertV2#metric_measure_column}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Criteria.property.resourceIdColumn">ResourceIdColumn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#resource_id_column MonitorScheduledQueryRulesAlertV2#resource_id_column}. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Criteria.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#operator MonitorScheduledQueryRulesAlertV2#operator}.

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Criteria.property.query"></a>

```go
Query *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#query MonitorScheduledQueryRulesAlertV2#query}.

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Criteria.property.threshold"></a>

```go
Threshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#threshold MonitorScheduledQueryRulesAlertV2#threshold}.

---

##### `TimeAggregationMethod`<sup>Required</sup> <a name="TimeAggregationMethod" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Criteria.property.timeAggregationMethod"></a>

```go
TimeAggregationMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#time_aggregation_method MonitorScheduledQueryRulesAlertV2#time_aggregation_method}.

---

##### `Dimension`<sup>Optional</sup> <a name="Dimension" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Criteria.property.dimension"></a>

```go
Dimension interface{}
```

- *Type:* interface{}

dimension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#dimension MonitorScheduledQueryRulesAlertV2#dimension}

---

##### `FailingPeriods`<sup>Optional</sup> <a name="FailingPeriods" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Criteria.property.failingPeriods"></a>

```go
FailingPeriods MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods">MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods</a>

failing_periods block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#failing_periods MonitorScheduledQueryRulesAlertV2#failing_periods}

---

##### `MetricMeasureColumn`<sup>Optional</sup> <a name="MetricMeasureColumn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Criteria.property.metricMeasureColumn"></a>

```go
MetricMeasureColumn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#metric_measure_column MonitorScheduledQueryRulesAlertV2#metric_measure_column}.

---

##### `ResourceIdColumn`<sup>Optional</sup> <a name="ResourceIdColumn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Criteria.property.resourceIdColumn"></a>

```go
ResourceIdColumn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#resource_id_column MonitorScheduledQueryRulesAlertV2#resource_id_column}.

---

### MonitorScheduledQueryRulesAlertV2CriteriaDimension <a name="MonitorScheduledQueryRulesAlertV2CriteriaDimension" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimension.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/monitorscheduledqueryrulesalertv2"

&monitorscheduledqueryrulesalertv2.MonitorScheduledQueryRulesAlertV2CriteriaDimension {
	Name: *string,
	Operator: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimension.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#name MonitorScheduledQueryRulesAlertV2#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimension.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#operator MonitorScheduledQueryRulesAlertV2#operator}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimension.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#values MonitorScheduledQueryRulesAlertV2#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimension.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#name MonitorScheduledQueryRulesAlertV2#name}.

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimension.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#operator MonitorScheduledQueryRulesAlertV2#operator}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimension.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#values MonitorScheduledQueryRulesAlertV2#values}.

---

### MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods <a name="MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/monitorscheduledqueryrulesalertv2"

&monitorscheduledqueryrulesalertv2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods {
	MinimumFailingPeriodsToTriggerAlert: *f64,
	NumberOfEvaluationPeriods: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods.property.minimumFailingPeriodsToTriggerAlert">MinimumFailingPeriodsToTriggerAlert</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#minimum_failing_periods_to_trigger_alert MonitorScheduledQueryRulesAlertV2#minimum_failing_periods_to_trigger_alert}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods.property.numberOfEvaluationPeriods">NumberOfEvaluationPeriods</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#number_of_evaluation_periods MonitorScheduledQueryRulesAlertV2#number_of_evaluation_periods}. |

---

##### `MinimumFailingPeriodsToTriggerAlert`<sup>Required</sup> <a name="MinimumFailingPeriodsToTriggerAlert" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods.property.minimumFailingPeriodsToTriggerAlert"></a>

```go
MinimumFailingPeriodsToTriggerAlert *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#minimum_failing_periods_to_trigger_alert MonitorScheduledQueryRulesAlertV2#minimum_failing_periods_to_trigger_alert}.

---

##### `NumberOfEvaluationPeriods`<sup>Required</sup> <a name="NumberOfEvaluationPeriods" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods.property.numberOfEvaluationPeriods"></a>

```go
NumberOfEvaluationPeriods *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#number_of_evaluation_periods MonitorScheduledQueryRulesAlertV2#number_of_evaluation_periods}.

---

### MonitorScheduledQueryRulesAlertV2Identity <a name="MonitorScheduledQueryRulesAlertV2Identity" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Identity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Identity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/monitorscheduledqueryrulesalertv2"

&monitorscheduledqueryrulesalertv2.MonitorScheduledQueryRulesAlertV2Identity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Identity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#type MonitorScheduledQueryRulesAlertV2#type}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Identity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#identity_ids MonitorScheduledQueryRulesAlertV2#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Identity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#type MonitorScheduledQueryRulesAlertV2#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Identity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#identity_ids MonitorScheduledQueryRulesAlertV2#identity_ids}.

---

### MonitorScheduledQueryRulesAlertV2Timeouts <a name="MonitorScheduledQueryRulesAlertV2Timeouts" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/monitorscheduledqueryrulesalertv2"

&monitorscheduledqueryrulesalertv2.MonitorScheduledQueryRulesAlertV2Timeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Timeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#create MonitorScheduledQueryRulesAlertV2#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Timeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#delete MonitorScheduledQueryRulesAlertV2#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Timeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#read MonitorScheduledQueryRulesAlertV2#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Timeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#update MonitorScheduledQueryRulesAlertV2#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Timeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#create MonitorScheduledQueryRulesAlertV2#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Timeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#delete MonitorScheduledQueryRulesAlertV2#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Timeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#read MonitorScheduledQueryRulesAlertV2#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Timeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.43.0/docs/resources/monitor_scheduled_query_rules_alert_v2#update MonitorScheduledQueryRulesAlertV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorScheduledQueryRulesAlertV2ActionOutputReference <a name="MonitorScheduledQueryRulesAlertV2ActionOutputReference" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/monitorscheduledqueryrulesalertv2"

monitorscheduledqueryrulesalertv2.NewMonitorScheduledQueryRulesAlertV2ActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorScheduledQueryRulesAlertV2ActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.resetActionGroups">ResetActionGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.resetCustomProperties">ResetCustomProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActionGroups` <a name="ResetActionGroups" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.resetActionGroups"></a>

```go
func ResetActionGroups()
```

##### `ResetCustomProperties` <a name="ResetCustomProperties" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.resetCustomProperties"></a>

```go
func ResetCustomProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.property.actionGroupsInput">ActionGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.property.customPropertiesInput">CustomPropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.property.actionGroups">ActionGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.property.customProperties">CustomProperties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Action">MonitorScheduledQueryRulesAlertV2Action</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionGroupsInput`<sup>Optional</sup> <a name="ActionGroupsInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.property.actionGroupsInput"></a>

```go
func ActionGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomPropertiesInput`<sup>Optional</sup> <a name="CustomPropertiesInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.property.customPropertiesInput"></a>

```go
func CustomPropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ActionGroups`<sup>Required</sup> <a name="ActionGroups" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.property.actionGroups"></a>

```go
func ActionGroups() *[]*string
```

- *Type:* *[]*string

---

##### `CustomProperties`<sup>Required</sup> <a name="CustomProperties" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.property.customProperties"></a>

```go
func CustomProperties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2ActionOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitorScheduledQueryRulesAlertV2Action
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Action">MonitorScheduledQueryRulesAlertV2Action</a>

---


### MonitorScheduledQueryRulesAlertV2CriteriaDimensionList <a name="MonitorScheduledQueryRulesAlertV2CriteriaDimensionList" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/monitorscheduledqueryrulesalertv2"

monitorscheduledqueryrulesalertv2.NewMonitorScheduledQueryRulesAlertV2CriteriaDimensionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MonitorScheduledQueryRulesAlertV2CriteriaDimensionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.get"></a>

```go
func Get(index *f64) MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference <a name="MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/monitorscheduledqueryrulesalertv2"

monitorscheduledqueryrulesalertv2.NewMonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference <a name="MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/monitorscheduledqueryrulesalertv2"

monitorscheduledqueryrulesalertv2.NewMonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.property.minimumFailingPeriodsToTriggerAlertInput">MinimumFailingPeriodsToTriggerAlertInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.property.numberOfEvaluationPeriodsInput">NumberOfEvaluationPeriodsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.property.minimumFailingPeriodsToTriggerAlert">MinimumFailingPeriodsToTriggerAlert</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.property.numberOfEvaluationPeriods">NumberOfEvaluationPeriods</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods">MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MinimumFailingPeriodsToTriggerAlertInput`<sup>Optional</sup> <a name="MinimumFailingPeriodsToTriggerAlertInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.property.minimumFailingPeriodsToTriggerAlertInput"></a>

```go
func MinimumFailingPeriodsToTriggerAlertInput() *f64
```

- *Type:* *f64

---

##### `NumberOfEvaluationPeriodsInput`<sup>Optional</sup> <a name="NumberOfEvaluationPeriodsInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.property.numberOfEvaluationPeriodsInput"></a>

```go
func NumberOfEvaluationPeriodsInput() *f64
```

- *Type:* *f64

---

##### `MinimumFailingPeriodsToTriggerAlert`<sup>Required</sup> <a name="MinimumFailingPeriodsToTriggerAlert" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.property.minimumFailingPeriodsToTriggerAlert"></a>

```go
func MinimumFailingPeriodsToTriggerAlert() *f64
```

- *Type:* *f64

---

##### `NumberOfEvaluationPeriods`<sup>Required</sup> <a name="NumberOfEvaluationPeriods" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.property.numberOfEvaluationPeriods"></a>

```go
func NumberOfEvaluationPeriods() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods">MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods</a>

---


### MonitorScheduledQueryRulesAlertV2CriteriaList <a name="MonitorScheduledQueryRulesAlertV2CriteriaList" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/monitorscheduledqueryrulesalertv2"

monitorscheduledqueryrulesalertv2.NewMonitorScheduledQueryRulesAlertV2CriteriaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MonitorScheduledQueryRulesAlertV2CriteriaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.get"></a>

```go
func Get(index *f64) MonitorScheduledQueryRulesAlertV2CriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorScheduledQueryRulesAlertV2CriteriaOutputReference <a name="MonitorScheduledQueryRulesAlertV2CriteriaOutputReference" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/monitorscheduledqueryrulesalertv2"

monitorscheduledqueryrulesalertv2.NewMonitorScheduledQueryRulesAlertV2CriteriaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MonitorScheduledQueryRulesAlertV2CriteriaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.putDimension">PutDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.putFailingPeriods">PutFailingPeriods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.resetDimension">ResetDimension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.resetFailingPeriods">ResetFailingPeriods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.resetMetricMeasureColumn">ResetMetricMeasureColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.resetResourceIdColumn">ResetResourceIdColumn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDimension` <a name="PutDimension" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.putDimension"></a>

```go
func PutDimension(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.putDimension.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFailingPeriods` <a name="PutFailingPeriods" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.putFailingPeriods"></a>

```go
func PutFailingPeriods(value MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.putFailingPeriods.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods">MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods</a>

---

##### `ResetDimension` <a name="ResetDimension" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.resetDimension"></a>

```go
func ResetDimension()
```

##### `ResetFailingPeriods` <a name="ResetFailingPeriods" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.resetFailingPeriods"></a>

```go
func ResetFailingPeriods()
```

##### `ResetMetricMeasureColumn` <a name="ResetMetricMeasureColumn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.resetMetricMeasureColumn"></a>

```go
func ResetMetricMeasureColumn()
```

##### `ResetResourceIdColumn` <a name="ResetResourceIdColumn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.resetResourceIdColumn"></a>

```go
func ResetResourceIdColumn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.dimension">Dimension</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList">MonitorScheduledQueryRulesAlertV2CriteriaDimensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.failingPeriods">FailingPeriods</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference">MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.dimensionInput">DimensionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.failingPeriodsInput">FailingPeriodsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods">MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.metricMeasureColumnInput">MetricMeasureColumnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.resourceIdColumnInput">ResourceIdColumnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.timeAggregationMethodInput">TimeAggregationMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.metricMeasureColumn">MetricMeasureColumn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.resourceIdColumn">ResourceIdColumn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.timeAggregationMethod">TimeAggregationMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.dimension"></a>

```go
func Dimension() MonitorScheduledQueryRulesAlertV2CriteriaDimensionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaDimensionList">MonitorScheduledQueryRulesAlertV2CriteriaDimensionList</a>

---

##### `FailingPeriods`<sup>Required</sup> <a name="FailingPeriods" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.failingPeriods"></a>

```go
func FailingPeriods() MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference">MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriodsOutputReference</a>

---

##### `DimensionInput`<sup>Optional</sup> <a name="DimensionInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.dimensionInput"></a>

```go
func DimensionInput() interface{}
```

- *Type:* interface{}

---

##### `FailingPeriodsInput`<sup>Optional</sup> <a name="FailingPeriodsInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.failingPeriodsInput"></a>

```go
func FailingPeriodsInput() MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods">MonitorScheduledQueryRulesAlertV2CriteriaFailingPeriods</a>

---

##### `MetricMeasureColumnInput`<sup>Optional</sup> <a name="MetricMeasureColumnInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.metricMeasureColumnInput"></a>

```go
func MetricMeasureColumnInput() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `ResourceIdColumnInput`<sup>Optional</sup> <a name="ResourceIdColumnInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.resourceIdColumnInput"></a>

```go
func ResourceIdColumnInput() *string
```

- *Type:* *string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() *f64
```

- *Type:* *f64

---

##### `TimeAggregationMethodInput`<sup>Optional</sup> <a name="TimeAggregationMethodInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.timeAggregationMethodInput"></a>

```go
func TimeAggregationMethodInput() *string
```

- *Type:* *string

---

##### `MetricMeasureColumn`<sup>Required</sup> <a name="MetricMeasureColumn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.metricMeasureColumn"></a>

```go
func MetricMeasureColumn() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `ResourceIdColumn`<sup>Required</sup> <a name="ResourceIdColumn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.resourceIdColumn"></a>

```go
func ResourceIdColumn() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `TimeAggregationMethod`<sup>Required</sup> <a name="TimeAggregationMethod" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.timeAggregationMethod"></a>

```go
func TimeAggregationMethod() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2CriteriaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorScheduledQueryRulesAlertV2IdentityOutputReference <a name="MonitorScheduledQueryRulesAlertV2IdentityOutputReference" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/monitorscheduledqueryrulesalertv2"

monitorscheduledqueryrulesalertv2.NewMonitorScheduledQueryRulesAlertV2IdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorScheduledQueryRulesAlertV2IdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Identity">MonitorScheduledQueryRulesAlertV2Identity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2IdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitorScheduledQueryRulesAlertV2Identity
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2Identity">MonitorScheduledQueryRulesAlertV2Identity</a>

---


### MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference <a name="MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/monitorscheduledqueryrulesalertv2"

monitorscheduledqueryrulesalertv2.NewMonitorScheduledQueryRulesAlertV2TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorScheduledQueryRulesAlertV2.MonitorScheduledQueryRulesAlertV2TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



