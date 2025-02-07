# `monitorAlertPrometheusRuleGroup` Submodule <a name="`monitorAlertPrometheusRuleGroup` Submodule" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MonitorAlertPrometheusRuleGroup <a name="MonitorAlertPrometheusRuleGroup" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group azurerm_monitor_alert_prometheus_rule_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/monitoralertprometheusrulegroup"

monitoralertprometheusrulegroup.NewMonitorAlertPrometheusRuleGroup(scope Construct, id *string, config MonitorAlertPrometheusRuleGroupConfig) MonitorAlertPrometheusRuleGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig">MonitorAlertPrometheusRuleGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig">MonitorAlertPrometheusRuleGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetClusterName">ResetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetRuleGroupEnabled">ResetRuleGroupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRule` <a name="PutRule" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.putRule"></a>

```go
func PutRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.putRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.putTimeouts"></a>

```go
func PutTimeouts(value MonitorAlertPrometheusRuleGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts">MonitorAlertPrometheusRuleGroupTimeouts</a>

---

##### `ResetClusterName` <a name="ResetClusterName" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetClusterName"></a>

```go
func ResetClusterName()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetInterval"></a>

```go
func ResetInterval()
```

##### `ResetRuleGroupEnabled` <a name="ResetRuleGroupEnabled" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetRuleGroupEnabled"></a>

```go
func ResetRuleGroupEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MonitorAlertPrometheusRuleGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/monitoralertprometheusrulegroup"

monitoralertprometheusrulegroup.MonitorAlertPrometheusRuleGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/monitoralertprometheusrulegroup"

monitoralertprometheusrulegroup.MonitorAlertPrometheusRuleGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/monitoralertprometheusrulegroup"

monitoralertprometheusrulegroup.MonitorAlertPrometheusRuleGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/monitoralertprometheusrulegroup"

monitoralertprometheusrulegroup.MonitorAlertPrometheusRuleGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MonitorAlertPrometheusRuleGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MonitorAlertPrometheusRuleGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MonitorAlertPrometheusRuleGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MonitorAlertPrometheusRuleGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList">MonitorAlertPrometheusRuleGroupRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference">MonitorAlertPrometheusRuleGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.intervalInput">IntervalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.ruleGroupEnabledInput">RuleGroupEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.ruleInput">RuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.interval">Interval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.ruleGroupEnabled">RuleGroupEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.rule"></a>

```go
func Rule() MonitorAlertPrometheusRuleGroupRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList">MonitorAlertPrometheusRuleGroupRuleList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.timeouts"></a>

```go
func Timeouts() MonitorAlertPrometheusRuleGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference">MonitorAlertPrometheusRuleGroupTimeoutsOutputReference</a>

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.intervalInput"></a>

```go
func IntervalInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `RuleGroupEnabledInput`<sup>Optional</sup> <a name="RuleGroupEnabledInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.ruleGroupEnabledInput"></a>

```go
func RuleGroupEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.ruleInput"></a>

```go
func RuleInput() interface{}
```

- *Type:* interface{}

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.interval"></a>

```go
func Interval() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `RuleGroupEnabled`<sup>Required</sup> <a name="RuleGroupEnabled" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.ruleGroupEnabled"></a>

```go
func RuleGroupEnabled() interface{}
```

- *Type:* interface{}

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MonitorAlertPrometheusRuleGroupConfig <a name="MonitorAlertPrometheusRuleGroupConfig" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/monitoralertprometheusrulegroup"

