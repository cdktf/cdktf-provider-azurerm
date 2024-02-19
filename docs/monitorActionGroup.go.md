# `monitorActionGroup` Submodule <a name="`monitorActionGroup` Submodule" id="@cdktf/provider-azurerm.monitorActionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorActionGroup <a name="MonitorActionGroup" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group azurerm_monitor_action_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

monitoractiongroup.NewMonitorActionGroup(scope Construct, id *string, config MonitorActionGroupConfig) MonitorActionGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig">MonitorActionGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig">MonitorActionGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putArmRoleReceiver">PutArmRoleReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putAutomationRunbookReceiver">PutAutomationRunbookReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putAzureAppPushReceiver">PutAzureAppPushReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putAzureFunctionReceiver">PutAzureFunctionReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putEmailReceiver">PutEmailReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putEventHubReceiver">PutEventHubReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putItsmReceiver">PutItsmReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putLogicAppReceiver">PutLogicAppReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putSmsReceiver">PutSmsReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putVoiceReceiver">PutVoiceReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putWebhookReceiver">PutWebhookReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetArmRoleReceiver">ResetArmRoleReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetAutomationRunbookReceiver">ResetAutomationRunbookReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetAzureAppPushReceiver">ResetAzureAppPushReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetAzureFunctionReceiver">ResetAzureFunctionReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetEmailReceiver">ResetEmailReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetEventHubReceiver">ResetEventHubReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetItsmReceiver">ResetItsmReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetLogicAppReceiver">ResetLogicAppReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetSmsReceiver">ResetSmsReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetVoiceReceiver">ResetVoiceReceiver</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetWebhookReceiver">ResetWebhookReceiver</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutArmRoleReceiver` <a name="PutArmRoleReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putArmRoleReceiver"></a>

```go
func PutArmRoleReceiver(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putArmRoleReceiver.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAutomationRunbookReceiver` <a name="PutAutomationRunbookReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putAutomationRunbookReceiver"></a>

```go
func PutAutomationRunbookReceiver(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putAutomationRunbookReceiver.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAzureAppPushReceiver` <a name="PutAzureAppPushReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putAzureAppPushReceiver"></a>

```go
func PutAzureAppPushReceiver(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putAzureAppPushReceiver.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAzureFunctionReceiver` <a name="PutAzureFunctionReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putAzureFunctionReceiver"></a>

```go
func PutAzureFunctionReceiver(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putAzureFunctionReceiver.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEmailReceiver` <a name="PutEmailReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putEmailReceiver"></a>

```go
func PutEmailReceiver(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putEmailReceiver.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEventHubReceiver` <a name="PutEventHubReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putEventHubReceiver"></a>

```go
func PutEventHubReceiver(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putEventHubReceiver.parameter.value"></a>

- *Type:* interface{}

---

##### `PutItsmReceiver` <a name="PutItsmReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putItsmReceiver"></a>

```go
func PutItsmReceiver(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putItsmReceiver.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLogicAppReceiver` <a name="PutLogicAppReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putLogicAppReceiver"></a>

```go
func PutLogicAppReceiver(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putLogicAppReceiver.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSmsReceiver` <a name="PutSmsReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putSmsReceiver"></a>

```go
func PutSmsReceiver(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putSmsReceiver.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putTimeouts"></a>

```go
func PutTimeouts(value MonitorActionGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts">MonitorActionGroupTimeouts</a>

---

##### `PutVoiceReceiver` <a name="PutVoiceReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putVoiceReceiver"></a>

```go
func PutVoiceReceiver(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putVoiceReceiver.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWebhookReceiver` <a name="PutWebhookReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putWebhookReceiver"></a>

```go
func PutWebhookReceiver(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.putWebhookReceiver.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetArmRoleReceiver` <a name="ResetArmRoleReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetArmRoleReceiver"></a>

```go
func ResetArmRoleReceiver()
```

##### `ResetAutomationRunbookReceiver` <a name="ResetAutomationRunbookReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetAutomationRunbookReceiver"></a>

```go
func ResetAutomationRunbookReceiver()
```

##### `ResetAzureAppPushReceiver` <a name="ResetAzureAppPushReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetAzureAppPushReceiver"></a>

```go
func ResetAzureAppPushReceiver()
```

##### `ResetAzureFunctionReceiver` <a name="ResetAzureFunctionReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetAzureFunctionReceiver"></a>

```go
func ResetAzureFunctionReceiver()
```

##### `ResetEmailReceiver` <a name="ResetEmailReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetEmailReceiver"></a>

```go
func ResetEmailReceiver()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetEventHubReceiver` <a name="ResetEventHubReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetEventHubReceiver"></a>

```go
func ResetEventHubReceiver()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetItsmReceiver` <a name="ResetItsmReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetItsmReceiver"></a>

```go
func ResetItsmReceiver()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetLogicAppReceiver` <a name="ResetLogicAppReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetLogicAppReceiver"></a>

```go
func ResetLogicAppReceiver()
```

##### `ResetSmsReceiver` <a name="ResetSmsReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetSmsReceiver"></a>

```go
func ResetSmsReceiver()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVoiceReceiver` <a name="ResetVoiceReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetVoiceReceiver"></a>

```go
func ResetVoiceReceiver()
```

##### `ResetWebhookReceiver` <a name="ResetWebhookReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.resetWebhookReceiver"></a>

```go
func ResetWebhookReceiver()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MonitorActionGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

monitoractiongroup.MonitorActionGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

monitoractiongroup.MonitorActionGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

monitoractiongroup.MonitorActionGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

monitoractiongroup.MonitorActionGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MonitorActionGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MonitorActionGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MonitorActionGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MonitorActionGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.armRoleReceiver">ArmRoleReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList">MonitorActionGroupArmRoleReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.automationRunbookReceiver">AutomationRunbookReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList">MonitorActionGroupAutomationRunbookReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.azureAppPushReceiver">AzureAppPushReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList">MonitorActionGroupAzureAppPushReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.azureFunctionReceiver">AzureFunctionReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList">MonitorActionGroupAzureFunctionReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.emailReceiver">EmailReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList">MonitorActionGroupEmailReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.eventHubReceiver">EventHubReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList">MonitorActionGroupEventHubReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.itsmReceiver">ItsmReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList">MonitorActionGroupItsmReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.logicAppReceiver">LogicAppReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList">MonitorActionGroupLogicAppReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.smsReceiver">SmsReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList">MonitorActionGroupSmsReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference">MonitorActionGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.voiceReceiver">VoiceReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList">MonitorActionGroupVoiceReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.webhookReceiver">WebhookReceiver</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList">MonitorActionGroupWebhookReceiverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.armRoleReceiverInput">ArmRoleReceiverInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.automationRunbookReceiverInput">AutomationRunbookReceiverInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.azureAppPushReceiverInput">AzureAppPushReceiverInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.azureFunctionReceiverInput">AzureFunctionReceiverInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.emailReceiverInput">EmailReceiverInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.eventHubReceiverInput">EventHubReceiverInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.itsmReceiverInput">ItsmReceiverInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.logicAppReceiverInput">LogicAppReceiverInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.shortNameInput">ShortNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.smsReceiverInput">SmsReceiverInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.voiceReceiverInput">VoiceReceiverInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.webhookReceiverInput">WebhookReceiverInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.shortName">ShortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ArmRoleReceiver`<sup>Required</sup> <a name="ArmRoleReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.armRoleReceiver"></a>

```go
func ArmRoleReceiver() MonitorActionGroupArmRoleReceiverList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList">MonitorActionGroupArmRoleReceiverList</a>

---

##### `AutomationRunbookReceiver`<sup>Required</sup> <a name="AutomationRunbookReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.automationRunbookReceiver"></a>

```go
func AutomationRunbookReceiver() MonitorActionGroupAutomationRunbookReceiverList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList">MonitorActionGroupAutomationRunbookReceiverList</a>

---

##### `AzureAppPushReceiver`<sup>Required</sup> <a name="AzureAppPushReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.azureAppPushReceiver"></a>

```go
func AzureAppPushReceiver() MonitorActionGroupAzureAppPushReceiverList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList">MonitorActionGroupAzureAppPushReceiverList</a>

---

##### `AzureFunctionReceiver`<sup>Required</sup> <a name="AzureFunctionReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.azureFunctionReceiver"></a>

```go
func AzureFunctionReceiver() MonitorActionGroupAzureFunctionReceiverList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList">MonitorActionGroupAzureFunctionReceiverList</a>

---

##### `EmailReceiver`<sup>Required</sup> <a name="EmailReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.emailReceiver"></a>

```go
func EmailReceiver() MonitorActionGroupEmailReceiverList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList">MonitorActionGroupEmailReceiverList</a>

---

##### `EventHubReceiver`<sup>Required</sup> <a name="EventHubReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.eventHubReceiver"></a>

```go
func EventHubReceiver() MonitorActionGroupEventHubReceiverList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList">MonitorActionGroupEventHubReceiverList</a>

---

##### `ItsmReceiver`<sup>Required</sup> <a name="ItsmReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.itsmReceiver"></a>

```go
func ItsmReceiver() MonitorActionGroupItsmReceiverList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList">MonitorActionGroupItsmReceiverList</a>

---

##### `LogicAppReceiver`<sup>Required</sup> <a name="LogicAppReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.logicAppReceiver"></a>

```go
func LogicAppReceiver() MonitorActionGroupLogicAppReceiverList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList">MonitorActionGroupLogicAppReceiverList</a>

---

##### `SmsReceiver`<sup>Required</sup> <a name="SmsReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.smsReceiver"></a>

```go
func SmsReceiver() MonitorActionGroupSmsReceiverList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList">MonitorActionGroupSmsReceiverList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.timeouts"></a>

```go
func Timeouts() MonitorActionGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference">MonitorActionGroupTimeoutsOutputReference</a>

---

##### `VoiceReceiver`<sup>Required</sup> <a name="VoiceReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.voiceReceiver"></a>

```go
func VoiceReceiver() MonitorActionGroupVoiceReceiverList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList">MonitorActionGroupVoiceReceiverList</a>

---

##### `WebhookReceiver`<sup>Required</sup> <a name="WebhookReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.webhookReceiver"></a>

```go
func WebhookReceiver() MonitorActionGroupWebhookReceiverList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList">MonitorActionGroupWebhookReceiverList</a>

---

##### `ArmRoleReceiverInput`<sup>Optional</sup> <a name="ArmRoleReceiverInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.armRoleReceiverInput"></a>

```go
func ArmRoleReceiverInput() interface{}
```

- *Type:* interface{}

---

##### `AutomationRunbookReceiverInput`<sup>Optional</sup> <a name="AutomationRunbookReceiverInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.automationRunbookReceiverInput"></a>

```go
func AutomationRunbookReceiverInput() interface{}
```

- *Type:* interface{}

---

##### `AzureAppPushReceiverInput`<sup>Optional</sup> <a name="AzureAppPushReceiverInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.azureAppPushReceiverInput"></a>

```go
func AzureAppPushReceiverInput() interface{}
```

- *Type:* interface{}

---

##### `AzureFunctionReceiverInput`<sup>Optional</sup> <a name="AzureFunctionReceiverInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.azureFunctionReceiverInput"></a>

```go
func AzureFunctionReceiverInput() interface{}
```

- *Type:* interface{}

---

##### `EmailReceiverInput`<sup>Optional</sup> <a name="EmailReceiverInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.emailReceiverInput"></a>

```go
func EmailReceiverInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EventHubReceiverInput`<sup>Optional</sup> <a name="EventHubReceiverInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.eventHubReceiverInput"></a>

```go
func EventHubReceiverInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ItsmReceiverInput`<sup>Optional</sup> <a name="ItsmReceiverInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.itsmReceiverInput"></a>

```go
func ItsmReceiverInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `LogicAppReceiverInput`<sup>Optional</sup> <a name="LogicAppReceiverInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.logicAppReceiverInput"></a>

```go
func LogicAppReceiverInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ShortNameInput`<sup>Optional</sup> <a name="ShortNameInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.shortNameInput"></a>

```go
func ShortNameInput() *string
```

- *Type:* *string

---

##### `SmsReceiverInput`<sup>Optional</sup> <a name="SmsReceiverInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.smsReceiverInput"></a>

```go
func SmsReceiverInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VoiceReceiverInput`<sup>Optional</sup> <a name="VoiceReceiverInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.voiceReceiverInput"></a>

```go
func VoiceReceiverInput() interface{}
```

- *Type:* interface{}

---

##### `WebhookReceiverInput`<sup>Optional</sup> <a name="WebhookReceiverInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.webhookReceiverInput"></a>

```go
func WebhookReceiverInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `ShortName`<sup>Required</sup> <a name="ShortName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.shortName"></a>

```go
func ShortName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorActionGroupArmRoleReceiver <a name="MonitorActionGroupArmRoleReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

&monitoractiongroup.MonitorActionGroupArmRoleReceiver {
	Name: *string,
	RoleId: *string,
	UseCommonAlertSchema: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver.property.roleId">RoleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#role_id MonitorActionGroup#role_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver.property.useCommonAlertSchema">UseCommonAlertSchema</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}.

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver.property.roleId"></a>

```go
RoleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#role_id MonitorActionGroup#role_id}.

---

##### `UseCommonAlertSchema`<sup>Optional</sup> <a name="UseCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiver.property.useCommonAlertSchema"></a>

```go
UseCommonAlertSchema interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}.

---

### MonitorActionGroupAutomationRunbookReceiver <a name="MonitorActionGroupAutomationRunbookReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

&monitoractiongroup.MonitorActionGroupAutomationRunbookReceiver {
	AutomationAccountId: *string,
	IsGlobalRunbook: interface{},
	Name: *string,
	RunbookName: *string,
	ServiceUri: *string,
	WebhookResourceId: *string,
	UseCommonAlertSchema: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.automationAccountId">AutomationAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#automation_account_id MonitorActionGroup#automation_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.isGlobalRunbook">IsGlobalRunbook</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#is_global_runbook MonitorActionGroup#is_global_runbook}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.runbookName">RunbookName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#runbook_name MonitorActionGroup#runbook_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.serviceUri">ServiceUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#service_uri MonitorActionGroup#service_uri}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.webhookResourceId">WebhookResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#webhook_resource_id MonitorActionGroup#webhook_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.useCommonAlertSchema">UseCommonAlertSchema</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}. |

---

##### `AutomationAccountId`<sup>Required</sup> <a name="AutomationAccountId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.automationAccountId"></a>

```go
AutomationAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#automation_account_id MonitorActionGroup#automation_account_id}.

---

##### `IsGlobalRunbook`<sup>Required</sup> <a name="IsGlobalRunbook" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.isGlobalRunbook"></a>

```go
IsGlobalRunbook interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#is_global_runbook MonitorActionGroup#is_global_runbook}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}.

---

##### `RunbookName`<sup>Required</sup> <a name="RunbookName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.runbookName"></a>

```go
RunbookName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#runbook_name MonitorActionGroup#runbook_name}.

---

##### `ServiceUri`<sup>Required</sup> <a name="ServiceUri" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.serviceUri"></a>

```go
ServiceUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#service_uri MonitorActionGroup#service_uri}.

---

##### `WebhookResourceId`<sup>Required</sup> <a name="WebhookResourceId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.webhookResourceId"></a>

```go
WebhookResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#webhook_resource_id MonitorActionGroup#webhook_resource_id}.

---

##### `UseCommonAlertSchema`<sup>Optional</sup> <a name="UseCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiver.property.useCommonAlertSchema"></a>

```go
UseCommonAlertSchema interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}.

---

### MonitorActionGroupAzureAppPushReceiver <a name="MonitorActionGroupAzureAppPushReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

&monitoractiongroup.MonitorActionGroupAzureAppPushReceiver {
	EmailAddress: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#email_address MonitorActionGroup#email_address}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}. |

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver.property.emailAddress"></a>

```go
EmailAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#email_address MonitorActionGroup#email_address}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiver.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}.

---

### MonitorActionGroupAzureFunctionReceiver <a name="MonitorActionGroupAzureFunctionReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

&monitoractiongroup.MonitorActionGroupAzureFunctionReceiver {
	FunctionAppResourceId: *string,
	FunctionName: *string,
	HttpTriggerUrl: *string,
	Name: *string,
	UseCommonAlertSchema: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver.property.functionAppResourceId">FunctionAppResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#function_app_resource_id MonitorActionGroup#function_app_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver.property.functionName">FunctionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#function_name MonitorActionGroup#function_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver.property.httpTriggerUrl">HttpTriggerUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#http_trigger_url MonitorActionGroup#http_trigger_url}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver.property.useCommonAlertSchema">UseCommonAlertSchema</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}. |

---

##### `FunctionAppResourceId`<sup>Required</sup> <a name="FunctionAppResourceId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver.property.functionAppResourceId"></a>

```go
FunctionAppResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#function_app_resource_id MonitorActionGroup#function_app_resource_id}.

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver.property.functionName"></a>

```go
FunctionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#function_name MonitorActionGroup#function_name}.

---

##### `HttpTriggerUrl`<sup>Required</sup> <a name="HttpTriggerUrl" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver.property.httpTriggerUrl"></a>

```go
HttpTriggerUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#http_trigger_url MonitorActionGroup#http_trigger_url}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}.

---

##### `UseCommonAlertSchema`<sup>Optional</sup> <a name="UseCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiver.property.useCommonAlertSchema"></a>

```go
UseCommonAlertSchema interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}.

---

### MonitorActionGroupConfig <a name="MonitorActionGroupConfig" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

&monitoractiongroup.MonitorActionGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ResourceGroupName: *string,
	ShortName: *string,
	ArmRoleReceiver: interface{},
	AutomationRunbookReceiver: interface{},
	AzureAppPushReceiver: interface{},
	AzureFunctionReceiver: interface{},
	EmailReceiver: interface{},
	Enabled: interface{},
	EventHubReceiver: interface{},
	Id: *string,
	ItsmReceiver: interface{},
	Location: *string,
	LogicAppReceiver: interface{},
	SmsReceiver: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.monitorActionGroup.MonitorActionGroupTimeouts,
	VoiceReceiver: interface{},
	WebhookReceiver: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#resource_group_name MonitorActionGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.shortName">ShortName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#short_name MonitorActionGroup#short_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.armRoleReceiver">ArmRoleReceiver</a></code> | <code>interface{}</code> | arm_role_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.automationRunbookReceiver">AutomationRunbookReceiver</a></code> | <code>interface{}</code> | automation_runbook_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.azureAppPushReceiver">AzureAppPushReceiver</a></code> | <code>interface{}</code> | azure_app_push_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.azureFunctionReceiver">AzureFunctionReceiver</a></code> | <code>interface{}</code> | azure_function_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.emailReceiver">EmailReceiver</a></code> | <code>interface{}</code> | email_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#enabled MonitorActionGroup#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.eventHubReceiver">EventHubReceiver</a></code> | <code>interface{}</code> | event_hub_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#id MonitorActionGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.itsmReceiver">ItsmReceiver</a></code> | <code>interface{}</code> | itsm_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#location MonitorActionGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.logicAppReceiver">LogicAppReceiver</a></code> | <code>interface{}</code> | logic_app_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.smsReceiver">SmsReceiver</a></code> | <code>interface{}</code> | sms_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#tags MonitorActionGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts">MonitorActionGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.voiceReceiver">VoiceReceiver</a></code> | <code>interface{}</code> | voice_receiver block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.webhookReceiver">WebhookReceiver</a></code> | <code>interface{}</code> | webhook_receiver block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#resource_group_name MonitorActionGroup#resource_group_name}.

---

##### `ShortName`<sup>Required</sup> <a name="ShortName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.shortName"></a>

```go
ShortName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#short_name MonitorActionGroup#short_name}.

---

##### `ArmRoleReceiver`<sup>Optional</sup> <a name="ArmRoleReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.armRoleReceiver"></a>

```go
ArmRoleReceiver interface{}
```

- *Type:* interface{}

arm_role_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#arm_role_receiver MonitorActionGroup#arm_role_receiver}

---

##### `AutomationRunbookReceiver`<sup>Optional</sup> <a name="AutomationRunbookReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.automationRunbookReceiver"></a>

```go
AutomationRunbookReceiver interface{}
```

- *Type:* interface{}

automation_runbook_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#automation_runbook_receiver MonitorActionGroup#automation_runbook_receiver}

---

##### `AzureAppPushReceiver`<sup>Optional</sup> <a name="AzureAppPushReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.azureAppPushReceiver"></a>

```go
AzureAppPushReceiver interface{}
```

- *Type:* interface{}

azure_app_push_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#azure_app_push_receiver MonitorActionGroup#azure_app_push_receiver}

---

##### `AzureFunctionReceiver`<sup>Optional</sup> <a name="AzureFunctionReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.azureFunctionReceiver"></a>

```go
AzureFunctionReceiver interface{}
```

- *Type:* interface{}

azure_function_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#azure_function_receiver MonitorActionGroup#azure_function_receiver}

---

##### `EmailReceiver`<sup>Optional</sup> <a name="EmailReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.emailReceiver"></a>

```go
EmailReceiver interface{}
```

- *Type:* interface{}

email_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#email_receiver MonitorActionGroup#email_receiver}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#enabled MonitorActionGroup#enabled}.

---

##### `EventHubReceiver`<sup>Optional</sup> <a name="EventHubReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.eventHubReceiver"></a>

```go
EventHubReceiver interface{}
```

- *Type:* interface{}

event_hub_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#event_hub_receiver MonitorActionGroup#event_hub_receiver}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#id MonitorActionGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ItsmReceiver`<sup>Optional</sup> <a name="ItsmReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.itsmReceiver"></a>

```go
ItsmReceiver interface{}
```

- *Type:* interface{}

itsm_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#itsm_receiver MonitorActionGroup#itsm_receiver}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#location MonitorActionGroup#location}.

---

##### `LogicAppReceiver`<sup>Optional</sup> <a name="LogicAppReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.logicAppReceiver"></a>

```go
LogicAppReceiver interface{}
```

- *Type:* interface{}

logic_app_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#logic_app_receiver MonitorActionGroup#logic_app_receiver}

---

##### `SmsReceiver`<sup>Optional</sup> <a name="SmsReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.smsReceiver"></a>

```go
SmsReceiver interface{}
```

- *Type:* interface{}

sms_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#sms_receiver MonitorActionGroup#sms_receiver}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#tags MonitorActionGroup#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.timeouts"></a>

```go
Timeouts MonitorActionGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts">MonitorActionGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#timeouts MonitorActionGroup#timeouts}

---

##### `VoiceReceiver`<sup>Optional</sup> <a name="VoiceReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.voiceReceiver"></a>

```go
VoiceReceiver interface{}
```

- *Type:* interface{}

voice_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#voice_receiver MonitorActionGroup#voice_receiver}

---

##### `WebhookReceiver`<sup>Optional</sup> <a name="WebhookReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupConfig.property.webhookReceiver"></a>

```go
WebhookReceiver interface{}
```

- *Type:* interface{}

webhook_receiver block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#webhook_receiver MonitorActionGroup#webhook_receiver}

---

### MonitorActionGroupEmailReceiver <a name="MonitorActionGroupEmailReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

&monitoractiongroup.MonitorActionGroupEmailReceiver {
	EmailAddress: *string,
	Name: *string,
	UseCommonAlertSchema: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#email_address MonitorActionGroup#email_address}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver.property.useCommonAlertSchema">UseCommonAlertSchema</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}. |

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver.property.emailAddress"></a>

```go
EmailAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#email_address MonitorActionGroup#email_address}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}.

---

##### `UseCommonAlertSchema`<sup>Optional</sup> <a name="UseCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiver.property.useCommonAlertSchema"></a>

```go
UseCommonAlertSchema interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}.

---

### MonitorActionGroupEventHubReceiver <a name="MonitorActionGroupEventHubReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

&monitoractiongroup.MonitorActionGroupEventHubReceiver {
	Name: *string,
	EventHubId: *string,
	EventHubName: *string,
	EventHubNamespace: *string,
	SubscriptionId: *string,
	TenantId: *string,
	UseCommonAlertSchema: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.eventHubId">EventHubId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#event_hub_id MonitorActionGroup#event_hub_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.eventHubName">EventHubName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#event_hub_name MonitorActionGroup#event_hub_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.eventHubNamespace">EventHubNamespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#event_hub_namespace MonitorActionGroup#event_hub_namespace}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#subscription_id MonitorActionGroup#subscription_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.tenantId">TenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#tenant_id MonitorActionGroup#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.useCommonAlertSchema">UseCommonAlertSchema</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}.

---

##### `EventHubId`<sup>Optional</sup> <a name="EventHubId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.eventHubId"></a>

```go
EventHubId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#event_hub_id MonitorActionGroup#event_hub_id}.

---

##### `EventHubName`<sup>Optional</sup> <a name="EventHubName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.eventHubName"></a>

```go
EventHubName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#event_hub_name MonitorActionGroup#event_hub_name}.

---

##### `EventHubNamespace`<sup>Optional</sup> <a name="EventHubNamespace" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.eventHubNamespace"></a>

```go
EventHubNamespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#event_hub_namespace MonitorActionGroup#event_hub_namespace}.

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.subscriptionId"></a>

```go
SubscriptionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#subscription_id MonitorActionGroup#subscription_id}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#tenant_id MonitorActionGroup#tenant_id}.

---

##### `UseCommonAlertSchema`<sup>Optional</sup> <a name="UseCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiver.property.useCommonAlertSchema"></a>

```go
UseCommonAlertSchema interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}.

---

### MonitorActionGroupItsmReceiver <a name="MonitorActionGroupItsmReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

&monitoractiongroup.MonitorActionGroupItsmReceiver {
	ConnectionId: *string,
	Name: *string,
	Region: *string,
	TicketConfiguration: *string,
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver.property.connectionId">ConnectionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#connection_id MonitorActionGroup#connection_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#region MonitorActionGroup#region}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver.property.ticketConfiguration">TicketConfiguration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#ticket_configuration MonitorActionGroup#ticket_configuration}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#workspace_id MonitorActionGroup#workspace_id}. |

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver.property.connectionId"></a>

```go
ConnectionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#connection_id MonitorActionGroup#connection_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#region MonitorActionGroup#region}.

---

##### `TicketConfiguration`<sup>Required</sup> <a name="TicketConfiguration" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver.property.ticketConfiguration"></a>

```go
TicketConfiguration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#ticket_configuration MonitorActionGroup#ticket_configuration}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiver.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#workspace_id MonitorActionGroup#workspace_id}.

---

### MonitorActionGroupLogicAppReceiver <a name="MonitorActionGroupLogicAppReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

&monitoractiongroup.MonitorActionGroupLogicAppReceiver {
	CallbackUrl: *string,
	Name: *string,
	ResourceId: *string,
	UseCommonAlertSchema: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver.property.callbackUrl">CallbackUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#callback_url MonitorActionGroup#callback_url}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver.property.resourceId">ResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#resource_id MonitorActionGroup#resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver.property.useCommonAlertSchema">UseCommonAlertSchema</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}. |

---

##### `CallbackUrl`<sup>Required</sup> <a name="CallbackUrl" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver.property.callbackUrl"></a>

```go
CallbackUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#callback_url MonitorActionGroup#callback_url}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}.

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#resource_id MonitorActionGroup#resource_id}.

---

##### `UseCommonAlertSchema`<sup>Optional</sup> <a name="UseCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiver.property.useCommonAlertSchema"></a>

```go
UseCommonAlertSchema interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}.

---

### MonitorActionGroupSmsReceiver <a name="MonitorActionGroupSmsReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

&monitoractiongroup.MonitorActionGroupSmsReceiver {
	CountryCode: *string,
	Name: *string,
	PhoneNumber: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver.property.countryCode">CountryCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#country_code MonitorActionGroup#country_code}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#phone_number MonitorActionGroup#phone_number}. |

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver.property.countryCode"></a>

```go
CountryCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#country_code MonitorActionGroup#country_code}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}.

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiver.property.phoneNumber"></a>

```go
PhoneNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#phone_number MonitorActionGroup#phone_number}.

---

### MonitorActionGroupTimeouts <a name="MonitorActionGroupTimeouts" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

&monitoractiongroup.MonitorActionGroupTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#create MonitorActionGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#delete MonitorActionGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#read MonitorActionGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#update MonitorActionGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#create MonitorActionGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#delete MonitorActionGroup#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#read MonitorActionGroup#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#update MonitorActionGroup#update}.

---

### MonitorActionGroupVoiceReceiver <a name="MonitorActionGroupVoiceReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

&monitoractiongroup.MonitorActionGroupVoiceReceiver {
	CountryCode: *string,
	Name: *string,
	PhoneNumber: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver.property.countryCode">CountryCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#country_code MonitorActionGroup#country_code}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#phone_number MonitorActionGroup#phone_number}. |

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver.property.countryCode"></a>

```go
CountryCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#country_code MonitorActionGroup#country_code}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}.

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiver.property.phoneNumber"></a>

```go
PhoneNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#phone_number MonitorActionGroup#phone_number}.

---

### MonitorActionGroupWebhookReceiver <a name="MonitorActionGroupWebhookReceiver" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

&monitoractiongroup.MonitorActionGroupWebhookReceiver {
	Name: *string,
	ServiceUri: *string,
	AadAuth: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth,
	UseCommonAlertSchema: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver.property.serviceUri">ServiceUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#service_uri MonitorActionGroup#service_uri}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver.property.aadAuth">AadAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth">MonitorActionGroupWebhookReceiverAadAuth</a></code> | aad_auth block. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver.property.useCommonAlertSchema">UseCommonAlertSchema</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#name MonitorActionGroup#name}.

---

##### `ServiceUri`<sup>Required</sup> <a name="ServiceUri" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver.property.serviceUri"></a>

```go
ServiceUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#service_uri MonitorActionGroup#service_uri}.

---

##### `AadAuth`<sup>Optional</sup> <a name="AadAuth" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver.property.aadAuth"></a>

```go
AadAuth MonitorActionGroupWebhookReceiverAadAuth
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth">MonitorActionGroupWebhookReceiverAadAuth</a>

aad_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#aad_auth MonitorActionGroup#aad_auth}

---

##### `UseCommonAlertSchema`<sup>Optional</sup> <a name="UseCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiver.property.useCommonAlertSchema"></a>

```go
UseCommonAlertSchema interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#use_common_alert_schema MonitorActionGroup#use_common_alert_schema}.

---

### MonitorActionGroupWebhookReceiverAadAuth <a name="MonitorActionGroupWebhookReceiverAadAuth" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

&monitoractiongroup.MonitorActionGroupWebhookReceiverAadAuth {
	ObjectId: *string,
	IdentifierUri: *string,
	TenantId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth.property.objectId">ObjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#object_id MonitorActionGroup#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth.property.identifierUri">IdentifierUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#identifier_uri MonitorActionGroup#identifier_uri}. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth.property.tenantId">TenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#tenant_id MonitorActionGroup#tenant_id}. |

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth.property.objectId"></a>

```go
ObjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#object_id MonitorActionGroup#object_id}.

---

##### `IdentifierUri`<sup>Optional</sup> <a name="IdentifierUri" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth.property.identifierUri"></a>

```go
IdentifierUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#identifier_uri MonitorActionGroup#identifier_uri}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.92.0/docs/resources/monitor_action_group#tenant_id MonitorActionGroup#tenant_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorActionGroupArmRoleReceiverList <a name="MonitorActionGroupArmRoleReceiverList" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

monitoractiongroup.NewMonitorActionGroupArmRoleReceiverList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MonitorActionGroupArmRoleReceiverList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.get"></a>

```go
func Get(index *f64) MonitorActionGroupArmRoleReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorActionGroupArmRoleReceiverOutputReference <a name="MonitorActionGroupArmRoleReceiverOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

monitoractiongroup.NewMonitorActionGroupArmRoleReceiverOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MonitorActionGroupArmRoleReceiverOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.resetUseCommonAlertSchema">ResetUseCommonAlertSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUseCommonAlertSchema` <a name="ResetUseCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.resetUseCommonAlertSchema"></a>

```go
func ResetUseCommonAlertSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.roleIdInput">RoleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.useCommonAlertSchemaInput">UseCommonAlertSchemaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.roleId">RoleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.useCommonAlertSchema">UseCommonAlertSchema</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RoleIdInput`<sup>Optional</sup> <a name="RoleIdInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.roleIdInput"></a>

```go
func RoleIdInput() *string
```

- *Type:* *string

---

##### `UseCommonAlertSchemaInput`<sup>Optional</sup> <a name="UseCommonAlertSchemaInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.useCommonAlertSchemaInput"></a>

```go
func UseCommonAlertSchemaInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RoleId`<sup>Required</sup> <a name="RoleId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.roleId"></a>

```go
func RoleId() *string
```

- *Type:* *string

---

##### `UseCommonAlertSchema`<sup>Required</sup> <a name="UseCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.useCommonAlertSchema"></a>

```go
func UseCommonAlertSchema() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupArmRoleReceiverOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorActionGroupAutomationRunbookReceiverList <a name="MonitorActionGroupAutomationRunbookReceiverList" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

monitoractiongroup.NewMonitorActionGroupAutomationRunbookReceiverList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MonitorActionGroupAutomationRunbookReceiverList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.get"></a>

```go
func Get(index *f64) MonitorActionGroupAutomationRunbookReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorActionGroupAutomationRunbookReceiverOutputReference <a name="MonitorActionGroupAutomationRunbookReceiverOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

monitoractiongroup.NewMonitorActionGroupAutomationRunbookReceiverOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MonitorActionGroupAutomationRunbookReceiverOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.resetUseCommonAlertSchema">ResetUseCommonAlertSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUseCommonAlertSchema` <a name="ResetUseCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.resetUseCommonAlertSchema"></a>

```go
func ResetUseCommonAlertSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.automationAccountIdInput">AutomationAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.isGlobalRunbookInput">IsGlobalRunbookInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.runbookNameInput">RunbookNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.serviceUriInput">ServiceUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.useCommonAlertSchemaInput">UseCommonAlertSchemaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.webhookResourceIdInput">WebhookResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.automationAccountId">AutomationAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.isGlobalRunbook">IsGlobalRunbook</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.runbookName">RunbookName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.serviceUri">ServiceUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.useCommonAlertSchema">UseCommonAlertSchema</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.webhookResourceId">WebhookResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutomationAccountIdInput`<sup>Optional</sup> <a name="AutomationAccountIdInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.automationAccountIdInput"></a>

```go
func AutomationAccountIdInput() *string
```

- *Type:* *string

---

##### `IsGlobalRunbookInput`<sup>Optional</sup> <a name="IsGlobalRunbookInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.isGlobalRunbookInput"></a>

```go
func IsGlobalRunbookInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RunbookNameInput`<sup>Optional</sup> <a name="RunbookNameInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.runbookNameInput"></a>

```go
func RunbookNameInput() *string
```

- *Type:* *string

---

##### `ServiceUriInput`<sup>Optional</sup> <a name="ServiceUriInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.serviceUriInput"></a>

```go
func ServiceUriInput() *string
```

- *Type:* *string

---

##### `UseCommonAlertSchemaInput`<sup>Optional</sup> <a name="UseCommonAlertSchemaInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.useCommonAlertSchemaInput"></a>

```go
func UseCommonAlertSchemaInput() interface{}
```

- *Type:* interface{}

---

##### `WebhookResourceIdInput`<sup>Optional</sup> <a name="WebhookResourceIdInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.webhookResourceIdInput"></a>

```go
func WebhookResourceIdInput() *string
```

- *Type:* *string

---

##### `AutomationAccountId`<sup>Required</sup> <a name="AutomationAccountId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.automationAccountId"></a>

```go
func AutomationAccountId() *string
```

- *Type:* *string

---

##### `IsGlobalRunbook`<sup>Required</sup> <a name="IsGlobalRunbook" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.isGlobalRunbook"></a>

```go
func IsGlobalRunbook() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RunbookName`<sup>Required</sup> <a name="RunbookName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.runbookName"></a>

```go
func RunbookName() *string
```

- *Type:* *string

---

##### `ServiceUri`<sup>Required</sup> <a name="ServiceUri" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.serviceUri"></a>

```go
func ServiceUri() *string
```

- *Type:* *string

---

##### `UseCommonAlertSchema`<sup>Required</sup> <a name="UseCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.useCommonAlertSchema"></a>

```go
func UseCommonAlertSchema() interface{}
```

- *Type:* interface{}

---

##### `WebhookResourceId`<sup>Required</sup> <a name="WebhookResourceId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.webhookResourceId"></a>

```go
func WebhookResourceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAutomationRunbookReceiverOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorActionGroupAzureAppPushReceiverList <a name="MonitorActionGroupAzureAppPushReceiverList" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

monitoractiongroup.NewMonitorActionGroupAzureAppPushReceiverList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MonitorActionGroupAzureAppPushReceiverList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.get"></a>

```go
func Get(index *f64) MonitorActionGroupAzureAppPushReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorActionGroupAzureAppPushReceiverOutputReference <a name="MonitorActionGroupAzureAppPushReceiverOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

monitoractiongroup.NewMonitorActionGroupAzureAppPushReceiverOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MonitorActionGroupAzureAppPushReceiverOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.emailAddressInput">EmailAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.emailAddressInput"></a>

```go
func EmailAddressInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.emailAddress"></a>

```go
func EmailAddress() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureAppPushReceiverOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorActionGroupAzureFunctionReceiverList <a name="MonitorActionGroupAzureFunctionReceiverList" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

monitoractiongroup.NewMonitorActionGroupAzureFunctionReceiverList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MonitorActionGroupAzureFunctionReceiverList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.get"></a>

```go
func Get(index *f64) MonitorActionGroupAzureFunctionReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorActionGroupAzureFunctionReceiverOutputReference <a name="MonitorActionGroupAzureFunctionReceiverOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

monitoractiongroup.NewMonitorActionGroupAzureFunctionReceiverOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MonitorActionGroupAzureFunctionReceiverOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.resetUseCommonAlertSchema">ResetUseCommonAlertSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUseCommonAlertSchema` <a name="ResetUseCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.resetUseCommonAlertSchema"></a>

```go
func ResetUseCommonAlertSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.functionAppResourceIdInput">FunctionAppResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.functionNameInput">FunctionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.httpTriggerUrlInput">HttpTriggerUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.useCommonAlertSchemaInput">UseCommonAlertSchemaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.functionAppResourceId">FunctionAppResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.functionName">FunctionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.httpTriggerUrl">HttpTriggerUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.useCommonAlertSchema">UseCommonAlertSchema</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FunctionAppResourceIdInput`<sup>Optional</sup> <a name="FunctionAppResourceIdInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.functionAppResourceIdInput"></a>

```go
func FunctionAppResourceIdInput() *string
```

- *Type:* *string

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.functionNameInput"></a>

```go
func FunctionNameInput() *string
```

- *Type:* *string

---

##### `HttpTriggerUrlInput`<sup>Optional</sup> <a name="HttpTriggerUrlInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.httpTriggerUrlInput"></a>

```go
func HttpTriggerUrlInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `UseCommonAlertSchemaInput`<sup>Optional</sup> <a name="UseCommonAlertSchemaInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.useCommonAlertSchemaInput"></a>

```go
func UseCommonAlertSchemaInput() interface{}
```

- *Type:* interface{}

---

##### `FunctionAppResourceId`<sup>Required</sup> <a name="FunctionAppResourceId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.functionAppResourceId"></a>

```go
func FunctionAppResourceId() *string
```

- *Type:* *string

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.functionName"></a>

```go
func FunctionName() *string
```

- *Type:* *string

---

##### `HttpTriggerUrl`<sup>Required</sup> <a name="HttpTriggerUrl" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.httpTriggerUrl"></a>

```go
func HttpTriggerUrl() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `UseCommonAlertSchema`<sup>Required</sup> <a name="UseCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.useCommonAlertSchema"></a>

```go
func UseCommonAlertSchema() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupAzureFunctionReceiverOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorActionGroupEmailReceiverList <a name="MonitorActionGroupEmailReceiverList" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

monitoractiongroup.NewMonitorActionGroupEmailReceiverList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MonitorActionGroupEmailReceiverList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.get"></a>

```go
func Get(index *f64) MonitorActionGroupEmailReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorActionGroupEmailReceiverOutputReference <a name="MonitorActionGroupEmailReceiverOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

monitoractiongroup.NewMonitorActionGroupEmailReceiverOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MonitorActionGroupEmailReceiverOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.resetUseCommonAlertSchema">ResetUseCommonAlertSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUseCommonAlertSchema` <a name="ResetUseCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.resetUseCommonAlertSchema"></a>

```go
func ResetUseCommonAlertSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.emailAddressInput">EmailAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.useCommonAlertSchemaInput">UseCommonAlertSchemaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.useCommonAlertSchema">UseCommonAlertSchema</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.emailAddressInput"></a>

```go
func EmailAddressInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `UseCommonAlertSchemaInput`<sup>Optional</sup> <a name="UseCommonAlertSchemaInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.useCommonAlertSchemaInput"></a>

```go
func UseCommonAlertSchemaInput() interface{}
```

- *Type:* interface{}

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.emailAddress"></a>

```go
func EmailAddress() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `UseCommonAlertSchema`<sup>Required</sup> <a name="UseCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.useCommonAlertSchema"></a>

```go
func UseCommonAlertSchema() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEmailReceiverOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorActionGroupEventHubReceiverList <a name="MonitorActionGroupEventHubReceiverList" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

monitoractiongroup.NewMonitorActionGroupEventHubReceiverList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MonitorActionGroupEventHubReceiverList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.get"></a>

```go
func Get(index *f64) MonitorActionGroupEventHubReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorActionGroupEventHubReceiverOutputReference <a name="MonitorActionGroupEventHubReceiverOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

monitoractiongroup.NewMonitorActionGroupEventHubReceiverOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MonitorActionGroupEventHubReceiverOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resetEventHubId">ResetEventHubId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resetEventHubName">ResetEventHubName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resetEventHubNamespace">ResetEventHubNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resetSubscriptionId">ResetSubscriptionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resetUseCommonAlertSchema">ResetUseCommonAlertSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEventHubId` <a name="ResetEventHubId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resetEventHubId"></a>

```go
func ResetEventHubId()
```

##### `ResetEventHubName` <a name="ResetEventHubName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resetEventHubName"></a>

```go
func ResetEventHubName()
```

##### `ResetEventHubNamespace` <a name="ResetEventHubNamespace" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resetEventHubNamespace"></a>

```go
func ResetEventHubNamespace()
```

##### `ResetSubscriptionId` <a name="ResetSubscriptionId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resetSubscriptionId"></a>

```go
func ResetSubscriptionId()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resetTenantId"></a>

```go
func ResetTenantId()
```

##### `ResetUseCommonAlertSchema` <a name="ResetUseCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.resetUseCommonAlertSchema"></a>

```go
func ResetUseCommonAlertSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.eventHubIdInput">EventHubIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.eventHubNameInput">EventHubNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.eventHubNamespaceInput">EventHubNamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.useCommonAlertSchemaInput">UseCommonAlertSchemaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.eventHubId">EventHubId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.eventHubName">EventHubName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.eventHubNamespace">EventHubNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.useCommonAlertSchema">UseCommonAlertSchema</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventHubIdInput`<sup>Optional</sup> <a name="EventHubIdInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.eventHubIdInput"></a>

```go
func EventHubIdInput() *string
```

- *Type:* *string

---

##### `EventHubNameInput`<sup>Optional</sup> <a name="EventHubNameInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.eventHubNameInput"></a>

```go
func EventHubNameInput() *string
```

- *Type:* *string

---

##### `EventHubNamespaceInput`<sup>Optional</sup> <a name="EventHubNamespaceInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.eventHubNamespaceInput"></a>

```go
func EventHubNamespaceInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.subscriptionIdInput"></a>

```go
func SubscriptionIdInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `UseCommonAlertSchemaInput`<sup>Optional</sup> <a name="UseCommonAlertSchemaInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.useCommonAlertSchemaInput"></a>

```go
func UseCommonAlertSchemaInput() interface{}
```

- *Type:* interface{}

---

##### `EventHubId`<sup>Required</sup> <a name="EventHubId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.eventHubId"></a>

```go
func EventHubId() *string
```

- *Type:* *string

---

##### `EventHubName`<sup>Required</sup> <a name="EventHubName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.eventHubName"></a>

```go
func EventHubName() *string
```

- *Type:* *string

---

##### `EventHubNamespace`<sup>Required</sup> <a name="EventHubNamespace" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.eventHubNamespace"></a>

```go
func EventHubNamespace() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `UseCommonAlertSchema`<sup>Required</sup> <a name="UseCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.useCommonAlertSchema"></a>

```go
func UseCommonAlertSchema() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupEventHubReceiverOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorActionGroupItsmReceiverList <a name="MonitorActionGroupItsmReceiverList" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

monitoractiongroup.NewMonitorActionGroupItsmReceiverList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MonitorActionGroupItsmReceiverList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.get"></a>

```go
func Get(index *f64) MonitorActionGroupItsmReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorActionGroupItsmReceiverOutputReference <a name="MonitorActionGroupItsmReceiverOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

monitoractiongroup.NewMonitorActionGroupItsmReceiverOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MonitorActionGroupItsmReceiverOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.connectionIdInput">ConnectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.ticketConfigurationInput">TicketConfigurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.connectionId">ConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.ticketConfiguration">TicketConfiguration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.connectionIdInput"></a>

```go
func ConnectionIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TicketConfigurationInput`<sup>Optional</sup> <a name="TicketConfigurationInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.ticketConfigurationInput"></a>

```go
func TicketConfigurationInput() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.connectionId"></a>

```go
func ConnectionId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `TicketConfiguration`<sup>Required</sup> <a name="TicketConfiguration" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.ticketConfiguration"></a>

```go
func TicketConfiguration() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupItsmReceiverOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorActionGroupLogicAppReceiverList <a name="MonitorActionGroupLogicAppReceiverList" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

monitoractiongroup.NewMonitorActionGroupLogicAppReceiverList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MonitorActionGroupLogicAppReceiverList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.get"></a>

```go
func Get(index *f64) MonitorActionGroupLogicAppReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorActionGroupLogicAppReceiverOutputReference <a name="MonitorActionGroupLogicAppReceiverOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

monitoractiongroup.NewMonitorActionGroupLogicAppReceiverOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MonitorActionGroupLogicAppReceiverOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.resetUseCommonAlertSchema">ResetUseCommonAlertSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUseCommonAlertSchema` <a name="ResetUseCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.resetUseCommonAlertSchema"></a>

```go
func ResetUseCommonAlertSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.callbackUrlInput">CallbackUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.useCommonAlertSchemaInput">UseCommonAlertSchemaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.callbackUrl">CallbackUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.useCommonAlertSchema">UseCommonAlertSchema</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CallbackUrlInput`<sup>Optional</sup> <a name="CallbackUrlInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.callbackUrlInput"></a>

```go
func CallbackUrlInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `UseCommonAlertSchemaInput`<sup>Optional</sup> <a name="UseCommonAlertSchemaInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.useCommonAlertSchemaInput"></a>

```go
func UseCommonAlertSchemaInput() interface{}
```

- *Type:* interface{}

---

##### `CallbackUrl`<sup>Required</sup> <a name="CallbackUrl" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.callbackUrl"></a>

```go
func CallbackUrl() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `UseCommonAlertSchema`<sup>Required</sup> <a name="UseCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.useCommonAlertSchema"></a>

```go
func UseCommonAlertSchema() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupLogicAppReceiverOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorActionGroupSmsReceiverList <a name="MonitorActionGroupSmsReceiverList" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

monitoractiongroup.NewMonitorActionGroupSmsReceiverList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MonitorActionGroupSmsReceiverList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.get"></a>

```go
func Get(index *f64) MonitorActionGroupSmsReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorActionGroupSmsReceiverOutputReference <a name="MonitorActionGroupSmsReceiverOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

monitoractiongroup.NewMonitorActionGroupSmsReceiverOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MonitorActionGroupSmsReceiverOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.countryCodeInput">CountryCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.countryCode">CountryCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountryCodeInput`<sup>Optional</sup> <a name="CountryCodeInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.countryCodeInput"></a>

```go
func CountryCodeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.phoneNumberInput"></a>

```go
func PhoneNumberInput() *string
```

- *Type:* *string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.countryCode"></a>

```go
func CountryCode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.phoneNumber"></a>

```go
func PhoneNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupSmsReceiverOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorActionGroupTimeoutsOutputReference <a name="MonitorActionGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

monitoractiongroup.NewMonitorActionGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorActionGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorActionGroupVoiceReceiverList <a name="MonitorActionGroupVoiceReceiverList" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

monitoractiongroup.NewMonitorActionGroupVoiceReceiverList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MonitorActionGroupVoiceReceiverList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.get"></a>

```go
func Get(index *f64) MonitorActionGroupVoiceReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorActionGroupVoiceReceiverOutputReference <a name="MonitorActionGroupVoiceReceiverOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

monitoractiongroup.NewMonitorActionGroupVoiceReceiverOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MonitorActionGroupVoiceReceiverOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.countryCodeInput">CountryCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.countryCode">CountryCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountryCodeInput`<sup>Optional</sup> <a name="CountryCodeInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.countryCodeInput"></a>

```go
func CountryCodeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.phoneNumberInput"></a>

```go
func PhoneNumberInput() *string
```

- *Type:* *string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.countryCode"></a>

```go
func CountryCode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.phoneNumber"></a>

```go
func PhoneNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupVoiceReceiverOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorActionGroupWebhookReceiverAadAuthOutputReference <a name="MonitorActionGroupWebhookReceiverAadAuthOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

monitoractiongroup.NewMonitorActionGroupWebhookReceiverAadAuthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorActionGroupWebhookReceiverAadAuthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.resetIdentifierUri">ResetIdentifierUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.resetTenantId">ResetTenantId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentifierUri` <a name="ResetIdentifierUri" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.resetIdentifierUri"></a>

```go
func ResetIdentifierUri()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.resetTenantId"></a>

```go
func ResetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.identifierUriInput">IdentifierUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.objectIdInput">ObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.identifierUri">IdentifierUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.objectId">ObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth">MonitorActionGroupWebhookReceiverAadAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdentifierUriInput`<sup>Optional</sup> <a name="IdentifierUriInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.identifierUriInput"></a>

```go
func IdentifierUriInput() *string
```

- *Type:* *string

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.objectIdInput"></a>

```go
func ObjectIdInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `IdentifierUri`<sup>Required</sup> <a name="IdentifierUri" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.identifierUri"></a>

```go
func IdentifierUri() *string
```

- *Type:* *string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.objectId"></a>

```go
func ObjectId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitorActionGroupWebhookReceiverAadAuth
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth">MonitorActionGroupWebhookReceiverAadAuth</a>

---


### MonitorActionGroupWebhookReceiverList <a name="MonitorActionGroupWebhookReceiverList" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

monitoractiongroup.NewMonitorActionGroupWebhookReceiverList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MonitorActionGroupWebhookReceiverList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.get"></a>

```go
func Get(index *f64) MonitorActionGroupWebhookReceiverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorActionGroupWebhookReceiverOutputReference <a name="MonitorActionGroupWebhookReceiverOutputReference" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitoractiongroup"

monitoractiongroup.NewMonitorActionGroupWebhookReceiverOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MonitorActionGroupWebhookReceiverOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.putAadAuth">PutAadAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.resetAadAuth">ResetAadAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.resetUseCommonAlertSchema">ResetUseCommonAlertSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAadAuth` <a name="PutAadAuth" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.putAadAuth"></a>

```go
func PutAadAuth(value MonitorActionGroupWebhookReceiverAadAuth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.putAadAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth">MonitorActionGroupWebhookReceiverAadAuth</a>

---

##### `ResetAadAuth` <a name="ResetAadAuth" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.resetAadAuth"></a>

```go
func ResetAadAuth()
```

##### `ResetUseCommonAlertSchema` <a name="ResetUseCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.resetUseCommonAlertSchema"></a>

```go
func ResetUseCommonAlertSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.aadAuth">AadAuth</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference">MonitorActionGroupWebhookReceiverAadAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.aadAuthInput">AadAuthInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth">MonitorActionGroupWebhookReceiverAadAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.serviceUriInput">ServiceUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.useCommonAlertSchemaInput">UseCommonAlertSchemaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.serviceUri">ServiceUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.useCommonAlertSchema">UseCommonAlertSchema</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AadAuth`<sup>Required</sup> <a name="AadAuth" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.aadAuth"></a>

```go
func AadAuth() MonitorActionGroupWebhookReceiverAadAuthOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuthOutputReference">MonitorActionGroupWebhookReceiverAadAuthOutputReference</a>

---

##### `AadAuthInput`<sup>Optional</sup> <a name="AadAuthInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.aadAuthInput"></a>

```go
func AadAuthInput() MonitorActionGroupWebhookReceiverAadAuth
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverAadAuth">MonitorActionGroupWebhookReceiverAadAuth</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ServiceUriInput`<sup>Optional</sup> <a name="ServiceUriInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.serviceUriInput"></a>

```go
func ServiceUriInput() *string
```

- *Type:* *string

---

##### `UseCommonAlertSchemaInput`<sup>Optional</sup> <a name="UseCommonAlertSchemaInput" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.useCommonAlertSchemaInput"></a>

```go
func UseCommonAlertSchemaInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ServiceUri`<sup>Required</sup> <a name="ServiceUri" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.serviceUri"></a>

```go
func ServiceUri() *string
```

- *Type:* *string

---

##### `UseCommonAlertSchema`<sup>Required</sup> <a name="UseCommonAlertSchema" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.useCommonAlertSchema"></a>

```go
func UseCommonAlertSchema() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorActionGroup.MonitorActionGroupWebhookReceiverOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



