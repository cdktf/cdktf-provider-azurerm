# `storageAccountQueueProperties` Submodule <a name="`storageAccountQueueProperties` Submodule" id="@cdktf/provider-azurerm.storageAccountQueueProperties"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageAccountQueuePropertiesA <a name="StorageAccountQueuePropertiesA" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties azurerm_storage_account_queue_properties}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/storageaccountqueueproperties"

storageaccountqueueproperties.NewStorageAccountQueuePropertiesA(scope Construct, id *string, config StorageAccountQueuePropertiesAConfig) StorageAccountQueuePropertiesA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig">StorageAccountQueuePropertiesAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig">StorageAccountQueuePropertiesAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putCorsRule">PutCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putHourMetrics">PutHourMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putLogging">PutLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putMinuteMetrics">PutMinuteMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetCorsRule">ResetCorsRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetHourMetrics">ResetHourMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetLogging">ResetLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetMinuteMetrics">ResetMinuteMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCorsRule` <a name="PutCorsRule" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putCorsRule"></a>

```go
func PutCorsRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putCorsRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutHourMetrics` <a name="PutHourMetrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putHourMetrics"></a>

```go
func PutHourMetrics(value StorageAccountQueuePropertiesHourMetricsA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putHourMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a>

---

##### `PutLogging` <a name="PutLogging" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putLogging"></a>

```go
func PutLogging(value StorageAccountQueuePropertiesLoggingA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a>

---

##### `PutMinuteMetrics` <a name="PutMinuteMetrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putMinuteMetrics"></a>

```go
func PutMinuteMetrics(value StorageAccountQueuePropertiesMinuteMetricsA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putMinuteMetrics.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putTimeouts"></a>

```go
func PutTimeouts(value StorageAccountQueuePropertiesTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a>

---

##### `ResetCorsRule` <a name="ResetCorsRule" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetCorsRule"></a>

```go
func ResetCorsRule()
```

##### `ResetHourMetrics` <a name="ResetHourMetrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetHourMetrics"></a>

```go
func ResetHourMetrics()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetId"></a>

```go
func ResetId()
```

##### `ResetLogging` <a name="ResetLogging" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetLogging"></a>

```go
func ResetLogging()
```

##### `ResetMinuteMetrics` <a name="ResetMinuteMetrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetMinuteMetrics"></a>

```go
func ResetMinuteMetrics()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StorageAccountQueuePropertiesA resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/storageaccountqueueproperties"

storageaccountqueueproperties.StorageAccountQueuePropertiesA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/storageaccountqueueproperties"

storageaccountqueueproperties.StorageAccountQueuePropertiesA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/storageaccountqueueproperties"

storageaccountqueueproperties.StorageAccountQueuePropertiesA_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/storageaccountqueueproperties"

storageaccountqueueproperties.StorageAccountQueuePropertiesA_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a StorageAccountQueuePropertiesA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StorageAccountQueuePropertiesA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StorageAccountQueuePropertiesA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the StorageAccountQueuePropertiesA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.corsRule">CorsRule</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList">StorageAccountQueuePropertiesCorsRuleAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.hourMetrics">HourMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference">StorageAccountQueuePropertiesHourMetricsAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference">StorageAccountQueuePropertiesLoggingAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.minuteMetrics">MinuteMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference">StorageAccountQueuePropertiesMinuteMetricsAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference">StorageAccountQueuePropertiesTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.corsRuleInput">CorsRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.hourMetricsInput">HourMetricsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.loggingInput">LoggingInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.minuteMetricsInput">MinuteMetricsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.storageAccountIdInput">StorageAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CorsRule`<sup>Required</sup> <a name="CorsRule" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.corsRule"></a>

```go
func CorsRule() StorageAccountQueuePropertiesCorsRuleAList
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList">StorageAccountQueuePropertiesCorsRuleAList</a>

---

##### `HourMetrics`<sup>Required</sup> <a name="HourMetrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.hourMetrics"></a>

```go
func HourMetrics() StorageAccountQueuePropertiesHourMetricsAOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference">StorageAccountQueuePropertiesHourMetricsAOutputReference</a>

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.logging"></a>

```go
func Logging() StorageAccountQueuePropertiesLoggingAOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference">StorageAccountQueuePropertiesLoggingAOutputReference</a>

---

##### `MinuteMetrics`<sup>Required</sup> <a name="MinuteMetrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.minuteMetrics"></a>

```go
func MinuteMetrics() StorageAccountQueuePropertiesMinuteMetricsAOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference">StorageAccountQueuePropertiesMinuteMetricsAOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.timeouts"></a>

```go
func Timeouts() StorageAccountQueuePropertiesTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference">StorageAccountQueuePropertiesTimeoutsOutputReference</a>

---

##### `CorsRuleInput`<sup>Optional</sup> <a name="CorsRuleInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.corsRuleInput"></a>

```go
func CorsRuleInput() interface{}
```

- *Type:* interface{}

---

##### `HourMetricsInput`<sup>Optional</sup> <a name="HourMetricsInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.hourMetricsInput"></a>

```go
func HourMetricsInput() StorageAccountQueuePropertiesHourMetricsA
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LoggingInput`<sup>Optional</sup> <a name="LoggingInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.loggingInput"></a>

```go
func LoggingInput() StorageAccountQueuePropertiesLoggingA
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a>

---

##### `MinuteMetricsInput`<sup>Optional</sup> <a name="MinuteMetricsInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.minuteMetricsInput"></a>

```go
func MinuteMetricsInput() StorageAccountQueuePropertiesMinuteMetricsA
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a>

---

##### `StorageAccountIdInput`<sup>Optional</sup> <a name="StorageAccountIdInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.storageAccountIdInput"></a>

```go
func StorageAccountIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.storageAccountId"></a>

```go
func StorageAccountId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageAccountQueuePropertiesAConfig <a name="StorageAccountQueuePropertiesAConfig" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/storageaccountqueueproperties"

&storageaccountqueueproperties.StorageAccountQueuePropertiesAConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	StorageAccountId: *string,
	CorsRule: interface{},
	HourMetrics: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA,
	Id: *string,
	Logging: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA,
	MinuteMetrics: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.storageAccountId">StorageAccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#storage_account_id StorageAccountQueuePropertiesA#storage_account_id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.corsRule">CorsRule</a></code> | <code>interface{}</code> | cors_rule block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.hourMetrics">HourMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a></code> | hour_metrics block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#id StorageAccountQueuePropertiesA#id}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.logging">Logging</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a></code> | logging block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.minuteMetrics">MinuteMetrics</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a></code> | minute_metrics block. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `StorageAccountId`<sup>Required</sup> <a name="StorageAccountId" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.storageAccountId"></a>

```go
StorageAccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#storage_account_id StorageAccountQueuePropertiesA#storage_account_id}.

---

##### `CorsRule`<sup>Optional</sup> <a name="CorsRule" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.corsRule"></a>

```go
CorsRule interface{}
```

- *Type:* interface{}

cors_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#cors_rule StorageAccountQueuePropertiesA#cors_rule}

---

##### `HourMetrics`<sup>Optional</sup> <a name="HourMetrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.hourMetrics"></a>

```go
HourMetrics StorageAccountQueuePropertiesHourMetricsA
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a>

hour_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#hour_metrics StorageAccountQueuePropertiesA#hour_metrics}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#id StorageAccountQueuePropertiesA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Logging`<sup>Optional</sup> <a name="Logging" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.logging"></a>

```go
Logging StorageAccountQueuePropertiesLoggingA
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a>

logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#logging StorageAccountQueuePropertiesA#logging}

---

##### `MinuteMetrics`<sup>Optional</sup> <a name="MinuteMetrics" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.minuteMetrics"></a>

```go
MinuteMetrics StorageAccountQueuePropertiesMinuteMetricsA
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a>

minute_metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#minute_metrics StorageAccountQueuePropertiesA#minute_metrics}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesAConfig.property.timeouts"></a>

```go
Timeouts StorageAccountQueuePropertiesTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts">StorageAccountQueuePropertiesTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#timeouts StorageAccountQueuePropertiesA#timeouts}

---

### StorageAccountQueuePropertiesCorsRuleA <a name="StorageAccountQueuePropertiesCorsRuleA" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/storageaccountqueueproperties"

&storageaccountqueueproperties.StorageAccountQueuePropertiesCorsRuleA {
	AllowedHeaders: *[]*string,
	AllowedMethods: *[]*string,
	AllowedOrigins: *[]*string,
	ExposedHeaders: *[]*string,
	MaxAgeInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.allowedHeaders">AllowedHeaders</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#allowed_headers StorageAccountQueuePropertiesA#allowed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.allowedMethods">AllowedMethods</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#allowed_methods StorageAccountQueuePropertiesA#allowed_methods}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.allowedOrigins">AllowedOrigins</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#allowed_origins StorageAccountQueuePropertiesA#allowed_origins}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.exposedHeaders">ExposedHeaders</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#exposed_headers StorageAccountQueuePropertiesA#exposed_headers}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.maxAgeInSeconds">MaxAgeInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#max_age_in_seconds StorageAccountQueuePropertiesA#max_age_in_seconds}. |

---

##### `AllowedHeaders`<sup>Required</sup> <a name="AllowedHeaders" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.allowedHeaders"></a>

```go
AllowedHeaders *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#allowed_headers StorageAccountQueuePropertiesA#allowed_headers}.

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.allowedMethods"></a>

```go
AllowedMethods *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#allowed_methods StorageAccountQueuePropertiesA#allowed_methods}.

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.allowedOrigins"></a>

```go
AllowedOrigins *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#allowed_origins StorageAccountQueuePropertiesA#allowed_origins}.

---

##### `ExposedHeaders`<sup>Required</sup> <a name="ExposedHeaders" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.exposedHeaders"></a>

```go
ExposedHeaders *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#exposed_headers StorageAccountQueuePropertiesA#exposed_headers}.

---

##### `MaxAgeInSeconds`<sup>Required</sup> <a name="MaxAgeInSeconds" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleA.property.maxAgeInSeconds"></a>

```go
MaxAgeInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#max_age_in_seconds StorageAccountQueuePropertiesA#max_age_in_seconds}.

---

### StorageAccountQueuePropertiesHourMetricsA <a name="StorageAccountQueuePropertiesHourMetricsA" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/storageaccountqueueproperties"

&storageaccountqueueproperties.StorageAccountQueuePropertiesHourMetricsA {
	Version: *string,
	IncludeApis: interface{},
	RetentionPolicyDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#version StorageAccountQueuePropertiesA#version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA.property.includeApis">IncludeApis</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#include_apis StorageAccountQueuePropertiesA#include_apis}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA.property.retentionPolicyDays">RetentionPolicyDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueuePropertiesA#retention_policy_days}. |

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#version StorageAccountQueuePropertiesA#version}.

---

##### `IncludeApis`<sup>Optional</sup> <a name="IncludeApis" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA.property.includeApis"></a>

```go
IncludeApis interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#include_apis StorageAccountQueuePropertiesA#include_apis}.

---

##### `RetentionPolicyDays`<sup>Optional</sup> <a name="RetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA.property.retentionPolicyDays"></a>

```go
RetentionPolicyDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueuePropertiesA#retention_policy_days}.

---

### StorageAccountQueuePropertiesLoggingA <a name="StorageAccountQueuePropertiesLoggingA" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/storageaccountqueueproperties"

&storageaccountqueueproperties.StorageAccountQueuePropertiesLoggingA {
	Delete: interface{},
	Read: interface{},
	Version: *string,
	Write: interface{},
	RetentionPolicyDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.delete">Delete</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#delete StorageAccountQueuePropertiesA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.read">Read</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#read StorageAccountQueuePropertiesA#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#version StorageAccountQueuePropertiesA#version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.write">Write</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#write StorageAccountQueuePropertiesA#write}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.retentionPolicyDays">RetentionPolicyDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueuePropertiesA#retention_policy_days}. |

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.delete"></a>

```go
Delete interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#delete StorageAccountQueuePropertiesA#delete}.

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.read"></a>

```go
Read interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#read StorageAccountQueuePropertiesA#read}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#version StorageAccountQueuePropertiesA#version}.

---

##### `Write`<sup>Required</sup> <a name="Write" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.write"></a>

```go
Write interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#write StorageAccountQueuePropertiesA#write}.

---

##### `RetentionPolicyDays`<sup>Optional</sup> <a name="RetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA.property.retentionPolicyDays"></a>

```go
RetentionPolicyDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueuePropertiesA#retention_policy_days}.

---

### StorageAccountQueuePropertiesMinuteMetricsA <a name="StorageAccountQueuePropertiesMinuteMetricsA" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/storageaccountqueueproperties"

&storageaccountqueueproperties.StorageAccountQueuePropertiesMinuteMetricsA {
	Version: *string,
	IncludeApis: interface{},
	RetentionPolicyDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#version StorageAccountQueuePropertiesA#version}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA.property.includeApis">IncludeApis</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#include_apis StorageAccountQueuePropertiesA#include_apis}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA.property.retentionPolicyDays">RetentionPolicyDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueuePropertiesA#retention_policy_days}. |

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#version StorageAccountQueuePropertiesA#version}.

---

##### `IncludeApis`<sup>Optional</sup> <a name="IncludeApis" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA.property.includeApis"></a>

```go
IncludeApis interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#include_apis StorageAccountQueuePropertiesA#include_apis}.

---

##### `RetentionPolicyDays`<sup>Optional</sup> <a name="RetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA.property.retentionPolicyDays"></a>

```go
RetentionPolicyDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#retention_policy_days StorageAccountQueuePropertiesA#retention_policy_days}.

---

### StorageAccountQueuePropertiesTimeouts <a name="StorageAccountQueuePropertiesTimeouts" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/storageaccountqueueproperties"

&storageaccountqueueproperties.StorageAccountQueuePropertiesTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#create StorageAccountQueuePropertiesA#create}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#delete StorageAccountQueuePropertiesA#delete}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#read StorageAccountQueuePropertiesA#read}. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#update StorageAccountQueuePropertiesA#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#create StorageAccountQueuePropertiesA#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#delete StorageAccountQueuePropertiesA#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#read StorageAccountQueuePropertiesA#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.28.0/docs/resources/storage_account_queue_properties#update StorageAccountQueuePropertiesA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageAccountQueuePropertiesCorsRuleAList <a name="StorageAccountQueuePropertiesCorsRuleAList" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/storageaccountqueueproperties"

storageaccountqueueproperties.NewStorageAccountQueuePropertiesCorsRuleAList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StorageAccountQueuePropertiesCorsRuleAList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.get"></a>

```go
func Get(index *f64) StorageAccountQueuePropertiesCorsRuleAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageAccountQueuePropertiesCorsRuleAOutputReference <a name="StorageAccountQueuePropertiesCorsRuleAOutputReference" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/storageaccountqueueproperties"

storageaccountqueueproperties.NewStorageAccountQueuePropertiesCorsRuleAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StorageAccountQueuePropertiesCorsRuleAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedHeadersInput">AllowedHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedMethodsInput">AllowedMethodsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedOriginsInput">AllowedOriginsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.exposedHeadersInput">ExposedHeadersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.maxAgeInSecondsInput">MaxAgeInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedHeaders">AllowedHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedMethods">AllowedMethods</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedOrigins">AllowedOrigins</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.exposedHeaders">ExposedHeaders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.maxAgeInSeconds">MaxAgeInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedHeadersInput`<sup>Optional</sup> <a name="AllowedHeadersInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedHeadersInput"></a>

```go
func AllowedHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedMethodsInput`<sup>Optional</sup> <a name="AllowedMethodsInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedMethodsInput"></a>

```go
func AllowedMethodsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedOriginsInput`<sup>Optional</sup> <a name="AllowedOriginsInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedOriginsInput"></a>

```go
func AllowedOriginsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExposedHeadersInput`<sup>Optional</sup> <a name="ExposedHeadersInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.exposedHeadersInput"></a>

```go
func ExposedHeadersInput() *[]*string
```

- *Type:* *[]*string

---

##### `MaxAgeInSecondsInput`<sup>Optional</sup> <a name="MaxAgeInSecondsInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.maxAgeInSecondsInput"></a>

```go
func MaxAgeInSecondsInput() *f64
```

- *Type:* *f64

---

##### `AllowedHeaders`<sup>Required</sup> <a name="AllowedHeaders" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedHeaders"></a>

```go
func AllowedHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedMethods"></a>

```go
func AllowedMethods() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.allowedOrigins"></a>

```go
func AllowedOrigins() *[]*string
```

- *Type:* *[]*string

---

##### `ExposedHeaders`<sup>Required</sup> <a name="ExposedHeaders" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.exposedHeaders"></a>

```go
func ExposedHeaders() *[]*string
```

- *Type:* *[]*string

---

##### `MaxAgeInSeconds`<sup>Required</sup> <a name="MaxAgeInSeconds" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.maxAgeInSeconds"></a>

```go
func MaxAgeInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesCorsRuleAOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StorageAccountQueuePropertiesHourMetricsAOutputReference <a name="StorageAccountQueuePropertiesHourMetricsAOutputReference" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/storageaccountqueueproperties"

storageaccountqueueproperties.NewStorageAccountQueuePropertiesHourMetricsAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageAccountQueuePropertiesHourMetricsAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.resetIncludeApis">ResetIncludeApis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.resetRetentionPolicyDays">ResetRetentionPolicyDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeApis` <a name="ResetIncludeApis" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.resetIncludeApis"></a>

```go
func ResetIncludeApis()
```

##### `ResetRetentionPolicyDays` <a name="ResetRetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.resetRetentionPolicyDays"></a>

```go
func ResetRetentionPolicyDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.includeApisInput">IncludeApisInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.retentionPolicyDaysInput">RetentionPolicyDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.includeApis">IncludeApis</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.retentionPolicyDays">RetentionPolicyDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeApisInput`<sup>Optional</sup> <a name="IncludeApisInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.includeApisInput"></a>

```go
func IncludeApisInput() interface{}
```

- *Type:* interface{}

---

##### `RetentionPolicyDaysInput`<sup>Optional</sup> <a name="RetentionPolicyDaysInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.retentionPolicyDaysInput"></a>

```go
func RetentionPolicyDaysInput() *f64
```

- *Type:* *f64

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `IncludeApis`<sup>Required</sup> <a name="IncludeApis" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.includeApis"></a>

```go
func IncludeApis() interface{}
```

- *Type:* interface{}

---

##### `RetentionPolicyDays`<sup>Required</sup> <a name="RetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.retentionPolicyDays"></a>

```go
func RetentionPolicyDays() *f64
```

- *Type:* *f64

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsAOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageAccountQueuePropertiesHourMetricsA
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesHourMetricsA">StorageAccountQueuePropertiesHourMetricsA</a>

---


### StorageAccountQueuePropertiesLoggingAOutputReference <a name="StorageAccountQueuePropertiesLoggingAOutputReference" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/storageaccountqueueproperties"

storageaccountqueueproperties.NewStorageAccountQueuePropertiesLoggingAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageAccountQueuePropertiesLoggingAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.resetRetentionPolicyDays">ResetRetentionPolicyDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRetentionPolicyDays` <a name="ResetRetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.resetRetentionPolicyDays"></a>

```go
func ResetRetentionPolicyDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.deleteInput">DeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.readInput">ReadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.retentionPolicyDaysInput">RetentionPolicyDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.writeInput">WriteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.delete">Delete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.read">Read</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.retentionPolicyDays">RetentionPolicyDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.write">Write</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.deleteInput"></a>

```go
func DeleteInput() interface{}
```

- *Type:* interface{}

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.readInput"></a>

```go
func ReadInput() interface{}
```

- *Type:* interface{}

---

##### `RetentionPolicyDaysInput`<sup>Optional</sup> <a name="RetentionPolicyDaysInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.retentionPolicyDaysInput"></a>

```go
func RetentionPolicyDaysInput() *f64
```

- *Type:* *f64

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `WriteInput`<sup>Optional</sup> <a name="WriteInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.writeInput"></a>

```go
func WriteInput() interface{}
```

- *Type:* interface{}

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.delete"></a>

```go
func Delete() interface{}
```

- *Type:* interface{}

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.read"></a>

```go
func Read() interface{}
```

- *Type:* interface{}

---

##### `RetentionPolicyDays`<sup>Required</sup> <a name="RetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.retentionPolicyDays"></a>

```go
func RetentionPolicyDays() *f64
```

- *Type:* *f64

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `Write`<sup>Required</sup> <a name="Write" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.write"></a>

```go
func Write() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingAOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageAccountQueuePropertiesLoggingA
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesLoggingA">StorageAccountQueuePropertiesLoggingA</a>

---


### StorageAccountQueuePropertiesMinuteMetricsAOutputReference <a name="StorageAccountQueuePropertiesMinuteMetricsAOutputReference" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/storageaccountqueueproperties"

storageaccountqueueproperties.NewStorageAccountQueuePropertiesMinuteMetricsAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageAccountQueuePropertiesMinuteMetricsAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.resetIncludeApis">ResetIncludeApis</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.resetRetentionPolicyDays">ResetRetentionPolicyDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIncludeApis` <a name="ResetIncludeApis" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.resetIncludeApis"></a>

```go
func ResetIncludeApis()
```

##### `ResetRetentionPolicyDays` <a name="ResetRetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.resetRetentionPolicyDays"></a>

```go
func ResetRetentionPolicyDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.includeApisInput">IncludeApisInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.retentionPolicyDaysInput">RetentionPolicyDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.includeApis">IncludeApis</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.retentionPolicyDays">RetentionPolicyDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncludeApisInput`<sup>Optional</sup> <a name="IncludeApisInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.includeApisInput"></a>

```go
func IncludeApisInput() interface{}
```

- *Type:* interface{}

---

##### `RetentionPolicyDaysInput`<sup>Optional</sup> <a name="RetentionPolicyDaysInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.retentionPolicyDaysInput"></a>

```go
func RetentionPolicyDaysInput() *f64
```

- *Type:* *f64

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `IncludeApis`<sup>Required</sup> <a name="IncludeApis" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.includeApis"></a>

```go
func IncludeApis() interface{}
```

- *Type:* interface{}

---

##### `RetentionPolicyDays`<sup>Required</sup> <a name="RetentionPolicyDays" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.retentionPolicyDays"></a>

```go
func RetentionPolicyDays() *f64
```

- *Type:* *f64

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsAOutputReference.property.internalValue"></a>

```go
func InternalValue() StorageAccountQueuePropertiesMinuteMetricsA
```

- *Type:* <a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesMinuteMetricsA">StorageAccountQueuePropertiesMinuteMetricsA</a>

---


### StorageAccountQueuePropertiesTimeoutsOutputReference <a name="StorageAccountQueuePropertiesTimeoutsOutputReference" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v13/storageaccountqueueproperties"

storageaccountqueueproperties.NewStorageAccountQueuePropertiesTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StorageAccountQueuePropertiesTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.storageAccountQueueProperties.StorageAccountQueuePropertiesTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