&monitoralertprometheusrulegroup.MonitorAlertPrometheusRuleGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	ResourceGroupName: *string,
	Rule: interface{},
	Scopes: *[]*string,
	ClusterName: *string,
	Description: *string,
	Id: *string,
	Interval: *string,
	RuleGroupEnabled: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#location MonitorAlertPrometheusRuleGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#name MonitorAlertPrometheusRuleGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#resource_group_name MonitorAlertPrometheusRuleGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.rule">Rule</a></code> | <code>interface{}</code> | rule block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.scopes">Scopes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#scopes MonitorAlertPrometheusRuleGroup#scopes}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.clusterName">ClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#cluster_name MonitorAlertPrometheusRuleGroup#cluster_name}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#description MonitorAlertPrometheusRuleGroup#description}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#id MonitorAlertPrometheusRuleGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.interval">Interval</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#interval MonitorAlertPrometheusRuleGroup#interval}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.ruleGroupEnabled">RuleGroupEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#rule_group_enabled MonitorAlertPrometheusRuleGroup#rule_group_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#tags MonitorAlertPrometheusRuleGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts">MonitorAlertPrometheusRuleGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#location MonitorAlertPrometheusRuleGroup#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#name MonitorAlertPrometheusRuleGroup#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#resource_group_name MonitorAlertPrometheusRuleGroup#resource_group_name}.

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.rule"></a>

```go
Rule interface{}
```

- *Type:* interface{}

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#rule MonitorAlertPrometheusRuleGroup#rule}

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#scopes MonitorAlertPrometheusRuleGroup#scopes}.

---

##### `ClusterName`<sup>Optional</sup> <a name="ClusterName" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#cluster_name MonitorAlertPrometheusRuleGroup#cluster_name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#description MonitorAlertPrometheusRuleGroup#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#id MonitorAlertPrometheusRuleGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.interval"></a>

```go
Interval *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#interval MonitorAlertPrometheusRuleGroup#interval}.

---

##### `RuleGroupEnabled`<sup>Optional</sup> <a name="RuleGroupEnabled" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.ruleGroupEnabled"></a>

```go
RuleGroupEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#rule_group_enabled MonitorAlertPrometheusRuleGroup#rule_group_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#tags MonitorAlertPrometheusRuleGroup#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupConfig.property.timeouts"></a>

```go
Timeouts MonitorAlertPrometheusRuleGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts">MonitorAlertPrometheusRuleGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#timeouts MonitorAlertPrometheusRuleGroup#timeouts}

---

### MonitorAlertPrometheusRuleGroupRule <a name="MonitorAlertPrometheusRuleGroupRule" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/monitoralertprometheusrulegroup"

&monitoralertprometheusrulegroup.MonitorAlertPrometheusRuleGroupRule {
	Expression: *string,
	Action: interface{},
	Alert: *string,
	AlertResolution: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution,
	Annotations: *map[string]*string,
	Enabled: interface{},
	For: *string,
	Labels: *map[string]*string,
	Record: *string,
	Severity: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#expression MonitorAlertPrometheusRuleGroup#expression}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.action">Action</a></code> | <code>interface{}</code> | action block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.alert">Alert</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#alert MonitorAlertPrometheusRuleGroup#alert}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.alertResolution">AlertResolution</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution">MonitorAlertPrometheusRuleGroupRuleAlertResolution</a></code> | alert_resolution block. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#annotations MonitorAlertPrometheusRuleGroup#annotations}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#enabled MonitorAlertPrometheusRuleGroup#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.for">For</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#for MonitorAlertPrometheusRuleGroup#for}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#labels MonitorAlertPrometheusRuleGroup#labels}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.record">Record</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#record MonitorAlertPrometheusRuleGroup#record}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.severity">Severity</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#severity MonitorAlertPrometheusRuleGroup#severity}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#expression MonitorAlertPrometheusRuleGroup#expression}.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.action"></a>

```go
Action interface{}
```

- *Type:* interface{}

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#action MonitorAlertPrometheusRuleGroup#action}

---

##### `Alert`<sup>Optional</sup> <a name="Alert" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.alert"></a>

```go
Alert *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#alert MonitorAlertPrometheusRuleGroup#alert}.

---

##### `AlertResolution`<sup>Optional</sup> <a name="AlertResolution" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.alertResolution"></a>

