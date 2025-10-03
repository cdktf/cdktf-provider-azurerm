# `sentinelAlertRuleScheduled` Submodule <a name="`sentinelAlertRuleScheduled` Submodule" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelAlertRuleScheduled <a name="SentinelAlertRuleScheduled" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled azurerm_sentinel_alert_rule_scheduled}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/sentinelalertrulescheduled"

sentinelalertrulescheduled.NewSentinelAlertRuleScheduled(scope Construct, id *string, config SentinelAlertRuleScheduledConfig) SentinelAlertRuleScheduled
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig">SentinelAlertRuleScheduledConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig">SentinelAlertRuleScheduledConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.putAlertDetailsOverride">PutAlertDetailsOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.putEntityMapping">PutEntityMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.putEventGrouping">PutEventGrouping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.putIncident">PutIncident</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.putSentinelEntityMapping">PutSentinelEntityMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetAlertDetailsOverride">ResetAlertDetailsOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetAlertRuleTemplateGuid">ResetAlertRuleTemplateGuid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetAlertRuleTemplateVersion">ResetAlertRuleTemplateVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetCustomDetails">ResetCustomDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetEntityMapping">ResetEntityMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetEventGrouping">ResetEventGrouping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetIncident">ResetIncident</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetQueryFrequency">ResetQueryFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetQueryPeriod">ResetQueryPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetSentinelEntityMapping">ResetSentinelEntityMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetSuppressionDuration">ResetSuppressionDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetSuppressionEnabled">ResetSuppressionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetTactics">ResetTactics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetTechniques">ResetTechniques</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetTriggerOperator">ResetTriggerOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetTriggerThreshold">ResetTriggerThreshold</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAlertDetailsOverride` <a name="PutAlertDetailsOverride" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.putAlertDetailsOverride"></a>

```go
func PutAlertDetailsOverride(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.putAlertDetailsOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEntityMapping` <a name="PutEntityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.putEntityMapping"></a>

```go
func PutEntityMapping(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.putEntityMapping.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEventGrouping` <a name="PutEventGrouping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.putEventGrouping"></a>

```go
func PutEventGrouping(value SentinelAlertRuleScheduledEventGrouping)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.putEventGrouping.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGrouping">SentinelAlertRuleScheduledEventGrouping</a>

---

##### `PutIncident` <a name="PutIncident" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.putIncident"></a>

```go
func PutIncident(value SentinelAlertRuleScheduledIncident)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.putIncident.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncident">SentinelAlertRuleScheduledIncident</a>

---

##### `PutSentinelEntityMapping` <a name="PutSentinelEntityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.putSentinelEntityMapping"></a>

