# `sentinelAlertRuleAnomalyBuiltIn` Submodule <a name="`sentinelAlertRuleAnomalyBuiltIn` Submodule" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelAlertRuleAnomalyBuiltIn <a name="SentinelAlertRuleAnomalyBuiltIn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/sentinel_alert_rule_anomaly_built_in azurerm_sentinel_alert_rule_anomaly_built_in}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalybuiltin"

sentinelalertruleanomalybuiltin.NewSentinelAlertRuleAnomalyBuiltIn(scope Construct, id *string, config SentinelAlertRuleAnomalyBuiltInConfig) SentinelAlertRuleAnomalyBuiltIn
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig">SentinelAlertRuleAnomalyBuiltInConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig">SentinelAlertRuleAnomalyBuiltInConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.putTimeouts"></a>

```go
func PutTimeouts(value SentinelAlertRuleAnomalyBuiltInTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeouts">SentinelAlertRuleAnomalyBuiltInTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.resetName"></a>

```go
func ResetName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SentinelAlertRuleAnomalyBuiltIn resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalybuiltin"

sentinelalertruleanomalybuiltin.SentinelAlertRuleAnomalyBuiltIn_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalybuiltin"

sentinelalertruleanomalybuiltin.SentinelAlertRuleAnomalyBuiltIn_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalybuiltin"

sentinelalertruleanomalybuiltin.SentinelAlertRuleAnomalyBuiltIn_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalybuiltin"

sentinelalertruleanomalybuiltin.SentinelAlertRuleAnomalyBuiltIn_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SentinelAlertRuleAnomalyBuiltIn resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SentinelAlertRuleAnomalyBuiltIn to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SentinelAlertRuleAnomalyBuiltIn that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/sentinel_alert_rule_anomaly_built_in#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SentinelAlertRuleAnomalyBuiltIn to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.anomalySettingsVersion">AnomalySettingsVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.anomalyVersion">AnomalyVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.frequency">Frequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.multiSelectObservation">MultiSelectObservation</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList">SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.prioritizedExcludeObservation">PrioritizedExcludeObservation</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList">SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.requiredDataConnector">RequiredDataConnector</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList">SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.settingsDefinitionId">SettingsDefinitionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.singleSelectObservation">SingleSelectObservation</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList">SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.tactics">Tactics</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.techniques">Techniques</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.thresholdObservation">ThresholdObservation</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList">SentinelAlertRuleAnomalyBuiltInThresholdObservationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference">SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.logAnalyticsWorkspaceIdInput">LogAnalyticsWorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AnomalySettingsVersion`<sup>Required</sup> <a name="AnomalySettingsVersion" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.anomalySettingsVersion"></a>

```go
func AnomalySettingsVersion() *f64
```

- *Type:* *f64

---

##### `AnomalyVersion`<sup>Required</sup> <a name="AnomalyVersion" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.anomalyVersion"></a>

```go
func AnomalyVersion() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.frequency"></a>

```go
func Frequency() *string
```

- *Type:* *string

---

##### `MultiSelectObservation`<sup>Required</sup> <a name="MultiSelectObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.multiSelectObservation"></a>

```go
func MultiSelectObservation() SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList">SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList</a>

---

##### `PrioritizedExcludeObservation`<sup>Required</sup> <a name="PrioritizedExcludeObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.prioritizedExcludeObservation"></a>

```go
func PrioritizedExcludeObservation() SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList">SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList</a>

---

##### `RequiredDataConnector`<sup>Required</sup> <a name="RequiredDataConnector" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.requiredDataConnector"></a>

```go
func RequiredDataConnector() SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList">SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList</a>

---

##### `SettingsDefinitionId`<sup>Required</sup> <a name="SettingsDefinitionId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.settingsDefinitionId"></a>

```go
func SettingsDefinitionId() *string
```

- *Type:* *string

---

##### `SingleSelectObservation`<sup>Required</sup> <a name="SingleSelectObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.singleSelectObservation"></a>

```go
func SingleSelectObservation() SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList">SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList</a>

---

##### `Tactics`<sup>Required</sup> <a name="Tactics" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.tactics"></a>

```go
func Tactics() *[]*string
```

- *Type:* *[]*string

---

##### `Techniques`<sup>Required</sup> <a name="Techniques" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.techniques"></a>

```go
func Techniques() *[]*string
```

- *Type:* *[]*string

---

##### `ThresholdObservation`<sup>Required</sup> <a name="ThresholdObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.thresholdObservation"></a>

```go
func ThresholdObservation() SentinelAlertRuleAnomalyBuiltInThresholdObservationList
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList">SentinelAlertRuleAnomalyBuiltInThresholdObservationList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.timeouts"></a>

```go
func Timeouts() SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference">SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogAnalyticsWorkspaceIdInput`<sup>Optional</sup> <a name="LogAnalyticsWorkspaceIdInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.logAnalyticsWorkspaceIdInput"></a>