```go
AlertResolution MonitorAlertPrometheusRuleGroupRuleAlertResolution
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution">MonitorAlertPrometheusRuleGroupRuleAlertResolution</a>

alert_resolution block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#alert_resolution MonitorAlertPrometheusRuleGroup#alert_resolution}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#annotations MonitorAlertPrometheusRuleGroup#annotations}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#enabled MonitorAlertPrometheusRuleGroup#enabled}.

---

##### `For`<sup>Optional</sup> <a name="For" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.for"></a>

```go
For *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#for MonitorAlertPrometheusRuleGroup#for}.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#labels MonitorAlertPrometheusRuleGroup#labels}.

---

##### `Record`<sup>Optional</sup> <a name="Record" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.record"></a>

```go
Record *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#record MonitorAlertPrometheusRuleGroup#record}.

---

##### `Severity`<sup>Optional</sup> <a name="Severity" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRule.property.severity"></a>

```go
Severity *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#severity MonitorAlertPrometheusRuleGroup#severity}.

---

### MonitorAlertPrometheusRuleGroupRuleAction <a name="MonitorAlertPrometheusRuleGroupRuleAction" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/monitoralertprometheusrulegroup"

&monitoralertprometheusrulegroup.MonitorAlertPrometheusRuleGroupRuleAction {
	ActionGroupId: *string,
	ActionProperties: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction.property.actionGroupId">ActionGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#action_group_id MonitorAlertPrometheusRuleGroup#action_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction.property.actionProperties">ActionProperties</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#action_properties MonitorAlertPrometheusRuleGroup#action_properties}. |

---

##### `ActionGroupId`<sup>Required</sup> <a name="ActionGroupId" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction.property.actionGroupId"></a>

```go
ActionGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#action_group_id MonitorAlertPrometheusRuleGroup#action_group_id}.

---

##### `ActionProperties`<sup>Optional</sup> <a name="ActionProperties" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAction.property.actionProperties"></a>

```go
ActionProperties *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#action_properties MonitorAlertPrometheusRuleGroup#action_properties}.

---

### MonitorAlertPrometheusRuleGroupRuleAlertResolution <a name="MonitorAlertPrometheusRuleGroupRuleAlertResolution" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/monitoralertprometheusrulegroup"

&monitoralertprometheusrulegroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution {
	AutoResolved: interface{},
	TimeToResolve: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution.property.autoResolved">AutoResolved</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#auto_resolved MonitorAlertPrometheusRuleGroup#auto_resolved}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution.property.timeToResolve">TimeToResolve</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#time_to_resolve MonitorAlertPrometheusRuleGroup#time_to_resolve}. |

---

##### `AutoResolved`<sup>Optional</sup> <a name="AutoResolved" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution.property.autoResolved"></a>

```go
AutoResolved interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#auto_resolved MonitorAlertPrometheusRuleGroup#auto_resolved}.

---

##### `TimeToResolve`<sup>Optional</sup> <a name="TimeToResolve" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution.property.timeToResolve"></a>

```go
TimeToResolve *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#time_to_resolve MonitorAlertPrometheusRuleGroup#time_to_resolve}.

---

### MonitorAlertPrometheusRuleGroupTimeouts <a name="MonitorAlertPrometheusRuleGroupTimeouts" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/monitoralertprometheusrulegroup"

&monitoralertprometheusrulegroup.MonitorAlertPrometheusRuleGroupTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#create MonitorAlertPrometheusRuleGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#delete MonitorAlertPrometheusRuleGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#read MonitorAlertPrometheusRuleGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#update MonitorAlertPrometheusRuleGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#create MonitorAlertPrometheusRuleGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#delete MonitorAlertPrometheusRuleGroup#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#read MonitorAlertPrometheusRuleGroup#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.18.0/docs/resources/monitor_alert_prometheus_rule_group#update MonitorAlertPrometheusRuleGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MonitorAlertPrometheusRuleGroupRuleActionList <a name="MonitorAlertPrometheusRuleGroupRuleActionList" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/monitoralertprometheusrulegroup"

monitoralertprometheusrulegroup.NewMonitorAlertPrometheusRuleGroupRuleActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MonitorAlertPrometheusRuleGroupRuleActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.get"></a>

```go
func Get(index *f64) MonitorAlertPrometheusRuleGroupRuleActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorAlertPrometheusRuleGroupRuleActionOutputReference <a name="MonitorAlertPrometheusRuleGroupRuleActionOutputReference" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/monitoralertprometheusrulegroup"

monitoralertprometheusrulegroup.NewMonitorAlertPrometheusRuleGroupRuleActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MonitorAlertPrometheusRuleGroupRuleActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.resetActionProperties">ResetActionProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActionProperties` <a name="ResetActionProperties" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.resetActionProperties"></a>

```go
func ResetActionProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.actionGroupIdInput">ActionGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.actionPropertiesInput">ActionPropertiesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.actionGroupId">ActionGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.actionProperties">ActionProperties</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionGroupIdInput`<sup>Optional</sup> <a name="ActionGroupIdInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.actionGroupIdInput"></a>

```go
func ActionGroupIdInput() *string
```

- *Type:* *string

---

##### `ActionPropertiesInput`<sup>Optional</sup> <a name="ActionPropertiesInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.actionPropertiesInput"></a>

```go
func ActionPropertiesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ActionGroupId`<sup>Required</sup> <a name="ActionGroupId" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.actionGroupId"></a>

```go
func ActionGroupId() *string
```

- *Type:* *string

---

##### `ActionProperties`<sup>Required</sup> <a name="ActionProperties" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.actionProperties"></a>

```go
func ActionProperties() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference <a name="MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/monitoralertprometheusrulegroup"

monitoralertprometheusrulegroup.NewMonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.resetAutoResolved">ResetAutoResolved</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.resetTimeToResolve">ResetTimeToResolve</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoResolved` <a name="ResetAutoResolved" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.resetAutoResolved"></a>

```go
func ResetAutoResolved()
```

##### `ResetTimeToResolve` <a name="ResetTimeToResolve" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.resetTimeToResolve"></a>

```go
func ResetTimeToResolve()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.autoResolvedInput">AutoResolvedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.timeToResolveInput">TimeToResolveInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.autoResolved">AutoResolved</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.timeToResolve">TimeToResolve</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution">MonitorAlertPrometheusRuleGroupRuleAlertResolution</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoResolvedInput`<sup>Optional</sup> <a name="AutoResolvedInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.autoResolvedInput"></a>

```go
func AutoResolvedInput() interface{}
```

- *Type:* interface{}

---

##### `TimeToResolveInput`<sup>Optional</sup> <a name="TimeToResolveInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.timeToResolveInput"></a>

```go
func TimeToResolveInput() *string
```

- *Type:* *string

---

##### `AutoResolved`<sup>Required</sup> <a name="AutoResolved" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.autoResolved"></a>

```go
func AutoResolved() interface{}
```

- *Type:* interface{}

---

##### `TimeToResolve`<sup>Required</sup> <a name="TimeToResolve" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.timeToResolve"></a>

```go
func TimeToResolve() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference.property.internalValue"></a>

```go
func InternalValue() MonitorAlertPrometheusRuleGroupRuleAlertResolution
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution">MonitorAlertPrometheusRuleGroupRuleAlertResolution</a>

---


### MonitorAlertPrometheusRuleGroupRuleList <a name="MonitorAlertPrometheusRuleGroupRuleList" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/monitoralertprometheusrulegroup"

monitoralertprometheusrulegroup.NewMonitorAlertPrometheusRuleGroupRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MonitorAlertPrometheusRuleGroupRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.get"></a>

```go
func Get(index *f64) MonitorAlertPrometheusRuleGroupRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorAlertPrometheusRuleGroupRuleOutputReference <a name="MonitorAlertPrometheusRuleGroupRuleOutputReference" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/monitoralertprometheusrulegroup"

monitoralertprometheusrulegroup.NewMonitorAlertPrometheusRuleGroupRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MonitorAlertPrometheusRuleGroupRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.putAlertResolution">PutAlertResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetAlert">ResetAlert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetAlertResolution">ResetAlertResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetFor">ResetFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetRecord">ResetRecord</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetSeverity">ResetSeverity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.putAction"></a>

```go
func PutAction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.putAction.parameter.value"></a>

- *Type:* interface{}

---

##### `PutAlertResolution` <a name="PutAlertResolution" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.putAlertResolution"></a>

```go
func PutAlertResolution(value MonitorAlertPrometheusRuleGroupRuleAlertResolution)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.putAlertResolution.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution">MonitorAlertPrometheusRuleGroupRuleAlertResolution</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetAlert` <a name="ResetAlert" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetAlert"></a>

```go
func ResetAlert()
```

##### `ResetAlertResolution` <a name="ResetAlertResolution" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetAlertResolution"></a>

```go
func ResetAlertResolution()
```

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetAnnotations"></a>

```go
func ResetAnnotations()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetFor` <a name="ResetFor" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetFor"></a>

```go
func ResetFor()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetRecord` <a name="ResetRecord" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetRecord"></a>

```go
func ResetRecord()
```

##### `ResetSeverity` <a name="ResetSeverity" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.resetSeverity"></a>

```go
func ResetSeverity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.action">Action</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList">MonitorAlertPrometheusRuleGroupRuleActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.alertResolution">AlertResolution</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference">MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.actionInput">ActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.alertInput">AlertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.alertResolutionInput">AlertResolutionInput</a></code> | <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution">MonitorAlertPrometheusRuleGroupRuleAlertResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.forInput">ForInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.recordInput">RecordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.severityInput">SeverityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.alert">Alert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.for">For</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.record">Record</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.severity">Severity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.action"></a>

```go
func Action() MonitorAlertPrometheusRuleGroupRuleActionList
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleActionList">MonitorAlertPrometheusRuleGroupRuleActionList</a>

---

##### `AlertResolution`<sup>Required</sup> <a name="AlertResolution" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.alertResolution"></a>

```go
func AlertResolution() MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference">MonitorAlertPrometheusRuleGroupRuleAlertResolutionOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.actionInput"></a>

```go
func ActionInput() interface{}
```

- *Type:* interface{}

---

##### `AlertInput`<sup>Optional</sup> <a name="AlertInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.alertInput"></a>

```go
func AlertInput() *string
```

- *Type:* *string

---

##### `AlertResolutionInput`<sup>Optional</sup> <a name="AlertResolutionInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.alertResolutionInput"></a>

```go
func AlertResolutionInput() MonitorAlertPrometheusRuleGroupRuleAlertResolution
```

- *Type:* <a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleAlertResolution">MonitorAlertPrometheusRuleGroupRuleAlertResolution</a>

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `ForInput`<sup>Optional</sup> <a name="ForInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.forInput"></a>

```go
func ForInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RecordInput`<sup>Optional</sup> <a name="RecordInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.recordInput"></a>

```go
func RecordInput() *string
```

- *Type:* *string

---

##### `SeverityInput`<sup>Optional</sup> <a name="SeverityInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.severityInput"></a>

```go
func SeverityInput() *f64
```

- *Type:* *f64

---

##### `Alert`<sup>Required</sup> <a name="Alert" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.alert"></a>

```go
func Alert() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `For`<sup>Required</sup> <a name="For" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.for"></a>

```go
func For() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Record`<sup>Required</sup> <a name="Record" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.record"></a>

```go
func Record() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.severity"></a>

```go
func Severity() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MonitorAlertPrometheusRuleGroupTimeoutsOutputReference <a name="MonitorAlertPrometheusRuleGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/monitoralertprometheusrulegroup"

monitoralertprometheusrulegroup.NewMonitorAlertPrometheusRuleGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MonitorAlertPrometheusRuleGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.monitorAlertPrometheusRuleGroup.MonitorAlertPrometheusRuleGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