```go
func PutSentinelEntityMapping(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.putSentinelEntityMapping.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.putTimeouts"></a>

```go
func PutTimeouts(value SentinelAlertRuleScheduledTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeouts">SentinelAlertRuleScheduledTimeouts</a>

---

##### `ResetAlertDetailsOverride` <a name="ResetAlertDetailsOverride" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetAlertDetailsOverride"></a>

```go
func ResetAlertDetailsOverride()
```

##### `ResetAlertRuleTemplateGuid` <a name="ResetAlertRuleTemplateGuid" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetAlertRuleTemplateGuid"></a>

```go
func ResetAlertRuleTemplateGuid()
```

##### `ResetAlertRuleTemplateVersion` <a name="ResetAlertRuleTemplateVersion" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetAlertRuleTemplateVersion"></a>

```go
func ResetAlertRuleTemplateVersion()
```

##### `ResetCustomDetails` <a name="ResetCustomDetails" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetCustomDetails"></a>

```go
func ResetCustomDetails()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetEntityMapping` <a name="ResetEntityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetEntityMapping"></a>

```go
func ResetEntityMapping()
```

##### `ResetEventGrouping` <a name="ResetEventGrouping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetEventGrouping"></a>

```go
func ResetEventGrouping()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetId"></a>

```go
func ResetId()
```

##### `ResetIncident` <a name="ResetIncident" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetIncident"></a>

```go
func ResetIncident()
```

##### `ResetQueryFrequency` <a name="ResetQueryFrequency" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetQueryFrequency"></a>

```go
func ResetQueryFrequency()
```

##### `ResetQueryPeriod` <a name="ResetQueryPeriod" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetQueryPeriod"></a>

```go
func ResetQueryPeriod()
```

##### `ResetSentinelEntityMapping` <a name="ResetSentinelEntityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetSentinelEntityMapping"></a>

```go
func ResetSentinelEntityMapping()
```

##### `ResetSuppressionDuration` <a name="ResetSuppressionDuration" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetSuppressionDuration"></a>

```go
func ResetSuppressionDuration()
```

##### `ResetSuppressionEnabled` <a name="ResetSuppressionEnabled" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetSuppressionEnabled"></a>

```go
func ResetSuppressionEnabled()
```

##### `ResetTactics` <a name="ResetTactics" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetTactics"></a>

```go
func ResetTactics()
```

##### `ResetTechniques` <a name="ResetTechniques" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetTechniques"></a>

```go
func ResetTechniques()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTriggerOperator` <a name="ResetTriggerOperator" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetTriggerOperator"></a>

```go
func ResetTriggerOperator()
```

##### `ResetTriggerThreshold` <a name="ResetTriggerThreshold" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.resetTriggerThreshold"></a>

```go
func ResetTriggerThreshold()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SentinelAlertRuleScheduled resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/sentinelalertrulescheduled"

sentinelalertrulescheduled.SentinelAlertRuleScheduled_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/sentinelalertrulescheduled"

sentinelalertrulescheduled.SentinelAlertRuleScheduled_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/sentinelalertrulescheduled"

sentinelalertrulescheduled.SentinelAlertRuleScheduled_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/sentinelalertrulescheduled"

sentinelalertrulescheduled.SentinelAlertRuleScheduled_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SentinelAlertRuleScheduled resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SentinelAlertRuleScheduled to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SentinelAlertRuleScheduled that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SentinelAlertRuleScheduled to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.alertDetailsOverride">AlertDetailsOverride</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList">SentinelAlertRuleScheduledAlertDetailsOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.entityMapping">EntityMapping</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList">SentinelAlertRuleScheduledEntityMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.eventGrouping">EventGrouping</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference">SentinelAlertRuleScheduledEventGroupingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.incident">Incident</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference">SentinelAlertRuleScheduledIncidentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.sentinelEntityMapping">SentinelEntityMapping</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList">SentinelAlertRuleScheduledSentinelEntityMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference">SentinelAlertRuleScheduledTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.alertDetailsOverrideInput">AlertDetailsOverrideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.alertRuleTemplateGuidInput">AlertRuleTemplateGuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.alertRuleTemplateVersionInput">AlertRuleTemplateVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.customDetailsInput">CustomDetailsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.entityMappingInput">EntityMappingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.eventGroupingInput">EventGroupingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGrouping">SentinelAlertRuleScheduledEventGrouping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.incidentInput">IncidentInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncident">SentinelAlertRuleScheduledIncident</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.queryFrequencyInput">QueryFrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.queryPeriodInput">QueryPeriodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.sentinelEntityMappingInput">SentinelEntityMappingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.severityInput">SeverityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.suppressionDurationInput">SuppressionDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.suppressionEnabledInput">SuppressionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.tacticsInput">TacticsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.techniquesInput">TechniquesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.triggerOperatorInput">TriggerOperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.triggerThresholdInput">TriggerThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.alertRuleTemplateGuid">AlertRuleTemplateGuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.alertRuleTemplateVersion">AlertRuleTemplateVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.customDetails">CustomDetails</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.queryFrequency">QueryFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.queryPeriod">QueryPeriod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.suppressionDuration">SuppressionDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.suppressionEnabled">SuppressionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.tactics">Tactics</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.techniques">Techniques</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.triggerOperator">TriggerOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.triggerThreshold">TriggerThreshold</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AlertDetailsOverride`<sup>Required</sup> <a name="AlertDetailsOverride" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.alertDetailsOverride"></a>

```go
func AlertDetailsOverride() SentinelAlertRuleScheduledAlertDetailsOverrideList
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList">SentinelAlertRuleScheduledAlertDetailsOverrideList</a>

---

##### `EntityMapping`<sup>Required</sup> <a name="EntityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.entityMapping"></a>

```go
func EntityMapping() SentinelAlertRuleScheduledEntityMappingList
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList">SentinelAlertRuleScheduledEntityMappingList</a>

---

##### `EventGrouping`<sup>Required</sup> <a name="EventGrouping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.eventGrouping"></a>

```go
func EventGrouping() SentinelAlertRuleScheduledEventGroupingOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference">SentinelAlertRuleScheduledEventGroupingOutputReference</a>

---

##### `Incident`<sup>Required</sup> <a name="Incident" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.incident"></a>

```go
func Incident() SentinelAlertRuleScheduledIncidentOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference">SentinelAlertRuleScheduledIncidentOutputReference</a>

---

##### `SentinelEntityMapping`<sup>Required</sup> <a name="SentinelEntityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.sentinelEntityMapping"></a>

```go
func SentinelEntityMapping() SentinelAlertRuleScheduledSentinelEntityMappingList
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList">SentinelAlertRuleScheduledSentinelEntityMappingList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.timeouts"></a>

```go
func Timeouts() SentinelAlertRuleScheduledTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference">SentinelAlertRuleScheduledTimeoutsOutputReference</a>

---

##### `AlertDetailsOverrideInput`<sup>Optional</sup> <a name="AlertDetailsOverrideInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.alertDetailsOverrideInput"></a>

```go
func AlertDetailsOverrideInput() interface{}
```

- *Type:* interface{}

---

##### `AlertRuleTemplateGuidInput`<sup>Optional</sup> <a name="AlertRuleTemplateGuidInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.alertRuleTemplateGuidInput"></a>

```go
func AlertRuleTemplateGuidInput() *string
```

- *Type:* *string

---

##### `AlertRuleTemplateVersionInput`<sup>Optional</sup> <a name="AlertRuleTemplateVersionInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.alertRuleTemplateVersionInput"></a>

```go
func AlertRuleTemplateVersionInput() *string
```

- *Type:* *string

---

##### `CustomDetailsInput`<sup>Optional</sup> <a name="CustomDetailsInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.customDetailsInput"></a>

```go
func CustomDetailsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EntityMappingInput`<sup>Optional</sup> <a name="EntityMappingInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.entityMappingInput"></a>

```go
func EntityMappingInput() interface{}
```

- *Type:* interface{}

---

##### `EventGroupingInput`<sup>Optional</sup> <a name="EventGroupingInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.eventGroupingInput"></a>

```go
func EventGroupingInput() SentinelAlertRuleScheduledEventGrouping
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGrouping">SentinelAlertRuleScheduledEventGrouping</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncidentInput`<sup>Optional</sup> <a name="IncidentInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.incidentInput"></a>

```go
func IncidentInput() SentinelAlertRuleScheduledIncident
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncident">SentinelAlertRuleScheduledIncident</a>

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.logAnalyticsWorkspaceIdInput"></a>

```go
func LogAnalyticsWorkspaceIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `QueryFrequencyInput`<sup>Optional</sup> <a name="QueryFrequencyInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.queryFrequencyInput"></a>

```go
func QueryFrequencyInput() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `QueryPeriodInput`<sup>Optional</sup> <a name="QueryPeriodInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.queryPeriodInput"></a>

```go
func QueryPeriodInput() *string
```

- *Type:* *string

---

##### `SentinelEntityMappingInput`<sup>Optional</sup> <a name="SentinelEntityMappingInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.sentinelEntityMappingInput"></a>

```go
func SentinelEntityMappingInput() interface{}
```

- *Type:* interface{}

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.severityInput"></a>

```go
func SeverityInput() *string
```

- *Type:* *string

---

##### `SuppressionDurationInput`<sup>Optional</sup> <a name="SuppressionDurationInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.suppressionDurationInput"></a>

```go
func SuppressionDurationInput() *string
```

- *Type:* *string

---

##### `SuppressionEnabledInput`<sup>Optional</sup> <a name="SuppressionEnabledInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.suppressionEnabledInput"></a>

```go
func SuppressionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TacticsInput`<sup>Optional</sup> <a name="TacticsInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.tacticsInput"></a>

```go
func TacticsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TechniquesInput`<sup>Optional</sup> <a name="TechniquesInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.techniquesInput"></a>

```go
func TechniquesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TriggerOperatorInput`<sup>Optional</sup> <a name="TriggerOperatorInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.triggerOperatorInput"></a>

```go
func TriggerOperatorInput() *string
```

- *Type:* *string

---

##### `TriggerThresholdInput`<sup>Optional</sup> <a name="TriggerThresholdInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.triggerThresholdInput"></a>

```go
func TriggerThresholdInput() *f64
```

- *Type:* *f64

---

##### `AlertRuleTemplateGuid`<sup>Required</sup> <a name="AlertRuleTemplateGuid" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.alertRuleTemplateGuid"></a>

```go
func AlertRuleTemplateGuid() *string
```

- *Type:* *string

---

##### `AlertRuleTemplateVersion`<sup>Required</sup> <a name="AlertRuleTemplateVersion" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.alertRuleTemplateVersion"></a>

```go
func AlertRuleTemplateVersion() *string
```

- *Type:* *string

---

##### `CustomDetails`<sup>Required</sup> <a name="CustomDetails" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.customDetails"></a>

```go
func CustomDetails() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.logAnalyticsWorkspaceId"></a>

```go
func LogAnalyticsWorkspaceId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `QueryFrequency`<sup>Required</sup> <a name="QueryFrequency" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.queryFrequency"></a>

```go
func QueryFrequency() *string
```

- *Type:* *string

---

##### `QueryPeriod`<sup>Required</sup> <a name="QueryPeriod" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.queryPeriod"></a>

```go
func QueryPeriod() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `SuppressionDuration`<sup>Required</sup> <a name="SuppressionDuration" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.suppressionDuration"></a>

```go
func SuppressionDuration() *string
```

- *Type:* *string

---

##### `SuppressionEnabled`<sup>Required</sup> <a name="SuppressionEnabled" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.suppressionEnabled"></a>

```go
func SuppressionEnabled() interface{}
```

- *Type:* interface{}

---

##### `Tactics`<sup>Required</sup> <a name="Tactics" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.tactics"></a>

```go
func Tactics() *[]*string
```

- *Type:* *[]*string

---

##### `Techniques`<sup>Required</sup> <a name="Techniques" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.techniques"></a>

```go
func Techniques() *[]*string
```

- *Type:* *[]*string

---

##### `TriggerOperator`<sup>Required</sup> <a name="TriggerOperator" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.triggerOperator"></a>

```go
func TriggerOperator() *string
```

- *Type:* *string

---

##### `TriggerThreshold`<sup>Required</sup> <a name="TriggerThreshold" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.triggerThreshold"></a>

```go
func TriggerThreshold() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduled.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelAlertRuleScheduledAlertDetailsOverride <a name="SentinelAlertRuleScheduledAlertDetailsOverride" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverride.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/sentinelalertrulescheduled"

&sentinelalertrulescheduled.SentinelAlertRuleScheduledAlertDetailsOverride {
	DescriptionFormat: *string,
	DisplayNameFormat: *string,
	DynamicProperty: interface{},
	SeverityColumnName: *string,
	TacticsColumnName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverride.property.descriptionFormat">DescriptionFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#description_format SentinelAlertRuleScheduled#description_format}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverride.property.displayNameFormat">DisplayNameFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#display_name_format SentinelAlertRuleScheduled#display_name_format}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverride.property.dynamicProperty">DynamicProperty</a></code> | <code>interface{}</code> | dynamic_property block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverride.property.severityColumnName">SeverityColumnName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#severity_column_name SentinelAlertRuleScheduled#severity_column_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverride.property.tacticsColumnName">TacticsColumnName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#tactics_column_name SentinelAlertRuleScheduled#tactics_column_name}. |

---

##### `DescriptionFormat`<sup>Optional</sup> <a name="DescriptionFormat" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverride.property.descriptionFormat"></a>

```go
DescriptionFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#description_format SentinelAlertRuleScheduled#description_format}.

---

##### `DisplayNameFormat`<sup>Optional</sup> <a name="DisplayNameFormat" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverride.property.displayNameFormat"></a>

```go
DisplayNameFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#display_name_format SentinelAlertRuleScheduled#display_name_format}.

---

##### `DynamicProperty`<sup>Optional</sup> <a name="DynamicProperty" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverride.property.dynamicProperty"></a>

```go
DynamicProperty interface{}
```

- *Type:* interface{}

dynamic_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#dynamic_property SentinelAlertRuleScheduled#dynamic_property}

---

##### `SeverityColumnName`<sup>Optional</sup> <a name="SeverityColumnName" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverride.property.severityColumnName"></a>

```go
SeverityColumnName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#severity_column_name SentinelAlertRuleScheduled#severity_column_name}.

---

##### `TacticsColumnName`<sup>Optional</sup> <a name="TacticsColumnName" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverride.property.tacticsColumnName"></a>

```go
TacticsColumnName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#tactics_column_name SentinelAlertRuleScheduled#tactics_column_name}.

---

### SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty <a name="SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/sentinelalertrulescheduled"

&sentinelalertrulescheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#name SentinelAlertRuleScheduled#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#value SentinelAlertRuleScheduled#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#name SentinelAlertRuleScheduled#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicProperty.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#value SentinelAlertRuleScheduled#value}.

---

### SentinelAlertRuleScheduledConfig <a name="SentinelAlertRuleScheduledConfig" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/sentinelalertrulescheduled"

&sentinelalertrulescheduled.SentinelAlertRuleScheduledConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	LogAnalyticsWorkspaceId: *string,
	Name: *string,
	Query: *string,
	Severity: *string,
	AlertDetailsOverride: interface{},
	AlertRuleTemplateGuid: *string,
	AlertRuleTemplateVersion: *string,
	CustomDetails: *map[string]*string,
	Description: *string,
	Enabled: interface{},
	EntityMapping: interface{},
	EventGrouping: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGrouping,
	Id: *string,
	Incident: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncident,
	QueryFrequency: *string,
	QueryPeriod: *string,
	SentinelEntityMapping: interface{},
	SuppressionDuration: *string,
	SuppressionEnabled: interface{},
	Tactics: *[]*string,
	Techniques: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeouts,
	TriggerOperator: *string,
	TriggerThreshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#display_name SentinelAlertRuleScheduled#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#log_analytics_workspace_id SentinelAlertRuleScheduled#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#name SentinelAlertRuleScheduled#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.query">Query</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#query SentinelAlertRuleScheduled#query}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.severity">Severity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#severity SentinelAlertRuleScheduled#severity}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.alertDetailsOverride">AlertDetailsOverride</a></code> | <code>interface{}</code> | alert_details_override block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.alertRuleTemplateGuid">AlertRuleTemplateGuid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#alert_rule_template_guid SentinelAlertRuleScheduled#alert_rule_template_guid}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.alertRuleTemplateVersion">AlertRuleTemplateVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#alert_rule_template_version SentinelAlertRuleScheduled#alert_rule_template_version}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.customDetails">CustomDetails</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#custom_details SentinelAlertRuleScheduled#custom_details}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#description SentinelAlertRuleScheduled#description}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#enabled SentinelAlertRuleScheduled#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.entityMapping">EntityMapping</a></code> | <code>interface{}</code> | entity_mapping block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.eventGrouping">EventGrouping</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGrouping">SentinelAlertRuleScheduledEventGrouping</a></code> | event_grouping block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#id SentinelAlertRuleScheduled#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.incident">Incident</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncident">SentinelAlertRuleScheduledIncident</a></code> | incident block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.queryFrequency">QueryFrequency</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#query_frequency SentinelAlertRuleScheduled#query_frequency}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.queryPeriod">QueryPeriod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#query_period SentinelAlertRuleScheduled#query_period}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.sentinelEntityMapping">SentinelEntityMapping</a></code> | <code>interface{}</code> | sentinel_entity_mapping block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.suppressionDuration">SuppressionDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#suppression_duration SentinelAlertRuleScheduled#suppression_duration}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.suppressionEnabled">SuppressionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#suppression_enabled SentinelAlertRuleScheduled#suppression_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.tactics">Tactics</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#tactics SentinelAlertRuleScheduled#tactics}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.techniques">Techniques</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#techniques SentinelAlertRuleScheduled#techniques}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeouts">SentinelAlertRuleScheduledTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.triggerOperator">TriggerOperator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#trigger_operator SentinelAlertRuleScheduled#trigger_operator}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.triggerThreshold">TriggerThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#trigger_threshold SentinelAlertRuleScheduled#trigger_threshold}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#display_name SentinelAlertRuleScheduled#display_name}.

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.logAnalyticsWorkspaceId"></a>

```go
LogAnalyticsWorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#log_analytics_workspace_id SentinelAlertRuleScheduled#log_analytics_workspace_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#name SentinelAlertRuleScheduled#name}.

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.query"></a>

```go
Query *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#query SentinelAlertRuleScheduled#query}.

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.severity"></a>

```go
Severity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#severity SentinelAlertRuleScheduled#severity}.

---

##### `AlertDetailsOverride`<sup>Optional</sup> <a name="AlertDetailsOverride" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.alertDetailsOverride"></a>

```go
AlertDetailsOverride interface{}
```

- *Type:* interface{}

alert_details_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#alert_details_override SentinelAlertRuleScheduled#alert_details_override}

---

##### `AlertRuleTemplateGuid`<sup>Optional</sup> <a name="AlertRuleTemplateGuid" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.alertRuleTemplateGuid"></a>

```go
AlertRuleTemplateGuid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#alert_rule_template_guid SentinelAlertRuleScheduled#alert_rule_template_guid}.

---

##### `AlertRuleTemplateVersion`<sup>Optional</sup> <a name="AlertRuleTemplateVersion" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.alertRuleTemplateVersion"></a>

```go
AlertRuleTemplateVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#alert_rule_template_version SentinelAlertRuleScheduled#alert_rule_template_version}.

---

##### `CustomDetails`<sup>Optional</sup> <a name="CustomDetails" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.customDetails"></a>

```go
CustomDetails *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#custom_details SentinelAlertRuleScheduled#custom_details}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#description SentinelAlertRuleScheduled#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#enabled SentinelAlertRuleScheduled#enabled}.

---

##### `EntityMapping`<sup>Optional</sup> <a name="EntityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.entityMapping"></a>

```go
EntityMapping interface{}
```

- *Type:* interface{}

entity_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#entity_mapping SentinelAlertRuleScheduled#entity_mapping}

---

##### `EventGrouping`<sup>Optional</sup> <a name="EventGrouping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.eventGrouping"></a>

```go
EventGrouping SentinelAlertRuleScheduledEventGrouping
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGrouping">SentinelAlertRuleScheduledEventGrouping</a>

event_grouping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#event_grouping SentinelAlertRuleScheduled#event_grouping}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#id SentinelAlertRuleScheduled#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Incident`<sup>Optional</sup> <a name="Incident" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.incident"></a>

```go
Incident SentinelAlertRuleScheduledIncident
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncident">SentinelAlertRuleScheduledIncident</a>

incident block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#incident SentinelAlertRuleScheduled#incident}

---

##### `QueryFrequency`<sup>Optional</sup> <a name="QueryFrequency" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.queryFrequency"></a>

```go
QueryFrequency *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#query_frequency SentinelAlertRuleScheduled#query_frequency}.

---

##### `QueryPeriod`<sup>Optional</sup> <a name="QueryPeriod" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.queryPeriod"></a>

```go
QueryPeriod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#query_period SentinelAlertRuleScheduled#query_period}.

---

##### `SentinelEntityMapping`<sup>Optional</sup> <a name="SentinelEntityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.sentinelEntityMapping"></a>

```go
SentinelEntityMapping interface{}
```

- *Type:* interface{}

sentinel_entity_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#sentinel_entity_mapping SentinelAlertRuleScheduled#sentinel_entity_mapping}

---

##### `SuppressionDuration`<sup>Optional</sup> <a name="SuppressionDuration" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.suppressionDuration"></a>

```go
SuppressionDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#suppression_duration SentinelAlertRuleScheduled#suppression_duration}.

---

##### `SuppressionEnabled`<sup>Optional</sup> <a name="SuppressionEnabled" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.suppressionEnabled"></a>

```go
SuppressionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#suppression_enabled SentinelAlertRuleScheduled#suppression_enabled}.

---

##### `Tactics`<sup>Optional</sup> <a name="Tactics" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.tactics"></a>

```go
Tactics *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#tactics SentinelAlertRuleScheduled#tactics}.

---

##### `Techniques`<sup>Optional</sup> <a name="Techniques" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.techniques"></a>

```go
Techniques *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#techniques SentinelAlertRuleScheduled#techniques}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.timeouts"></a>

```go
Timeouts SentinelAlertRuleScheduledTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeouts">SentinelAlertRuleScheduledTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#timeouts SentinelAlertRuleScheduled#timeouts}

---

##### `TriggerOperator`<sup>Optional</sup> <a name="TriggerOperator" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.triggerOperator"></a>

```go
TriggerOperator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#trigger_operator SentinelAlertRuleScheduled#trigger_operator}.

---

##### `TriggerThreshold`<sup>Optional</sup> <a name="TriggerThreshold" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledConfig.property.triggerThreshold"></a>

```go
TriggerThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#trigger_threshold SentinelAlertRuleScheduled#trigger_threshold}.

---

### SentinelAlertRuleScheduledEntityMapping <a name="SentinelAlertRuleScheduledEntityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMapping.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/sentinelalertrulescheduled"

&sentinelalertrulescheduled.SentinelAlertRuleScheduledEntityMapping {
	EntityType: *string,
	FieldMapping: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMapping.property.entityType">EntityType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#entity_type SentinelAlertRuleScheduled#entity_type}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMapping.property.fieldMapping">FieldMapping</a></code> | <code>interface{}</code> | field_mapping block. |

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMapping.property.entityType"></a>

```go
EntityType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#entity_type SentinelAlertRuleScheduled#entity_type}.

---

##### `FieldMapping`<sup>Required</sup> <a name="FieldMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMapping.property.fieldMapping"></a>

```go
FieldMapping interface{}
```

- *Type:* interface{}

field_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#field_mapping SentinelAlertRuleScheduled#field_mapping}

---

### SentinelAlertRuleScheduledEntityMappingFieldMapping <a name="SentinelAlertRuleScheduledEntityMappingFieldMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMapping.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/sentinelalertrulescheduled"

&sentinelalertrulescheduled.SentinelAlertRuleScheduledEntityMappingFieldMapping {
	ColumnName: *string,
	Identifier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMapping.property.columnName">ColumnName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#column_name SentinelAlertRuleScheduled#column_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMapping.property.identifier">Identifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#identifier SentinelAlertRuleScheduled#identifier}. |

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMapping.property.columnName"></a>

```go
ColumnName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#column_name SentinelAlertRuleScheduled#column_name}.

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMapping.property.identifier"></a>

```go
Identifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#identifier SentinelAlertRuleScheduled#identifier}.

---

### SentinelAlertRuleScheduledEventGrouping <a name="SentinelAlertRuleScheduledEventGrouping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGrouping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGrouping.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/sentinelalertrulescheduled"

&sentinelalertrulescheduled.SentinelAlertRuleScheduledEventGrouping {
	AggregationMethod: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGrouping.property.aggregationMethod">AggregationMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#aggregation_method SentinelAlertRuleScheduled#aggregation_method}. |

---

##### `AggregationMethod`<sup>Required</sup> <a name="AggregationMethod" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGrouping.property.aggregationMethod"></a>

```go
AggregationMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#aggregation_method SentinelAlertRuleScheduled#aggregation_method}.

---

### SentinelAlertRuleScheduledIncident <a name="SentinelAlertRuleScheduledIncident" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncident"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncident.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/sentinelalertrulescheduled"

&sentinelalertrulescheduled.SentinelAlertRuleScheduledIncident {
	CreateIncidentEnabled: interface{},
	Grouping: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncident.property.createIncidentEnabled">CreateIncidentEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#create_incident_enabled SentinelAlertRuleScheduled#create_incident_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncident.property.grouping">Grouping</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping">SentinelAlertRuleScheduledIncidentGrouping</a></code> | grouping block. |

---

##### `CreateIncidentEnabled`<sup>Required</sup> <a name="CreateIncidentEnabled" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncident.property.createIncidentEnabled"></a>

```go
CreateIncidentEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#create_incident_enabled SentinelAlertRuleScheduled#create_incident_enabled}.

---

##### `Grouping`<sup>Required</sup> <a name="Grouping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncident.property.grouping"></a>

```go
Grouping SentinelAlertRuleScheduledIncidentGrouping
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping">SentinelAlertRuleScheduledIncidentGrouping</a>

grouping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#grouping SentinelAlertRuleScheduled#grouping}

---

### SentinelAlertRuleScheduledIncidentGrouping <a name="SentinelAlertRuleScheduledIncidentGrouping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/sentinelalertrulescheduled"

&sentinelalertrulescheduled.SentinelAlertRuleScheduledIncidentGrouping {
	ByAlertDetails: *[]*string,
	ByCustomDetails: *[]*string,
	ByEntities: *[]*string,
	Enabled: interface{},
	EntityMatchingMethod: *string,
	LookbackDuration: *string,
	ReopenClosedIncidents: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping.property.byAlertDetails">ByAlertDetails</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#by_alert_details SentinelAlertRuleScheduled#by_alert_details}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping.property.byCustomDetails">ByCustomDetails</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#by_custom_details SentinelAlertRuleScheduled#by_custom_details}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping.property.byEntities">ByEntities</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#by_entities SentinelAlertRuleScheduled#by_entities}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#enabled SentinelAlertRuleScheduled#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping.property.entityMatchingMethod">EntityMatchingMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#entity_matching_method SentinelAlertRuleScheduled#entity_matching_method}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping.property.lookbackDuration">LookbackDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#lookback_duration SentinelAlertRuleScheduled#lookback_duration}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping.property.reopenClosedIncidents">ReopenClosedIncidents</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#reopen_closed_incidents SentinelAlertRuleScheduled#reopen_closed_incidents}. |

---

##### `ByAlertDetails`<sup>Optional</sup> <a name="ByAlertDetails" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping.property.byAlertDetails"></a>

```go
ByAlertDetails *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#by_alert_details SentinelAlertRuleScheduled#by_alert_details}.

---

##### `ByCustomDetails`<sup>Optional</sup> <a name="ByCustomDetails" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping.property.byCustomDetails"></a>

```go
ByCustomDetails *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#by_custom_details SentinelAlertRuleScheduled#by_custom_details}.

---

##### `ByEntities`<sup>Optional</sup> <a name="ByEntities" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping.property.byEntities"></a>

```go
ByEntities *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#by_entities SentinelAlertRuleScheduled#by_entities}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#enabled SentinelAlertRuleScheduled#enabled}.

---

##### `EntityMatchingMethod`<sup>Optional</sup> <a name="EntityMatchingMethod" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping.property.entityMatchingMethod"></a>

```go
EntityMatchingMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#entity_matching_method SentinelAlertRuleScheduled#entity_matching_method}.

---

##### `LookbackDuration`<sup>Optional</sup> <a name="LookbackDuration" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping.property.lookbackDuration"></a>

```go
LookbackDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#lookback_duration SentinelAlertRuleScheduled#lookback_duration}.

---

##### `ReopenClosedIncidents`<sup>Optional</sup> <a name="ReopenClosedIncidents" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping.property.reopenClosedIncidents"></a>

```go
ReopenClosedIncidents interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#reopen_closed_incidents SentinelAlertRuleScheduled#reopen_closed_incidents}.

---

### SentinelAlertRuleScheduledSentinelEntityMapping <a name="SentinelAlertRuleScheduledSentinelEntityMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMapping.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/sentinelalertrulescheduled"

&sentinelalertrulescheduled.SentinelAlertRuleScheduledSentinelEntityMapping {
	ColumnName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMapping.property.columnName">ColumnName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#column_name SentinelAlertRuleScheduled#column_name}. |

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMapping.property.columnName"></a>

```go
ColumnName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#column_name SentinelAlertRuleScheduled#column_name}.

---

### SentinelAlertRuleScheduledTimeouts <a name="SentinelAlertRuleScheduledTimeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/sentinelalertrulescheduled"

&sentinelalertrulescheduled.SentinelAlertRuleScheduledTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#create SentinelAlertRuleScheduled#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#delete SentinelAlertRuleScheduled#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#read SentinelAlertRuleScheduled#read}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#update SentinelAlertRuleScheduled#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#create SentinelAlertRuleScheduled#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#delete SentinelAlertRuleScheduled#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#read SentinelAlertRuleScheduled#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.47.0/docs/resources/sentinel_alert_rule_scheduled#update SentinelAlertRuleScheduled#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList <a name="SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/sentinelalertrulescheduled"

sentinelalertrulescheduled.NewSentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.get"></a>

```go
func Get(index *f64) SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference <a name="SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/sentinelalertrulescheduled"

sentinelalertrulescheduled.NewSentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelAlertRuleScheduledAlertDetailsOverrideList <a name="SentinelAlertRuleScheduledAlertDetailsOverrideList" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/sentinelalertrulescheduled"

sentinelalertrulescheduled.NewSentinelAlertRuleScheduledAlertDetailsOverrideList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SentinelAlertRuleScheduledAlertDetailsOverrideList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.get"></a>

```go
func Get(index *f64) SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference <a name="SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/sentinelalertrulescheduled"

sentinelalertrulescheduled.NewSentinelAlertRuleScheduledAlertDetailsOverrideOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.putDynamicProperty">PutDynamicProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.resetDescriptionFormat">ResetDescriptionFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.resetDisplayNameFormat">ResetDisplayNameFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.resetDynamicProperty">ResetDynamicProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.resetSeverityColumnName">ResetSeverityColumnName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.resetTacticsColumnName">ResetTacticsColumnName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDynamicProperty` <a name="PutDynamicProperty" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.putDynamicProperty"></a>

```go
func PutDynamicProperty(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.putDynamicProperty.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescriptionFormat` <a name="ResetDescriptionFormat" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.resetDescriptionFormat"></a>

```go
func ResetDescriptionFormat()
```

##### `ResetDisplayNameFormat` <a name="ResetDisplayNameFormat" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.resetDisplayNameFormat"></a>

```go
func ResetDisplayNameFormat()
```

##### `ResetDynamicProperty` <a name="ResetDynamicProperty" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.resetDynamicProperty"></a>

```go
func ResetDynamicProperty()
```

##### `ResetSeverityColumnName` <a name="ResetSeverityColumnName" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.resetSeverityColumnName"></a>

```go
func ResetSeverityColumnName()
```

##### `ResetTacticsColumnName` <a name="ResetTacticsColumnName" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.resetTacticsColumnName"></a>

```go
func ResetTacticsColumnName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.dynamicProperty">DynamicProperty</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList">SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.descriptionFormatInput">DescriptionFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.displayNameFormatInput">DisplayNameFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.dynamicPropertyInput">DynamicPropertyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.severityColumnNameInput">SeverityColumnNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.tacticsColumnNameInput">TacticsColumnNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.descriptionFormat">DescriptionFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.displayNameFormat">DisplayNameFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.severityColumnName">SeverityColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.tacticsColumnName">TacticsColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DynamicProperty`<sup>Required</sup> <a name="DynamicProperty" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.dynamicProperty"></a>

```go
func DynamicProperty() SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList">SentinelAlertRuleScheduledAlertDetailsOverrideDynamicPropertyList</a>

---

##### `DescriptionFormatInput`<sup>Optional</sup> <a name="DescriptionFormatInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.descriptionFormatInput"></a>

```go
func DescriptionFormatInput() *string
```

- *Type:* *string

---

##### `DisplayNameFormatInput`<sup>Optional</sup> <a name="DisplayNameFormatInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.displayNameFormatInput"></a>

```go
func DisplayNameFormatInput() *string
```

- *Type:* *string

---

##### `DynamicPropertyInput`<sup>Optional</sup> <a name="DynamicPropertyInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.dynamicPropertyInput"></a>

```go
func DynamicPropertyInput() interface{}
```

- *Type:* interface{}

---

##### `SeverityColumnNameInput`<sup>Optional</sup> <a name="SeverityColumnNameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.severityColumnNameInput"></a>

```go
func SeverityColumnNameInput() *string
```

- *Type:* *string

---

##### `TacticsColumnNameInput`<sup>Optional</sup> <a name="TacticsColumnNameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.tacticsColumnNameInput"></a>

```go
func TacticsColumnNameInput() *string
```

- *Type:* *string

---

##### `DescriptionFormat`<sup>Required</sup> <a name="DescriptionFormat" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.descriptionFormat"></a>

```go
func DescriptionFormat() *string
```

- *Type:* *string

---

##### `DisplayNameFormat`<sup>Required</sup> <a name="DisplayNameFormat" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.displayNameFormat"></a>

```go
func DisplayNameFormat() *string
```

- *Type:* *string

---

##### `SeverityColumnName`<sup>Required</sup> <a name="SeverityColumnName" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.severityColumnName"></a>

```go
func SeverityColumnName() *string
```

- *Type:* *string

---

##### `TacticsColumnName`<sup>Required</sup> <a name="TacticsColumnName" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.tacticsColumnName"></a>

```go
func TacticsColumnName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledAlertDetailsOverrideOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelAlertRuleScheduledEntityMappingFieldMappingList <a name="SentinelAlertRuleScheduledEntityMappingFieldMappingList" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/sentinelalertrulescheduled"

sentinelalertrulescheduled.NewSentinelAlertRuleScheduledEntityMappingFieldMappingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SentinelAlertRuleScheduledEntityMappingFieldMappingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.get"></a>

```go
func Get(index *f64) SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference <a name="SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/sentinelalertrulescheduled"

sentinelalertrulescheduled.NewSentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.property.columnNameInput">ColumnNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.property.columnName">ColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.property.columnNameInput"></a>

```go
func ColumnNameInput() *string
```

- *Type:* *string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.property.identifierInput"></a>

```go
func IdentifierInput() *string
```

- *Type:* *string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.property.columnName"></a>

```go
func ColumnName() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelAlertRuleScheduledEntityMappingList <a name="SentinelAlertRuleScheduledEntityMappingList" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/sentinelalertrulescheduled"

sentinelalertrulescheduled.NewSentinelAlertRuleScheduledEntityMappingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SentinelAlertRuleScheduledEntityMappingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.get"></a>

```go
func Get(index *f64) SentinelAlertRuleScheduledEntityMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelAlertRuleScheduledEntityMappingOutputReference <a name="SentinelAlertRuleScheduledEntityMappingOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/sentinelalertrulescheduled"

sentinelalertrulescheduled.NewSentinelAlertRuleScheduledEntityMappingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SentinelAlertRuleScheduledEntityMappingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.putFieldMapping">PutFieldMapping</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFieldMapping` <a name="PutFieldMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.putFieldMapping"></a>

```go
func PutFieldMapping(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.putFieldMapping.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.property.fieldMapping">FieldMapping</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList">SentinelAlertRuleScheduledEntityMappingFieldMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.property.entityTypeInput">EntityTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.property.fieldMappingInput">FieldMappingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.property.entityType">EntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldMapping`<sup>Required</sup> <a name="FieldMapping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.property.fieldMapping"></a>

```go
func FieldMapping() SentinelAlertRuleScheduledEntityMappingFieldMappingList
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingFieldMappingList">SentinelAlertRuleScheduledEntityMappingFieldMappingList</a>

---

##### `EntityTypeInput`<sup>Optional</sup> <a name="EntityTypeInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.property.entityTypeInput"></a>

```go
func EntityTypeInput() *string
```

- *Type:* *string

---

##### `FieldMappingInput`<sup>Optional</sup> <a name="FieldMappingInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.property.fieldMappingInput"></a>

```go
func FieldMappingInput() interface{}
```

- *Type:* interface{}

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.property.entityType"></a>

```go
func EntityType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEntityMappingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelAlertRuleScheduledEventGroupingOutputReference <a name="SentinelAlertRuleScheduledEventGroupingOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/sentinelalertrulescheduled"

sentinelalertrulescheduled.NewSentinelAlertRuleScheduledEventGroupingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SentinelAlertRuleScheduledEventGroupingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.property.aggregationMethodInput">AggregationMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.property.aggregationMethod">AggregationMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGrouping">SentinelAlertRuleScheduledEventGrouping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AggregationMethodInput`<sup>Optional</sup> <a name="AggregationMethodInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.property.aggregationMethodInput"></a>

```go
func AggregationMethodInput() *string
```

- *Type:* *string

---

##### `AggregationMethod`<sup>Required</sup> <a name="AggregationMethod" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.property.aggregationMethod"></a>

```go
func AggregationMethod() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGroupingOutputReference.property.internalValue"></a>

```go
func InternalValue() SentinelAlertRuleScheduledEventGrouping
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledEventGrouping">SentinelAlertRuleScheduledEventGrouping</a>

---


### SentinelAlertRuleScheduledIncidentGroupingOutputReference <a name="SentinelAlertRuleScheduledIncidentGroupingOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/sentinelalertrulescheduled"

sentinelalertrulescheduled.NewSentinelAlertRuleScheduledIncidentGroupingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SentinelAlertRuleScheduledIncidentGroupingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.resetByAlertDetails">ResetByAlertDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.resetByCustomDetails">ResetByCustomDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.resetByEntities">ResetByEntities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.resetEntityMatchingMethod">ResetEntityMatchingMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.resetLookbackDuration">ResetLookbackDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.resetReopenClosedIncidents">ResetReopenClosedIncidents</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetByAlertDetails` <a name="ResetByAlertDetails" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.resetByAlertDetails"></a>

```go
func ResetByAlertDetails()
```

##### `ResetByCustomDetails` <a name="ResetByCustomDetails" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.resetByCustomDetails"></a>

```go
func ResetByCustomDetails()
```

##### `ResetByEntities` <a name="ResetByEntities" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.resetByEntities"></a>

```go
func ResetByEntities()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetEntityMatchingMethod` <a name="ResetEntityMatchingMethod" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.resetEntityMatchingMethod"></a>

```go
func ResetEntityMatchingMethod()
```

##### `ResetLookbackDuration` <a name="ResetLookbackDuration" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.resetLookbackDuration"></a>

```go
func ResetLookbackDuration()
```

##### `ResetReopenClosedIncidents` <a name="ResetReopenClosedIncidents" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.resetReopenClosedIncidents"></a>

```go
func ResetReopenClosedIncidents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.byAlertDetailsInput">ByAlertDetailsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.byCustomDetailsInput">ByCustomDetailsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.byEntitiesInput">ByEntitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.entityMatchingMethodInput">EntityMatchingMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.lookbackDurationInput">LookbackDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.reopenClosedIncidentsInput">ReopenClosedIncidentsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.byAlertDetails">ByAlertDetails</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.byCustomDetails">ByCustomDetails</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.byEntities">ByEntities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.entityMatchingMethod">EntityMatchingMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.lookbackDuration">LookbackDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.reopenClosedIncidents">ReopenClosedIncidents</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping">SentinelAlertRuleScheduledIncidentGrouping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ByAlertDetailsInput`<sup>Optional</sup> <a name="ByAlertDetailsInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.byAlertDetailsInput"></a>

```go
func ByAlertDetailsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ByCustomDetailsInput`<sup>Optional</sup> <a name="ByCustomDetailsInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.byCustomDetailsInput"></a>

```go
func ByCustomDetailsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ByEntitiesInput`<sup>Optional</sup> <a name="ByEntitiesInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.byEntitiesInput"></a>

```go
func ByEntitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EntityMatchingMethodInput`<sup>Optional</sup> <a name="EntityMatchingMethodInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.entityMatchingMethodInput"></a>

```go
func EntityMatchingMethodInput() *string
```

- *Type:* *string

---

##### `LookbackDurationInput`<sup>Optional</sup> <a name="LookbackDurationInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.lookbackDurationInput"></a>

```go
func LookbackDurationInput() *string
```

- *Type:* *string

---

##### `ReopenClosedIncidentsInput`<sup>Optional</sup> <a name="ReopenClosedIncidentsInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.reopenClosedIncidentsInput"></a>

```go
func ReopenClosedIncidentsInput() interface{}
```

- *Type:* interface{}

---

##### `ByAlertDetails`<sup>Required</sup> <a name="ByAlertDetails" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.byAlertDetails"></a>

```go
func ByAlertDetails() *[]*string
```

- *Type:* *[]*string

---

##### `ByCustomDetails`<sup>Required</sup> <a name="ByCustomDetails" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.byCustomDetails"></a>

```go
func ByCustomDetails() *[]*string
```

- *Type:* *[]*string

---

##### `ByEntities`<sup>Required</sup> <a name="ByEntities" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.byEntities"></a>

```go
func ByEntities() *[]*string
```

- *Type:* *[]*string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `EntityMatchingMethod`<sup>Required</sup> <a name="EntityMatchingMethod" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.entityMatchingMethod"></a>

```go
func EntityMatchingMethod() *string
```

- *Type:* *string

---

##### `LookbackDuration`<sup>Required</sup> <a name="LookbackDuration" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.lookbackDuration"></a>

```go
func LookbackDuration() *string
```

- *Type:* *string

---

##### `ReopenClosedIncidents`<sup>Required</sup> <a name="ReopenClosedIncidents" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.reopenClosedIncidents"></a>

```go
func ReopenClosedIncidents() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference.property.internalValue"></a>

```go
func InternalValue() SentinelAlertRuleScheduledIncidentGrouping
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping">SentinelAlertRuleScheduledIncidentGrouping</a>

---


### SentinelAlertRuleScheduledIncidentOutputReference <a name="SentinelAlertRuleScheduledIncidentOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/sentinelalertrulescheduled"

sentinelalertrulescheduled.NewSentinelAlertRuleScheduledIncidentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SentinelAlertRuleScheduledIncidentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.putGrouping">PutGrouping</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGrouping` <a name="PutGrouping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.putGrouping"></a>

```go
func PutGrouping(value SentinelAlertRuleScheduledIncidentGrouping)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.putGrouping.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping">SentinelAlertRuleScheduledIncidentGrouping</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.property.grouping">Grouping</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference">SentinelAlertRuleScheduledIncidentGroupingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.property.createIncidentEnabledInput">CreateIncidentEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.property.groupingInput">GroupingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping">SentinelAlertRuleScheduledIncidentGrouping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.property.createIncidentEnabled">CreateIncidentEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncident">SentinelAlertRuleScheduledIncident</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Grouping`<sup>Required</sup> <a name="Grouping" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.property.grouping"></a>

```go
func Grouping() SentinelAlertRuleScheduledIncidentGroupingOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGroupingOutputReference">SentinelAlertRuleScheduledIncidentGroupingOutputReference</a>

---

##### `CreateIncidentEnabledInput`<sup>Optional</sup> <a name="CreateIncidentEnabledInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.property.createIncidentEnabledInput"></a>

```go
func CreateIncidentEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `GroupingInput`<sup>Optional</sup> <a name="GroupingInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.property.groupingInput"></a>

```go
func GroupingInput() SentinelAlertRuleScheduledIncidentGrouping
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentGrouping">SentinelAlertRuleScheduledIncidentGrouping</a>

---

##### `CreateIncidentEnabled`<sup>Required</sup> <a name="CreateIncidentEnabled" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.property.createIncidentEnabled"></a>

```go
func CreateIncidentEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncidentOutputReference.property.internalValue"></a>

```go
func InternalValue() SentinelAlertRuleScheduledIncident
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledIncident">SentinelAlertRuleScheduledIncident</a>

---


### SentinelAlertRuleScheduledSentinelEntityMappingList <a name="SentinelAlertRuleScheduledSentinelEntityMappingList" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/sentinelalertrulescheduled"

sentinelalertrulescheduled.NewSentinelAlertRuleScheduledSentinelEntityMappingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SentinelAlertRuleScheduledSentinelEntityMappingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.get"></a>

```go
func Get(index *f64) SentinelAlertRuleScheduledSentinelEntityMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelAlertRuleScheduledSentinelEntityMappingOutputReference <a name="SentinelAlertRuleScheduledSentinelEntityMappingOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/sentinelalertrulescheduled"

sentinelalertrulescheduled.NewSentinelAlertRuleScheduledSentinelEntityMappingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SentinelAlertRuleScheduledSentinelEntityMappingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.property.columnNameInput">ColumnNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.property.columnName">ColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.property.columnNameInput"></a>

```go
func ColumnNameInput() *string
```

- *Type:* *string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.property.columnName"></a>

```go
func ColumnName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledSentinelEntityMappingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelAlertRuleScheduledTimeoutsOutputReference <a name="SentinelAlertRuleScheduledTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v14/sentinelalertrulescheduled"

sentinelalertrulescheduled.NewSentinelAlertRuleScheduledTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SentinelAlertRuleScheduledTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleScheduled.SentinelAlertRuleScheduledTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