```go
func LogAnalyticsWorkspaceIdInput() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.logAnalyticsWorkspaceId"></a>

```go
func LogAnalyticsWorkspaceId() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltIn.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelAlertRuleAnomalyBuiltInConfig <a name="SentinelAlertRuleAnomalyBuiltInConfig" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalybuiltin"

&sentinelalertruleanomalybuiltin.SentinelAlertRuleAnomalyBuiltInConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Enabled: interface{},
	LogAnalyticsWorkspaceId: *string,
	Mode: *string,
	DisplayName: *string,
	Id: *string,
	Name: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/sentinel_alert_rule_anomaly_built_in#enabled SentinelAlertRuleAnomalyBuiltIn#enabled}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.logAnalyticsWorkspaceId">LogAnalyticsWorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/sentinel_alert_rule_anomaly_built_in#log_analytics_workspace_id SentinelAlertRuleAnomalyBuiltIn#log_analytics_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/sentinel_alert_rule_anomaly_built_in#mode SentinelAlertRuleAnomalyBuiltIn#mode}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/sentinel_alert_rule_anomaly_built_in#display_name SentinelAlertRuleAnomalyBuiltIn#display_name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/sentinel_alert_rule_anomaly_built_in#id SentinelAlertRuleAnomalyBuiltIn#id}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/sentinel_alert_rule_anomaly_built_in#name SentinelAlertRuleAnomalyBuiltIn#name}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeouts">SentinelAlertRuleAnomalyBuiltInTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/sentinel_alert_rule_anomaly_built_in#enabled SentinelAlertRuleAnomalyBuiltIn#enabled}.

---

##### `LogAnalyticsWorkspaceId`<sup>Required</sup> <a name="LogAnalyticsWorkspaceId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.logAnalyticsWorkspaceId"></a>

```go
LogAnalyticsWorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/sentinel_alert_rule_anomaly_built_in#log_analytics_workspace_id SentinelAlertRuleAnomalyBuiltIn#log_analytics_workspace_id}.

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/sentinel_alert_rule_anomaly_built_in#mode SentinelAlertRuleAnomalyBuiltIn#mode}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/sentinel_alert_rule_anomaly_built_in#display_name SentinelAlertRuleAnomalyBuiltIn#display_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/sentinel_alert_rule_anomaly_built_in#id SentinelAlertRuleAnomalyBuiltIn#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/sentinel_alert_rule_anomaly_built_in#name SentinelAlertRuleAnomalyBuiltIn#name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInConfig.property.timeouts"></a>

```go
Timeouts SentinelAlertRuleAnomalyBuiltInTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeouts">SentinelAlertRuleAnomalyBuiltInTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/sentinel_alert_rule_anomaly_built_in#timeouts SentinelAlertRuleAnomalyBuiltIn#timeouts}

---

### SentinelAlertRuleAnomalyBuiltInMultiSelectObservation <a name="SentinelAlertRuleAnomalyBuiltInMultiSelectObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalybuiltin"

&sentinelalertruleanomalybuiltin.SentinelAlertRuleAnomalyBuiltInMultiSelectObservation {

}
```


### SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservation <a name="SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalybuiltin"

&sentinelalertruleanomalybuiltin.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservation {

}
```


### SentinelAlertRuleAnomalyBuiltInRequiredDataConnector <a name="SentinelAlertRuleAnomalyBuiltInRequiredDataConnector" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnector.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalybuiltin"

&sentinelalertruleanomalybuiltin.SentinelAlertRuleAnomalyBuiltInRequiredDataConnector {

}
```


### SentinelAlertRuleAnomalyBuiltInSingleSelectObservation <a name="SentinelAlertRuleAnomalyBuiltInSingleSelectObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalybuiltin"

&sentinelalertruleanomalybuiltin.SentinelAlertRuleAnomalyBuiltInSingleSelectObservation {

}
```


### SentinelAlertRuleAnomalyBuiltInThresholdObservation <a name="SentinelAlertRuleAnomalyBuiltInThresholdObservation" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalybuiltin"

&sentinelalertruleanomalybuiltin.SentinelAlertRuleAnomalyBuiltInThresholdObservation {

}
```


### SentinelAlertRuleAnomalyBuiltInTimeouts <a name="SentinelAlertRuleAnomalyBuiltInTimeouts" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalybuiltin"

&sentinelalertruleanomalybuiltin.SentinelAlertRuleAnomalyBuiltInTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/sentinel_alert_rule_anomaly_built_in#create SentinelAlertRuleAnomalyBuiltIn#create}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/sentinel_alert_rule_anomaly_built_in#delete SentinelAlertRuleAnomalyBuiltIn#delete}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/sentinel_alert_rule_anomaly_built_in#read SentinelAlertRuleAnomalyBuiltIn#read}. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/sentinel_alert_rule_anomaly_built_in#update SentinelAlertRuleAnomalyBuiltIn#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/sentinel_alert_rule_anomaly_built_in#create SentinelAlertRuleAnomalyBuiltIn#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/sentinel_alert_rule_anomaly_built_in#delete SentinelAlertRuleAnomalyBuiltIn#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/sentinel_alert_rule_anomaly_built_in#read SentinelAlertRuleAnomalyBuiltIn#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.90.0/docs/resources/sentinel_alert_rule_anomaly_built_in#update SentinelAlertRuleAnomalyBuiltIn#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList <a name="SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalybuiltin"

sentinelalertruleanomalybuiltin.NewSentinelAlertRuleAnomalyBuiltInMultiSelectObservationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.get"></a>

```go
func Get(index *f64) SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference <a name="SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalybuiltin"

