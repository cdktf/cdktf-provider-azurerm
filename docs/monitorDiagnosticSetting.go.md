# `monitorDiagnosticSetting` Submodule <a name="`monitorDiagnosticSetting` Submodule" id="@cdktf/provider-azurerm.monitorDiagnosticSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorDiagnosticSetting <a name="MonitorDiagnosticSetting" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting azurerm_monitor_diagnostic_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitordiagnosticsetting"

monitordiagnosticsetting.NewMonitorDiagnosticSetting(scope Construct, id *string, config MonitorDiagnosticSettingConfig) MonitorDiagnosticSetting
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig">MonitorDiagnosticSettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig">MonitorDiagnosticSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putEnabledLog">PutEnabledLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putLog">PutLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putMetric">PutMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetEnabledLog">ResetEnabledLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetEventhubAuthorizationRuleId">ResetEventhubAuthorizationRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetEventhubName">ResetEventhubName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetLog">ResetLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetLogAnalyticsDestinationType">ResetLogAnalyticsDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetLogAnalyticsWorkspaceId">ResetLogAnalyticsWorkspaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetMetric">ResetMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetPartnerSolutionId">ResetPartnerSolutionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetStorageAccountId">ResetStorageAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEnabledLog` <a name="PutEnabledLog" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putEnabledLog"></a>

```go
func PutEnabledLog(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putEnabledLog.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLog` <a name="PutLog" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putLog"></a>

```go
func PutLog(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putLog.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMetric` <a name="PutMetric" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putMetric"></a>

```go
func PutMetric(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putMetric.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putTimeouts"></a>

```go
func PutTimeouts(value MonitorDiagnosticSettingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts">MonitorDiagnosticSettingTimeouts</a>

---

##### `ResetEnabledLog` <a name="ResetEnabledLog" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetEnabledLog"></a>

```go
func ResetEnabledLog()
```

##### `ResetEventhubAuthorizationRuleId` <a name="ResetEventhubAuthorizationRuleId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetEventhubAuthorizationRuleId"></a>

```go
func ResetEventhubAuthorizationRuleId()
```

##### `ResetEventhubName` <a name="ResetEventhubName" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetEventhubName"></a>

```go
func ResetEventhubName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetId"></a>

```go
func ResetId()
```

##### `ResetLog` <a name="ResetLog" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetLog"></a>

```go
func ResetLog()
```

##### `ResetLogAnalyticsDestinationType` <a name="ResetLogAnalyticsDestinationType" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetLogAnalyticsDestinationType"></a>

```go
func ResetLogAnalyticsDestinationType()
```

##### `ResetLogAnalyticsWorkspaceId` <a name="ResetLogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetLogAnalyticsWorkspaceId"></a>

```go
func ResetLogAnalyticsWorkspaceId()
```

##### `ResetMetric` <a name="ResetMetric" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetMetric"></a>

```go
func ResetMetric()
```

##### `ResetPartnerSolutionId` <a name="ResetPartnerSolutionId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetPartnerSolutionId"></a>

```go
func ResetPartnerSolutionId()
```

##### `ResetStorageAccountId` <a name="ResetStorageAccountId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetStorageAccountId"></a>

```go
func ResetStorageAccountId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MonitorDiagnosticSetting resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitordiagnosticsetting"

monitordiagnosticsetting.MonitorDiagnosticSetting_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitordiagnosticsetting"

monitordiagnosticsetting.MonitorDiagnosticSetting_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitordiagnosticsetting"

monitordiagnosticsetting.MonitorDiagnosticSetting_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitordiagnosticsetting"

monitordiagnosticsetting.MonitorDiagnosticSetting_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MonitorDiagnosticSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MonitorDiagnosticSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MonitorDiagnosticSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MonitorDiagnosticSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.enabledLog">EnabledLog</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList">MonitorDiagnosticSettingEnabledLogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.log">Log</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogList">MonitorDiagnosticSettingLogList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.metric">Metric</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList">MonitorDiagnosticSettingMetricList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference">MonitorDiagnosticSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.enabledLogInput">EnabledLogInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.eventhubAuthorizationRuleIdInput">EventhubAuthorizationRuleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.eventhubNameInput">EventhubNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.logAnalyticsDestinationTypeInput">LogAnalyticsDestinationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.logInput">LogInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.metricInput">MetricInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.partnerSolutionIdInput">PartnerSolutionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.targetResourceIdInput">TargetResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.eventhubAuthorizationRuleId">EventhubAuthorizationRuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.eventhubName">EventhubName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.logAnalyticsDestinationType">LogAnalyticsDestinationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.partnerSolutionId">PartnerSolutionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.targetResourceId">TargetResourceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnabledLog`<sup>Required</sup> <a name="EnabledLog" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.enabledLog"></a>

```go
func EnabledLog() MonitorDiagnosticSettingEnabledLogList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList">MonitorDiagnosticSettingEnabledLogList</a>

---

##### `Log`<sup>Required</sup> <a name="Log" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.log"></a>

```go
func Log() MonitorDiagnosticSettingLogList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogList">MonitorDiagnosticSettingLogList</a>

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.metric"></a>

```go
func Metric() MonitorDiagnosticSettingMetricList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList">MonitorDiagnosticSettingMetricList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.timeouts"></a>

```go
func Timeouts() MonitorDiagnosticSettingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference">MonitorDiagnosticSettingTimeoutsOutputReference</a>

---

##### `EnabledLogInput`<sup>Optional</sup> <a name="EnabledLogInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.enabledLogInput"></a>

```go
func EnabledLogInput() interface{}
```

- *Type:* interface{}

---

##### `EventhubAuthorizationRuleIdInput`<sup>Optional</sup> <a name="EventhubAuthorizationRuleIdInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.eventhubAuthorizationRuleIdInput"></a>

```go
func EventhubAuthorizationRuleIdInput() *string
```

- *Type:* *string

---

##### `EventhubNameInput`<sup>Optional</sup> <a name="EventhubNameInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.eventhubNameInput"></a>

```go
func EventhubNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogAnalyticsDestinationTypeInput`<sup>Optional</sup> <a name="LogAnalyticsDestinationTypeInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.logAnalyticsDestinationTypeInput"></a>

```go
func LogAnalyticsDestinationTypeInput() *string
```

- *Type:* *string

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.logAnalyticsWorkspaceIdInput"></a>

```go
func LogAnalyticsWorkspaceIdInput() *string
```

- *Type:* *string

---

##### `LogInput`<sup>Optional</sup> <a name="LogInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.logInput"></a>

```go
func LogInput() interface{}
```

- *Type:* interface{}

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.metricInput"></a>

```go
func MetricInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PartnerSolutionIdInput`<sup>Optional</sup> <a name="PartnerSolutionIdInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.partnerSolutionIdInput"></a>

```go
func PartnerSolutionIdInput() *string
```

- *Type:* *string

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.storageAccountIdInput"></a>

```go
func StorageAccountIdInput() *string
```

- *Type:* *string

---

##### `TargetResourceIdInput`<sup>Optional</sup> <a name="TargetResourceIdInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.targetResourceIdInput"></a>

```go
func TargetResourceIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `EventhubAuthorizationRuleId`<sup>Required</sup> <a name="EventhubAuthorizationRuleId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.eventhubAuthorizationRuleId"></a>

```go
func EventhubAuthorizationRuleId() *string
```

- *Type:* *string

---

##### `EventhubName`<sup>Required</sup> <a name="EventhubName" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.eventhubName"></a>

```go
func EventhubName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogAnalyticsDestinationType`<sup>Required</sup> <a name="LogAnalyticsDestinationType" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.logAnalyticsDestinationType"></a>

```go
func LogAnalyticsDestinationType() *string
```

- *Type:* *string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.logAnalyticsWorkspaceId"></a>

```go
func LogAnalyticsWorkspaceId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PartnerSolutionId`<sup>Required</sup> <a name="PartnerSolutionId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.partnerSolutionId"></a>

```go
func PartnerSolutionId() *string
```

- *Type:* *string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.storageAccountId"></a>

```go
func StorageAccountId() *string
```

- *Type:* *string

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.targetResourceId"></a>

```go
func TargetResourceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSetting.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorDiagnosticSettingConfig <a name="MonitorDiagnosticSettingConfig" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitordiagnosticsetting"

&monitordiagnosticsetting.MonitorDiagnosticSettingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	TargetResourceId: *string,
	EnabledLog: interface{},
	EventhubAuthorizationRuleId: *string,
	EventhubName: *string,
	Id: *string,
	Log: interface{},
	LogAnalyticsDestinationType: *string,
	LogAnalyticsWorkspaceId: *string,
	Metric: interface{},
	PartnerSolutionId: *string,
	StorageAccountId: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#name MonitorDiagnosticSetting#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.targetResourceId">TargetResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#target_resource_id MonitorDiagnosticSetting#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.enabledLog">EnabledLog</a></code> | <code>interface{}</code> | enabled_log block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.eventhubAuthorizationRuleId">EventhubAuthorizationRuleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#eventhub_authorization_rule_id MonitorDiagnosticSetting#eventhub_authorization_rule_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.eventhubName">EventhubName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#eventhub_name MonitorDiagnosticSetting#eventhub_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#id MonitorDiagnosticSetting#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.log">Log</a></code> | <code>interface{}</code> | log block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.logAnalyticsDestinationType">LogAnalyticsDestinationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#log_analytics_destination_type MonitorDiagnosticSetting#log_analytics_destination_type}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#log_analytics_workspace_id MonitorDiagnosticSetting#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.metric">Metric</a></code> | <code>interface{}</code> | metric block. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.partnerSolutionId">PartnerSolutionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#partner_solution_id MonitorDiagnosticSetting#partner_solution_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#storage_account_id MonitorDiagnosticSetting#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts">MonitorDiagnosticSettingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#name MonitorDiagnosticSetting#name}.

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.targetResourceId"></a>

```go
TargetResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#target_resource_id MonitorDiagnosticSetting#target_resource_id}.

---

##### `EnabledLog`<sup>Optional</sup> <a name="EnabledLog" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.enabledLog"></a>

```go
EnabledLog interface{}
```

- *Type:* interface{}

enabled_log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#enabled_log MonitorDiagnosticSetting#enabled_log}

---

##### `EventhubAuthorizationRuleId`<sup>Optional</sup> <a name="EventhubAuthorizationRuleId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.eventhubAuthorizationRuleId"></a>

```go
EventhubAuthorizationRuleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#eventhub_authorization_rule_id MonitorDiagnosticSetting#eventhub_authorization_rule_id}.

---

##### `EventhubName`<sup>Optional</sup> <a name="EventhubName" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.eventhubName"></a>

```go
EventhubName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#eventhub_name MonitorDiagnosticSetting#eventhub_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#id MonitorDiagnosticSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Log`<sup>Optional</sup> <a name="Log" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.log"></a>

```go
Log interface{}
```

- *Type:* interface{}

log block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#log MonitorDiagnosticSetting#log}

---

##### `LogAnalyticsDestinationType`<sup>Optional</sup> <a name="LogAnalyticsDestinationType" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.logAnalyticsDestinationType"></a>

```go
LogAnalyticsDestinationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#log_analytics_destination_type MonitorDiagnosticSetting#log_analytics_destination_type}.

---

##### `LogAnalyticsWorkspaceId`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.logAnalyticsWorkspaceId"></a>

```go
LogAnalyticsWorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#log_analytics_workspace_id MonitorDiagnosticSetting#log_analytics_workspace_id}.

---

##### `Metric`<sup>Optional</sup> <a name="Metric" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.metric"></a>

```go
Metric interface{}
```

- *Type:* interface{}

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#metric MonitorDiagnosticSetting#metric}

---

##### `PartnerSolutionId`<sup>Optional</sup> <a name="PartnerSolutionId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.partnerSolutionId"></a>

```go
PartnerSolutionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#partner_solution_id MonitorDiagnosticSetting#partner_solution_id}.

---

##### `StorageAccountId`<sup>Optional</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.storageAccountId"></a>

```go
StorageAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#storage_account_id MonitorDiagnosticSetting#storage_account_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingConfig.property.timeouts"></a>

```go
Timeouts MonitorDiagnosticSettingTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts">MonitorDiagnosticSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#timeouts MonitorDiagnosticSetting#timeouts}

---

### MonitorDiagnosticSettingEnabledLog <a name="MonitorDiagnosticSettingEnabledLog" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitordiagnosticsetting"

&monitordiagnosticsetting.MonitorDiagnosticSettingEnabledLog {
	Category: *string,
	CategoryGroup: *string,
	RetentionPolicy: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog.property.category">Category</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#category MonitorDiagnosticSetting#category}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog.property.categoryGroup">CategoryGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#category_group MonitorDiagnosticSetting#category_group}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy">MonitorDiagnosticSettingEnabledLogRetentionPolicy</a></code> | retention_policy block. |

---

##### `Category`<sup>Optional</sup> <a name="Category" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog.property.category"></a>

```go
Category *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#category MonitorDiagnosticSetting#category}.

---

##### `CategoryGroup`<sup>Optional</sup> <a name="CategoryGroup" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog.property.categoryGroup"></a>

```go
CategoryGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#category_group MonitorDiagnosticSetting#category_group}.

---

##### `RetentionPolicy`<sup>Optional</sup> <a name="RetentionPolicy" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLog.property.retentionPolicy"></a>

```go
RetentionPolicy MonitorDiagnosticSettingEnabledLogRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy">MonitorDiagnosticSettingEnabledLogRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#retention_policy MonitorDiagnosticSetting#retention_policy}

---

### MonitorDiagnosticSettingEnabledLogRetentionPolicy <a name="MonitorDiagnosticSettingEnabledLogRetentionPolicy" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitordiagnosticsetting"

&monitordiagnosticsetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy {
	Enabled: interface{},
	Days: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#enabled MonitorDiagnosticSetting#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy.property.days">Days</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#days MonitorDiagnosticSetting#days}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#enabled MonitorDiagnosticSetting#enabled}.

---

##### `Days`<sup>Optional</sup> <a name="Days" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy.property.days"></a>

```go
Days *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#days MonitorDiagnosticSetting#days}.

---

### MonitorDiagnosticSettingLog <a name="MonitorDiagnosticSettingLog" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLog.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitordiagnosticsetting"

&monitordiagnosticsetting.MonitorDiagnosticSettingLog {
	Category: *string,
	CategoryGroup: *string,
	Enabled: interface{},
	RetentionPolicy: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicy,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLog.property.category">Category</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#category MonitorDiagnosticSetting#category}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLog.property.categoryGroup">CategoryGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#category_group MonitorDiagnosticSetting#category_group}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLog.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#enabled MonitorDiagnosticSetting#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLog.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicy">MonitorDiagnosticSettingLogRetentionPolicy</a></code> | retention_policy block. |

---

##### `Category`<sup>Optional</sup> <a name="Category" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLog.property.category"></a>

```go
Category *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#category MonitorDiagnosticSetting#category}.

---

##### `CategoryGroup`<sup>Optional</sup> <a name="CategoryGroup" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLog.property.categoryGroup"></a>

```go
CategoryGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#category_group MonitorDiagnosticSetting#category_group}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLog.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#enabled MonitorDiagnosticSetting#enabled}.

---

##### `RetentionPolicy`<sup>Optional</sup> <a name="RetentionPolicy" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLog.property.retentionPolicy"></a>

```go
RetentionPolicy MonitorDiagnosticSettingLogRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicy">MonitorDiagnosticSettingLogRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#retention_policy MonitorDiagnosticSetting#retention_policy}

---

### MonitorDiagnosticSettingLogRetentionPolicy <a name="MonitorDiagnosticSettingLogRetentionPolicy" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitordiagnosticsetting"

&monitordiagnosticsetting.MonitorDiagnosticSettingLogRetentionPolicy {
	Enabled: interface{},
	Days: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicy.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#enabled MonitorDiagnosticSetting#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicy.property.days">Days</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#days MonitorDiagnosticSetting#days}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicy.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#enabled MonitorDiagnosticSetting#enabled}.

---

##### `Days`<sup>Optional</sup> <a name="Days" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicy.property.days"></a>

```go
Days *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#days MonitorDiagnosticSetting#days}.

---

### MonitorDiagnosticSettingMetric <a name="MonitorDiagnosticSettingMetric" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetric.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitordiagnosticsetting"

&monitordiagnosticsetting.MonitorDiagnosticSettingMetric {
	Category: *string,
	Enabled: interface{},
	RetentionPolicy: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetric.property.category">Category</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#category MonitorDiagnosticSetting#category}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetric.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#enabled MonitorDiagnosticSetting#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetric.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy">MonitorDiagnosticSettingMetricRetentionPolicy</a></code> | retention_policy block. |

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetric.property.category"></a>

```go
Category *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#category MonitorDiagnosticSetting#category}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetric.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#enabled MonitorDiagnosticSetting#enabled}.

---

##### `RetentionPolicy`<sup>Optional</sup> <a name="RetentionPolicy" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetric.property.retentionPolicy"></a>

```go
RetentionPolicy MonitorDiagnosticSettingMetricRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy">MonitorDiagnosticSettingMetricRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#retention_policy MonitorDiagnosticSetting#retention_policy}

---

### MonitorDiagnosticSettingMetricRetentionPolicy <a name="MonitorDiagnosticSettingMetricRetentionPolicy" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitordiagnosticsetting"

&monitordiagnosticsetting.MonitorDiagnosticSettingMetricRetentionPolicy {
	Enabled: interface{},
	Days: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#enabled MonitorDiagnosticSetting#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy.property.days">Days</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#days MonitorDiagnosticSetting#days}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#enabled MonitorDiagnosticSetting#enabled}.

---

##### `Days`<sup>Optional</sup> <a name="Days" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy.property.days"></a>

```go
Days *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#days MonitorDiagnosticSetting#days}.

---

### MonitorDiagnosticSettingTimeouts <a name="MonitorDiagnosticSettingTimeouts" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitordiagnosticsetting"

&monitordiagnosticsetting.MonitorDiagnosticSettingTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#create MonitorDiagnosticSetting#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#delete MonitorDiagnosticSetting#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#read MonitorDiagnosticSetting#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#update MonitorDiagnosticSetting#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#create MonitorDiagnosticSetting#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#delete MonitorDiagnosticSetting#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#read MonitorDiagnosticSetting#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.94.0/docs/resources/monitor_diagnostic_setting#update MonitorDiagnosticSetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorDiagnosticSettingEnabledLogList <a name="MonitorDiagnosticSettingEnabledLogList" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitordiagnosticsetting"

monitordiagnosticsetting.NewMonitorDiagnosticSettingEnabledLogList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MonitorDiagnosticSettingEnabledLogList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.get"></a>

```go
func Get(index *f64) MonitorDiagnosticSettingEnabledLogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorDiagnosticSettingEnabledLogOutputReference <a name="MonitorDiagnosticSettingEnabledLogOutputReference" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitordiagnosticsetting"

monitordiagnosticsetting.NewMonitorDiagnosticSettingEnabledLogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MonitorDiagnosticSettingEnabledLogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.putRetentionPolicy">PutRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.resetCategory">ResetCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.resetCategoryGroup">ResetCategoryGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.resetRetentionPolicy">ResetRetentionPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRetentionPolicy` <a name="PutRetentionPolicy" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.putRetentionPolicy"></a>

```go
func PutRetentionPolicy(value MonitorDiagnosticSettingEnabledLogRetentionPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.putRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy">MonitorDiagnosticSettingEnabledLogRetentionPolicy</a>

---

##### `ResetCategory` <a name="ResetCategory" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.resetCategory"></a>

```go
func ResetCategory()
```

##### `ResetCategoryGroup` <a name="ResetCategoryGroup" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.resetCategoryGroup"></a>

```go
func ResetCategoryGroup()
```

##### `ResetRetentionPolicy` <a name="ResetRetentionPolicy" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.resetRetentionPolicy"></a>

```go
func ResetRetentionPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference">MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.categoryGroupInput">CategoryGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.categoryInput">CategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.retentionPolicyInput">RetentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy">MonitorDiagnosticSettingEnabledLogRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.categoryGroup">CategoryGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RetentionPolicy`<sup>Required</sup> <a name="RetentionPolicy" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.retentionPolicy"></a>

```go
func RetentionPolicy() MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference">MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference</a>

---

##### `CategoryGroupInput`<sup>Optional</sup> <a name="CategoryGroupInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.categoryGroupInput"></a>

```go
func CategoryGroupInput() *string
```

- *Type:* *string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.categoryInput"></a>

```go
func CategoryInput() *string
```

- *Type:* *string

---

##### `RetentionPolicyInput`<sup>Optional</sup> <a name="RetentionPolicyInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.retentionPolicyInput"></a>

```go
func RetentionPolicyInput() MonitorDiagnosticSettingEnabledLogRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy">MonitorDiagnosticSettingEnabledLogRetentionPolicy</a>

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `CategoryGroup`<sup>Required</sup> <a name="CategoryGroup" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.categoryGroup"></a>

```go
func CategoryGroup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference <a name="MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitordiagnosticsetting"

monitordiagnosticsetting.NewMonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.resetDays">ResetDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDays` <a name="ResetDays" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.resetDays"></a>

```go
func ResetDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.daysInput">DaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.days">Days</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy">MonitorDiagnosticSettingEnabledLogRetentionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.daysInput"></a>

```go
func DaysInput() *f64
```

- *Type:* *f64

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.days"></a>

```go
func Days() *f64
```

- *Type:* *f64

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitorDiagnosticSettingEnabledLogRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingEnabledLogRetentionPolicy">MonitorDiagnosticSettingEnabledLogRetentionPolicy</a>

---


### MonitorDiagnosticSettingLogList <a name="MonitorDiagnosticSettingLogList" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitordiagnosticsetting"

monitordiagnosticsetting.NewMonitorDiagnosticSettingLogList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MonitorDiagnosticSettingLogList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogList.get"></a>

```go
func Get(index *f64) MonitorDiagnosticSettingLogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorDiagnosticSettingLogOutputReference <a name="MonitorDiagnosticSettingLogOutputReference" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitordiagnosticsetting"

monitordiagnosticsetting.NewMonitorDiagnosticSettingLogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MonitorDiagnosticSettingLogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.putRetentionPolicy">PutRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.resetCategory">ResetCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.resetCategoryGroup">ResetCategoryGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.resetRetentionPolicy">ResetRetentionPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRetentionPolicy` <a name="PutRetentionPolicy" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.putRetentionPolicy"></a>

```go
func PutRetentionPolicy(value MonitorDiagnosticSettingLogRetentionPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.putRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicy">MonitorDiagnosticSettingLogRetentionPolicy</a>

---

##### `ResetCategory` <a name="ResetCategory" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.resetCategory"></a>

```go
func ResetCategory()
```

##### `ResetCategoryGroup` <a name="ResetCategoryGroup" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.resetCategoryGroup"></a>

```go
func ResetCategoryGroup()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetRetentionPolicy` <a name="ResetRetentionPolicy" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.resetRetentionPolicy"></a>

```go
func ResetRetentionPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference">MonitorDiagnosticSettingLogRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.property.categoryGroupInput">CategoryGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.property.categoryInput">CategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.property.retentionPolicyInput">RetentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicy">MonitorDiagnosticSettingLogRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.property.categoryGroup">CategoryGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RetentionPolicy`<sup>Required</sup> <a name="RetentionPolicy" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.property.retentionPolicy"></a>

```go
func RetentionPolicy() MonitorDiagnosticSettingLogRetentionPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference">MonitorDiagnosticSettingLogRetentionPolicyOutputReference</a>

---

##### `CategoryGroupInput`<sup>Optional</sup> <a name="CategoryGroupInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.property.categoryGroupInput"></a>

```go
func CategoryGroupInput() *string
```

- *Type:* *string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.property.categoryInput"></a>

```go
func CategoryInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RetentionPolicyInput`<sup>Optional</sup> <a name="RetentionPolicyInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.property.retentionPolicyInput"></a>

```go
func RetentionPolicyInput() MonitorDiagnosticSettingLogRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicy">MonitorDiagnosticSettingLogRetentionPolicy</a>

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `CategoryGroup`<sup>Required</sup> <a name="CategoryGroup" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.property.categoryGroup"></a>

```go
func CategoryGroup() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorDiagnosticSettingLogRetentionPolicyOutputReference <a name="MonitorDiagnosticSettingLogRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitordiagnosticsetting"

monitordiagnosticsetting.NewMonitorDiagnosticSettingLogRetentionPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorDiagnosticSettingLogRetentionPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.resetDays">ResetDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDays` <a name="ResetDays" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.resetDays"></a>

```go
func ResetDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.property.daysInput">DaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.property.days">Days</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicy">MonitorDiagnosticSettingLogRetentionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.property.daysInput"></a>

```go
func DaysInput() *f64
```

- *Type:* *f64

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.property.days"></a>

```go
func Days() *f64
```

- *Type:* *f64

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitorDiagnosticSettingLogRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingLogRetentionPolicy">MonitorDiagnosticSettingLogRetentionPolicy</a>

---


### MonitorDiagnosticSettingMetricList <a name="MonitorDiagnosticSettingMetricList" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitordiagnosticsetting"

monitordiagnosticsetting.NewMonitorDiagnosticSettingMetricList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MonitorDiagnosticSettingMetricList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.get"></a>

```go
func Get(index *f64) MonitorDiagnosticSettingMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorDiagnosticSettingMetricOutputReference <a name="MonitorDiagnosticSettingMetricOutputReference" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitordiagnosticsetting"

monitordiagnosticsetting.NewMonitorDiagnosticSettingMetricOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MonitorDiagnosticSettingMetricOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.putRetentionPolicy">PutRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.resetRetentionPolicy">ResetRetentionPolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRetentionPolicy` <a name="PutRetentionPolicy" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.putRetentionPolicy"></a>

```go
func PutRetentionPolicy(value MonitorDiagnosticSettingMetricRetentionPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.putRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy">MonitorDiagnosticSettingMetricRetentionPolicy</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetRetentionPolicy` <a name="ResetRetentionPolicy" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.resetRetentionPolicy"></a>

```go
func ResetRetentionPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference">MonitorDiagnosticSettingMetricRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.categoryInput">CategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.retentionPolicyInput">RetentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy">MonitorDiagnosticSettingMetricRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RetentionPolicy`<sup>Required</sup> <a name="RetentionPolicy" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.retentionPolicy"></a>

```go
func RetentionPolicy() MonitorDiagnosticSettingMetricRetentionPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference">MonitorDiagnosticSettingMetricRetentionPolicyOutputReference</a>

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.categoryInput"></a>

```go
func CategoryInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RetentionPolicyInput`<sup>Optional</sup> <a name="RetentionPolicyInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.retentionPolicyInput"></a>

```go
func RetentionPolicyInput() MonitorDiagnosticSettingMetricRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy">MonitorDiagnosticSettingMetricRetentionPolicy</a>

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorDiagnosticSettingMetricRetentionPolicyOutputReference <a name="MonitorDiagnosticSettingMetricRetentionPolicyOutputReference" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitordiagnosticsetting"

monitordiagnosticsetting.NewMonitorDiagnosticSettingMetricRetentionPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorDiagnosticSettingMetricRetentionPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.resetDays">ResetDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDays` <a name="ResetDays" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.resetDays"></a>

```go
func ResetDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.daysInput">DaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.days">Days</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy">MonitorDiagnosticSettingMetricRetentionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.daysInput"></a>

```go
func DaysInput() *f64
```

- *Type:* *f64

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.days"></a>

```go
func Days() *f64
```

- *Type:* *f64

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitorDiagnosticSettingMetricRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingMetricRetentionPolicy">MonitorDiagnosticSettingMetricRetentionPolicy</a>

---


### MonitorDiagnosticSettingTimeoutsOutputReference <a name="MonitorDiagnosticSettingTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/monitordiagnosticsetting"

monitordiagnosticsetting.NewMonitorDiagnosticSettingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorDiagnosticSettingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorDiagnosticSetting.MonitorDiagnosticSettingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



