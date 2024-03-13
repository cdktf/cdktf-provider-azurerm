# `sentinelAlertRuleAnomalyDuplicate` Submodule <a name="`sentinelAlertRuleAnomalyDuplicate` Submodule" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelAlertRuleAnomalyDuplicate <a name="SentinelAlertRuleAnomalyDuplicate" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate azurerm_sentinel_alert_rule_anomaly_duplicate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalyduplicate"

sentinelalertruleanomalyduplicate.NewSentinelAlertRuleAnomalyDuplicate(scope Construct, id *string, config SentinelAlertRuleAnomalyDuplicateConfig) SentinelAlertRuleAnomalyDuplicate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig">SentinelAlertRuleAnomalyDuplicateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig">SentinelAlertRuleAnomalyDuplicateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putMultiSelectObservation">PutMultiSelectObservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putPrioritizedExcludeObservation">PutPrioritizedExcludeObservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putSingleSelectObservation">PutSingleSelectObservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putThresholdObservation">PutThresholdObservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetMultiSelectObservation">ResetMultiSelectObservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetPrioritizedExcludeObservation">ResetPrioritizedExcludeObservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetSingleSelectObservation">ResetSingleSelectObservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetThresholdObservation">ResetThresholdObservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMultiSelectObservation` <a name="PutMultiSelectObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putMultiSelectObservation"></a>

```go
func PutMultiSelectObservation(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putMultiSelectObservation.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPrioritizedExcludeObservation` <a name="PutPrioritizedExcludeObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putPrioritizedExcludeObservation"></a>

```go
func PutPrioritizedExcludeObservation(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putPrioritizedExcludeObservation.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSingleSelectObservation` <a name="PutSingleSelectObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putSingleSelectObservation"></a>

```go
func PutSingleSelectObservation(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putSingleSelectObservation.parameter.value"></a>

- *Type:* interface{}

---

##### `PutThresholdObservation` <a name="PutThresholdObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putThresholdObservation"></a>

```go
func PutThresholdObservation(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putThresholdObservation.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putTimeouts"></a>

```go
func PutTimeouts(value SentinelAlertRuleAnomalyDuplicateTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts">SentinelAlertRuleAnomalyDuplicateTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetId"></a>

```go
func ResetId()
```

##### `ResetMultiSelectObservation` <a name="ResetMultiSelectObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetMultiSelectObservation"></a>

```go
func ResetMultiSelectObservation()
```

##### `ResetPrioritizedExcludeObservation` <a name="ResetPrioritizedExcludeObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetPrioritizedExcludeObservation"></a>

```go
func ResetPrioritizedExcludeObservation()
```

##### `ResetSingleSelectObservation` <a name="ResetSingleSelectObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetSingleSelectObservation"></a>

```go
func ResetSingleSelectObservation()
```

##### `ResetThresholdObservation` <a name="ResetThresholdObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetThresholdObservation"></a>

```go
func ResetThresholdObservation()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SentinelAlertRuleAnomalyDuplicate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalyduplicate"

sentinelalertruleanomalyduplicate.SentinelAlertRuleAnomalyDuplicate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalyduplicate"

sentinelalertruleanomalyduplicate.SentinelAlertRuleAnomalyDuplicate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalyduplicate"

sentinelalertruleanomalyduplicate.SentinelAlertRuleAnomalyDuplicate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalyduplicate"

sentinelalertruleanomalyduplicate.SentinelAlertRuleAnomalyDuplicate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SentinelAlertRuleAnomalyDuplicate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SentinelAlertRuleAnomalyDuplicate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SentinelAlertRuleAnomalyDuplicate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SentinelAlertRuleAnomalyDuplicate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.anomalySettingsVersion">AnomalySettingsVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.anomalyVersion">AnomalyVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.frequency">Frequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.isDefaultSettings">IsDefaultSettings</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.multiSelectObservation">MultiSelectObservation</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList">SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.prioritizedExcludeObservation">PrioritizedExcludeObservation</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList">SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.requiredDataConnector">RequiredDataConnector</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList">SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.settingsDefinitionId">SettingsDefinitionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.singleSelectObservation">SingleSelectObservation</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList">SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.tactics">Tactics</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.techniques">Techniques</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.thresholdObservation">ThresholdObservation</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList">SentinelAlertRuleAnomalyDuplicateThresholdObservationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference">SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.builtInRuleIdInput">BuiltInRuleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.multiSelectObservationInput">MultiSelectObservationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.prioritizedExcludeObservationInput">PrioritizedExcludeObservationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.singleSelectObservationInput">SingleSelectObservationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.thresholdObservationInput">ThresholdObservationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.builtInRuleId">BuiltInRuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AnomalySettingsVersion`<sup>Required</sup> <a name="AnomalySettingsVersion" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.anomalySettingsVersion"></a>

```go
func AnomalySettingsVersion() *f64
```

- *Type:* *f64

---

##### `AnomalyVersion`<sup>Required</sup> <a name="AnomalyVersion" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.anomalyVersion"></a>

```go
func AnomalyVersion() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.frequency"></a>

```go
func Frequency() *string
```

- *Type:* *string

---

##### `IsDefaultSettings`<sup>Required</sup> <a name="IsDefaultSettings" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.isDefaultSettings"></a>

```go
func IsDefaultSettings() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MultiSelectObservation`<sup>Required</sup> <a name="MultiSelectObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.multiSelectObservation"></a>

```go
func MultiSelectObservation() SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList">SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrioritizedExcludeObservation`<sup>Required</sup> <a name="PrioritizedExcludeObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.prioritizedExcludeObservation"></a>

```go
func PrioritizedExcludeObservation() SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList">SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList</a>

---

##### `RequiredDataConnector`<sup>Required</sup> <a name="RequiredDataConnector" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.requiredDataConnector"></a>

```go
func RequiredDataConnector() SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList">SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList</a>

---

##### `SettingsDefinitionId`<sup>Required</sup> <a name="SettingsDefinitionId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.settingsDefinitionId"></a>

```go
func SettingsDefinitionId() *string
```

- *Type:* *string

---

##### `SingleSelectObservation`<sup>Required</sup> <a name="SingleSelectObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.singleSelectObservation"></a>

```go
func SingleSelectObservation() SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList">SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList</a>

---

##### `Tactics`<sup>Required</sup> <a name="Tactics" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.tactics"></a>

```go
func Tactics() *[]*string
```

- *Type:* *[]*string

---

##### `Techniques`<sup>Required</sup> <a name="Techniques" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.techniques"></a>

```go
func Techniques() *[]*string
```

- *Type:* *[]*string

---

##### `ThresholdObservation`<sup>Required</sup> <a name="ThresholdObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.thresholdObservation"></a>

```go
func ThresholdObservation() SentinelAlertRuleAnomalyDuplicateThresholdObservationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList">SentinelAlertRuleAnomalyDuplicateThresholdObservationList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.timeouts"></a>

```go
func Timeouts() SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference">SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference</a>

---

##### `BuiltInRuleIdInput`<sup>Optional</sup> <a name="BuiltInRuleIdInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.builtInRuleIdInput"></a>

```go
func BuiltInRuleIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.logAnalyticsWorkspaceIdInput"></a>

```go
func LogAnalyticsWorkspaceIdInput() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `MultiSelectObservationInput`<sup>Optional</sup> <a name="MultiSelectObservationInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.multiSelectObservationInput"></a>

```go
func MultiSelectObservationInput() interface{}
```

- *Type:* interface{}

---

##### `PrioritizedExcludeObservationInput`<sup>Optional</sup> <a name="PrioritizedExcludeObservationInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.prioritizedExcludeObservationInput"></a>

```go
func PrioritizedExcludeObservationInput() interface{}
```

- *Type:* interface{}

---

##### `SingleSelectObservationInput`<sup>Optional</sup> <a name="SingleSelectObservationInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.singleSelectObservationInput"></a>

```go
func SingleSelectObservationInput() interface{}
```

- *Type:* interface{}

---

##### `ThresholdObservationInput`<sup>Optional</sup> <a name="ThresholdObservationInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.thresholdObservationInput"></a>

```go
func ThresholdObservationInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BuiltInRuleId`<sup>Required</sup> <a name="BuiltInRuleId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.builtInRuleId"></a>

```go
func BuiltInRuleId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.logAnalyticsWorkspaceId"></a>

```go
func LogAnalyticsWorkspaceId() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelAlertRuleAnomalyDuplicateConfig <a name="SentinelAlertRuleAnomalyDuplicateConfig" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalyduplicate"

&sentinelalertruleanomalyduplicate.SentinelAlertRuleAnomalyDuplicateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BuiltInRuleId: *string,
	DisplayName: *string,
	Enabled: interface{},
	LogAnalyticsWorkspaceId: *string,
	Mode: *string,
	Id: *string,
	MultiSelectObservation: interface{},
	PrioritizedExcludeObservation: interface{},
	SingleSelectObservation: interface{},
	ThresholdObservation: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.builtInRuleId">BuiltInRuleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#built_in_rule_id SentinelAlertRuleAnomalyDuplicate#built_in_rule_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#display_name SentinelAlertRuleAnomalyDuplicate#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#enabled SentinelAlertRuleAnomalyDuplicate#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#log_analytics_workspace_id SentinelAlertRuleAnomalyDuplicate#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#mode SentinelAlertRuleAnomalyDuplicate#mode}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#id SentinelAlertRuleAnomalyDuplicate#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.multiSelectObservation">MultiSelectObservation</a></code> | <code>interface{}</code> | multi_select_observation block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.prioritizedExcludeObservation">PrioritizedExcludeObservation</a></code> | <code>interface{}</code> | prioritized_exclude_observation block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.singleSelectObservation">SingleSelectObservation</a></code> | <code>interface{}</code> | single_select_observation block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.thresholdObservation">ThresholdObservation</a></code> | <code>interface{}</code> | threshold_observation block. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts">SentinelAlertRuleAnomalyDuplicateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BuiltInRuleId`<sup>Required</sup> <a name="BuiltInRuleId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.builtInRuleId"></a>

```go
BuiltInRuleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#built_in_rule_id SentinelAlertRuleAnomalyDuplicate#built_in_rule_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#display_name SentinelAlertRuleAnomalyDuplicate#display_name}.

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#enabled SentinelAlertRuleAnomalyDuplicate#enabled}.

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.logAnalyticsWorkspaceId"></a>

```go
LogAnalyticsWorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#log_analytics_workspace_id SentinelAlertRuleAnomalyDuplicate#log_analytics_workspace_id}.

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#mode SentinelAlertRuleAnomalyDuplicate#mode}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#id SentinelAlertRuleAnomalyDuplicate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MultiSelectObservation`<sup>Optional</sup> <a name="MultiSelectObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.multiSelectObservation"></a>

```go
MultiSelectObservation interface{}
```

- *Type:* interface{}

multi_select_observation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#multi_select_observation SentinelAlertRuleAnomalyDuplicate#multi_select_observation}

---

##### `PrioritizedExcludeObservation`<sup>Optional</sup> <a name="PrioritizedExcludeObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.prioritizedExcludeObservation"></a>

```go
PrioritizedExcludeObservation interface{}
```

- *Type:* interface{}

prioritized_exclude_observation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#prioritized_exclude_observation SentinelAlertRuleAnomalyDuplicate#prioritized_exclude_observation}

---

##### `SingleSelectObservation`<sup>Optional</sup> <a name="SingleSelectObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.singleSelectObservation"></a>

```go
SingleSelectObservation interface{}
```

- *Type:* interface{}

single_select_observation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#single_select_observation SentinelAlertRuleAnomalyDuplicate#single_select_observation}

---

##### `ThresholdObservation`<sup>Optional</sup> <a name="ThresholdObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.thresholdObservation"></a>

```go
ThresholdObservation interface{}
```

- *Type:* interface{}

threshold_observation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#threshold_observation SentinelAlertRuleAnomalyDuplicate#threshold_observation}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateConfig.property.timeouts"></a>

```go
Timeouts SentinelAlertRuleAnomalyDuplicateTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts">SentinelAlertRuleAnomalyDuplicateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#timeouts SentinelAlertRuleAnomalyDuplicate#timeouts}

---

### SentinelAlertRuleAnomalyDuplicateMultiSelectObservation <a name="SentinelAlertRuleAnomalyDuplicateMultiSelectObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalyduplicate"

&sentinelalertruleanomalyduplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation {
	Name: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#name SentinelAlertRuleAnomalyDuplicate#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#values SentinelAlertRuleAnomalyDuplicate#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#name SentinelAlertRuleAnomalyDuplicate#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservation.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#values SentinelAlertRuleAnomalyDuplicate#values}.

---

### SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation <a name="SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalyduplicate"

&sentinelalertruleanomalyduplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation {
	Name: *string,
	Exclude: *string,
	Prioritize: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#name SentinelAlertRuleAnomalyDuplicate#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation.property.exclude">Exclude</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#exclude SentinelAlertRuleAnomalyDuplicate#exclude}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation.property.prioritize">Prioritize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#prioritize SentinelAlertRuleAnomalyDuplicate#prioritize}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#name SentinelAlertRuleAnomalyDuplicate#name}.

---

##### `Exclude`<sup>Optional</sup> <a name="Exclude" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation.property.exclude"></a>

```go
Exclude *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#exclude SentinelAlertRuleAnomalyDuplicate#exclude}.

---

##### `Prioritize`<sup>Optional</sup> <a name="Prioritize" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservation.property.prioritize"></a>

```go
Prioritize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#prioritize SentinelAlertRuleAnomalyDuplicate#prioritize}.

---

### SentinelAlertRuleAnomalyDuplicateRequiredDataConnector <a name="SentinelAlertRuleAnomalyDuplicateRequiredDataConnector" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalyduplicate"

&sentinelalertruleanomalyduplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnector {

}
```


### SentinelAlertRuleAnomalyDuplicateSingleSelectObservation <a name="SentinelAlertRuleAnomalyDuplicateSingleSelectObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalyduplicate"

&sentinelalertruleanomalyduplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#name SentinelAlertRuleAnomalyDuplicate#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#value SentinelAlertRuleAnomalyDuplicate#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#name SentinelAlertRuleAnomalyDuplicate#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservation.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#value SentinelAlertRuleAnomalyDuplicate#value}.

---

### SentinelAlertRuleAnomalyDuplicateThresholdObservation <a name="SentinelAlertRuleAnomalyDuplicateThresholdObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalyduplicate"

&sentinelalertruleanomalyduplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#name SentinelAlertRuleAnomalyDuplicate#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#value SentinelAlertRuleAnomalyDuplicate#value}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#name SentinelAlertRuleAnomalyDuplicate#name}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservation.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#value SentinelAlertRuleAnomalyDuplicate#value}.

---

### SentinelAlertRuleAnomalyDuplicateTimeouts <a name="SentinelAlertRuleAnomalyDuplicateTimeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalyduplicate"

&sentinelalertruleanomalyduplicate.SentinelAlertRuleAnomalyDuplicateTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#create SentinelAlertRuleAnomalyDuplicate#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#delete SentinelAlertRuleAnomalyDuplicate#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#read SentinelAlertRuleAnomalyDuplicate#read}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#update SentinelAlertRuleAnomalyDuplicate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#create SentinelAlertRuleAnomalyDuplicate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#delete SentinelAlertRuleAnomalyDuplicate#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#read SentinelAlertRuleAnomalyDuplicate#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.95.0/docs/resources/sentinel_alert_rule_anomaly_duplicate#update SentinelAlertRuleAnomalyDuplicate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList <a name="SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalyduplicate"

sentinelalertruleanomalyduplicate.NewSentinelAlertRuleAnomalyDuplicateMultiSelectObservationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.get"></a>

```go
func Get(index *f64) SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference <a name="SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalyduplicate"

sentinelalertruleanomalyduplicate.NewSentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.supportedValues">SupportedValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `SupportedValues`<sup>Required</sup> <a name="SupportedValues" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.supportedValues"></a>

```go
func SupportedValues() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateMultiSelectObservationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList <a name="SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalyduplicate"

sentinelalertruleanomalyduplicate.NewSentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.get"></a>

```go
func Get(index *f64) SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference <a name="SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalyduplicate"

sentinelalertruleanomalyduplicate.NewSentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.resetExclude">ResetExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.resetPrioritize">ResetPrioritize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExclude` <a name="ResetExclude" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.resetExclude"></a>

```go
func ResetExclude()
```

##### `ResetPrioritize` <a name="ResetPrioritize" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.resetPrioritize"></a>

```go
func ResetPrioritize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.excludeInput">ExcludeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.prioritizeInput">PrioritizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.exclude">Exclude</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.prioritize">Prioritize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExcludeInput`<sup>Optional</sup> <a name="ExcludeInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.excludeInput"></a>

```go
func ExcludeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PrioritizeInput`<sup>Optional</sup> <a name="PrioritizeInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.prioritizeInput"></a>

```go
func PrioritizeInput() *string
```

- *Type:* *string

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.exclude"></a>

```go
func Exclude() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Prioritize`<sup>Required</sup> <a name="Prioritize" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.prioritize"></a>

```go
func Prioritize() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicatePrioritizedExcludeObservationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList <a name="SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalyduplicate"

sentinelalertruleanomalyduplicate.NewSentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.get"></a>

```go
func Get(index *f64) SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference <a name="SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalyduplicate"

sentinelalertruleanomalyduplicate.NewSentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.property.connectorId">ConnectorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.property.dataTypes">DataTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnector">SentinelAlertRuleAnomalyDuplicateRequiredDataConnector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectorId`<sup>Required</sup> <a name="ConnectorId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.property.connectorId"></a>

```go
func ConnectorId() *string
```

- *Type:* *string

---

##### `DataTypes`<sup>Required</sup> <a name="DataTypes" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.property.dataTypes"></a>

```go
func DataTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnectorOutputReference.property.internalValue"></a>

```go
func InternalValue() SentinelAlertRuleAnomalyDuplicateRequiredDataConnector
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateRequiredDataConnector">SentinelAlertRuleAnomalyDuplicateRequiredDataConnector</a>

---


### SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList <a name="SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalyduplicate"

sentinelalertruleanomalyduplicate.NewSentinelAlertRuleAnomalyDuplicateSingleSelectObservationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.get"></a>

```go
func Get(index *f64) SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference <a name="SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalyduplicate"

sentinelalertruleanomalyduplicate.NewSentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.supportedValues">SupportedValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `SupportedValues`<sup>Required</sup> <a name="SupportedValues" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.supportedValues"></a>

```go
func SupportedValues() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateSingleSelectObservationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelAlertRuleAnomalyDuplicateThresholdObservationList <a name="SentinelAlertRuleAnomalyDuplicateThresholdObservationList" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalyduplicate"

sentinelalertruleanomalyduplicate.NewSentinelAlertRuleAnomalyDuplicateThresholdObservationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SentinelAlertRuleAnomalyDuplicateThresholdObservationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.get"></a>

```go
func Get(index *f64) SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference <a name="SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalyduplicate"

sentinelalertruleanomalyduplicate.NewSentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.max">Max</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.min">Min</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.max"></a>

```go
func Max() *string
```

- *Type:* *string

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.min"></a>

```go
func Min() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateThresholdObservationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference <a name="SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalyduplicate"

sentinelalertruleanomalyduplicate.NewSentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyDuplicate.SentinelAlertRuleAnomalyDuplicateTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