sentinelalertruleanomalybuiltin.NewSentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.property.supportedValues">SupportedValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservation">SentinelAlertRuleAnomalyBuiltInMultiSelectObservation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SupportedValues`<sup>Required</sup> <a name="SupportedValues" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.property.supportedValues"></a>

```go
func SupportedValues() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservationOutputReference.property.internalValue"></a>

```go
func InternalValue() SentinelAlertRuleAnomalyBuiltInMultiSelectObservation
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInMultiSelectObservation">SentinelAlertRuleAnomalyBuiltInMultiSelectObservation</a>

---


### SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList <a name="SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalybuiltin"

sentinelalertruleanomalybuiltin.NewSentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.get"></a>

```go
func Get(index *f64) SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference <a name="SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalybuiltin"

sentinelalertruleanomalybuiltin.NewSentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.property.exclude">Exclude</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.property.prioritize">Prioritize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservation">SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Exclude`<sup>Required</sup> <a name="Exclude" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.property.exclude"></a>

```go
func Exclude() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Prioritize`<sup>Required</sup> <a name="Prioritize" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.property.prioritize"></a>

```go
func Prioritize() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservationOutputReference.property.internalValue"></a>

```go
func InternalValue() SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservation
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservation">SentinelAlertRuleAnomalyBuiltInPrioritizedExcludeObservation</a>

---


### SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList <a name="SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalybuiltin"

sentinelalertruleanomalybuiltin.NewSentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.get"></a>

```go
func Get(index *f64) SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference <a name="SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalybuiltin"

sentinelalertruleanomalybuiltin.NewSentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.property.connectorId">ConnectorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.property.dataTypes">DataTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnector">SentinelAlertRuleAnomalyBuiltInRequiredDataConnector</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectorId`<sup>Required</sup> <a name="ConnectorId" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.property.connectorId"></a>

```go
func ConnectorId() *string
```

- *Type:* *string

---

##### `DataTypes`<sup>Required</sup> <a name="DataTypes" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.property.dataTypes"></a>

```go
func DataTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnectorOutputReference.property.internalValue"></a>

```go
func InternalValue() SentinelAlertRuleAnomalyBuiltInRequiredDataConnector
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInRequiredDataConnector">SentinelAlertRuleAnomalyBuiltInRequiredDataConnector</a>

---


### SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList <a name="SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalybuiltin"

sentinelalertruleanomalybuiltin.NewSentinelAlertRuleAnomalyBuiltInSingleSelectObservationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.get"></a>

```go
func Get(index *f64) SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference <a name="SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalybuiltin"

sentinelalertruleanomalybuiltin.NewSentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.property.supportedValues">SupportedValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservation">SentinelAlertRuleAnomalyBuiltInSingleSelectObservation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SupportedValues`<sup>Required</sup> <a name="SupportedValues" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.property.supportedValues"></a>

```go
func SupportedValues() *[]*string
```

- *Type:* *[]*string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservationOutputReference.property.internalValue"></a>

```go
func InternalValue() SentinelAlertRuleAnomalyBuiltInSingleSelectObservation
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInSingleSelectObservation">SentinelAlertRuleAnomalyBuiltInSingleSelectObservation</a>

---


### SentinelAlertRuleAnomalyBuiltInThresholdObservationList <a name="SentinelAlertRuleAnomalyBuiltInThresholdObservationList" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalybuiltin"

sentinelalertruleanomalybuiltin.NewSentinelAlertRuleAnomalyBuiltInThresholdObservationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SentinelAlertRuleAnomalyBuiltInThresholdObservationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.get"></a>

```go
func Get(index *f64) SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference <a name="SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalybuiltin"

sentinelalertruleanomalybuiltin.NewSentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.property.max">Max</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.property.min">Min</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservation">SentinelAlertRuleAnomalyBuiltInThresholdObservation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Max`<sup>Required</sup> <a name="Max" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.property.max"></a>

```go
func Max() *string
```

- *Type:* *string

---

##### `Min`<sup>Required</sup> <a name="Min" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.property.min"></a>

```go
func Min() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservationOutputReference.property.internalValue"></a>

```go
func InternalValue() SentinelAlertRuleAnomalyBuiltInThresholdObservation
```

- *Type:* <a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInThresholdObservation">SentinelAlertRuleAnomalyBuiltInThresholdObservation</a>

---


### SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference <a name="SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v12/sentinelalertruleanomalybuiltin"

sentinelalertruleanomalybuiltin.NewSentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.sentinelAlertRuleAnomalyBuiltIn.SentinelAlertRuleAnomalyBuiltInTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



