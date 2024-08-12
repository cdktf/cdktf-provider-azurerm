# `streamAnalyticsStreamInputEventhubV2` Submodule <a name="`streamAnalyticsStreamInputEventhubV2` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsStreamInputEventhubV2 <a name="StreamAnalyticsStreamInputEventhubV2" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2 azurerm_stream_analytics_stream_input_eventhub_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsstreaminputeventhubv2"

streamanalyticsstreaminputeventhubv2.NewStreamAnalyticsStreamInputEventhubV2(scope Construct, id *string, config StreamAnalyticsStreamInputEventhubV2Config) StreamAnalyticsStreamInputEventhubV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config">StreamAnalyticsStreamInputEventhubV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config">StreamAnalyticsStreamInputEventhubV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.putSerialization">PutSerialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetAuthenticationMode">ResetAuthenticationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetEventhubConsumerGroupName">ResetEventhubConsumerGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetPartitionKey">ResetPartitionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetSharedAccessPolicyKey">ResetSharedAccessPolicyKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetSharedAccessPolicyName">ResetSharedAccessPolicyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSerialization` <a name="PutSerialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.putSerialization"></a>

```go
func PutSerialization(value StreamAnalyticsStreamInputEventhubV2Serialization)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.putSerialization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization">StreamAnalyticsStreamInputEventhubV2Serialization</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.putTimeouts"></a>

```go
func PutTimeouts(value StreamAnalyticsStreamInputEventhubV2Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts">StreamAnalyticsStreamInputEventhubV2Timeouts</a>

---

##### `ResetAuthenticationMode` <a name="ResetAuthenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetAuthenticationMode"></a>

```go
func ResetAuthenticationMode()
```

##### `ResetEventhubConsumerGroupName` <a name="ResetEventhubConsumerGroupName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetEventhubConsumerGroupName"></a>

```go
func ResetEventhubConsumerGroupName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetId"></a>

```go
func ResetId()
```

##### `ResetPartitionKey` <a name="ResetPartitionKey" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetPartitionKey"></a>

```go
func ResetPartitionKey()
```

##### `ResetSharedAccessPolicyKey` <a name="ResetSharedAccessPolicyKey" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetSharedAccessPolicyKey"></a>

```go
func ResetSharedAccessPolicyKey()
```

##### `ResetSharedAccessPolicyName` <a name="ResetSharedAccessPolicyName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetSharedAccessPolicyName"></a>

```go
func ResetSharedAccessPolicyName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StreamAnalyticsStreamInputEventhubV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsstreaminputeventhubv2"

streamanalyticsstreaminputeventhubv2.StreamAnalyticsStreamInputEventhubV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsstreaminputeventhubv2"

streamanalyticsstreaminputeventhubv2.StreamAnalyticsStreamInputEventhubV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsstreaminputeventhubv2"

streamanalyticsstreaminputeventhubv2.StreamAnalyticsStreamInputEventhubV2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsstreaminputeventhubv2"

streamanalyticsstreaminputeventhubv2.StreamAnalyticsStreamInputEventhubV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a StreamAnalyticsStreamInputEventhubV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StreamAnalyticsStreamInputEventhubV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StreamAnalyticsStreamInputEventhubV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the StreamAnalyticsStreamInputEventhubV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.serialization">Serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference">StreamAnalyticsStreamInputEventhubV2SerializationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference">StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.authenticationModeInput">AuthenticationModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.eventhubConsumerGroupNameInput">EventhubConsumerGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.eventhubNameInput">EventhubNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.partitionKeyInput">PartitionKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.serializationInput">SerializationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization">StreamAnalyticsStreamInputEventhubV2Serialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.servicebusNamespaceInput">ServicebusNamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.sharedAccessPolicyKeyInput">SharedAccessPolicyKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.sharedAccessPolicyNameInput">SharedAccessPolicyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.streamAnalyticsJobIdInput">StreamAnalyticsJobIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.authenticationMode">AuthenticationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.eventhubConsumerGroupName">EventhubConsumerGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.eventhubName">EventhubName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.partitionKey">PartitionKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.servicebusNamespace">ServicebusNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.sharedAccessPolicyKey">SharedAccessPolicyKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.sharedAccessPolicyName">SharedAccessPolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.streamAnalyticsJobId">StreamAnalyticsJobId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Serialization`<sup>Required</sup> <a name="Serialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.serialization"></a>

```go
func Serialization() StreamAnalyticsStreamInputEventhubV2SerializationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference">StreamAnalyticsStreamInputEventhubV2SerializationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.timeouts"></a>

```go
func Timeouts() StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference">StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference</a>

---

##### `AuthenticationModeInput`<sup>Optional</sup> <a name="AuthenticationModeInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.authenticationModeInput"></a>

```go
func AuthenticationModeInput() *string
```

- *Type:* *string

---

##### `EventhubConsumerGroupNameInput`<sup>Optional</sup> <a name="EventhubConsumerGroupNameInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.eventhubConsumerGroupNameInput"></a>

```go
func EventhubConsumerGroupNameInput() *string
```

- *Type:* *string

---

##### `EventhubNameInput`<sup>Optional</sup> <a name="EventhubNameInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.eventhubNameInput"></a>

```go
func EventhubNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PartitionKeyInput`<sup>Optional</sup> <a name="PartitionKeyInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.partitionKeyInput"></a>

```go
func PartitionKeyInput() *string
```

- *Type:* *string

---

##### `SerializationInput`<sup>Optional</sup> <a name="SerializationInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.serializationInput"></a>

```go
func SerializationInput() StreamAnalyticsStreamInputEventhubV2Serialization
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization">StreamAnalyticsStreamInputEventhubV2Serialization</a>

---

##### `ServicebusNamespaceInput`<sup>Optional</sup> <a name="ServicebusNamespaceInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.servicebusNamespaceInput"></a>

```go
func ServicebusNamespaceInput() *string
```

- *Type:* *string

---

##### `SharedAccessPolicyKeyInput`<sup>Optional</sup> <a name="SharedAccessPolicyKeyInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.sharedAccessPolicyKeyInput"></a>

```go
func SharedAccessPolicyKeyInput() *string
```

- *Type:* *string

---

##### `SharedAccessPolicyNameInput`<sup>Optional</sup> <a name="SharedAccessPolicyNameInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.sharedAccessPolicyNameInput"></a>

```go
func SharedAccessPolicyNameInput() *string
```

- *Type:* *string

---

##### `StreamAnalyticsJobIdInput`<sup>Optional</sup> <a name="StreamAnalyticsJobIdInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.streamAnalyticsJobIdInput"></a>

```go
func StreamAnalyticsJobIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AuthenticationMode`<sup>Required</sup> <a name="AuthenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.authenticationMode"></a>

```go
func AuthenticationMode() *string
```

- *Type:* *string

---

##### `EventhubConsumerGroupName`<sup>Required</sup> <a name="EventhubConsumerGroupName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.eventhubConsumerGroupName"></a>

```go
func EventhubConsumerGroupName() *string
```

- *Type:* *string

---

##### `EventhubName`<sup>Required</sup> <a name="EventhubName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.eventhubName"></a>

```go
func EventhubName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PartitionKey`<sup>Required</sup> <a name="PartitionKey" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.partitionKey"></a>

```go
func PartitionKey() *string
```

- *Type:* *string

---

##### `ServicebusNamespace`<sup>Required</sup> <a name="ServicebusNamespace" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.servicebusNamespace"></a>

```go
func ServicebusNamespace() *string
```

- *Type:* *string

---

##### `SharedAccessPolicyKey`<sup>Required</sup> <a name="SharedAccessPolicyKey" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.sharedAccessPolicyKey"></a>

```go
func SharedAccessPolicyKey() *string
```

- *Type:* *string

---

##### `SharedAccessPolicyName`<sup>Required</sup> <a name="SharedAccessPolicyName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.sharedAccessPolicyName"></a>

```go
func SharedAccessPolicyName() *string
```

- *Type:* *string

---

##### `StreamAnalyticsJobId`<sup>Required</sup> <a name="StreamAnalyticsJobId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.streamAnalyticsJobId"></a>

```go
func StreamAnalyticsJobId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsStreamInputEventhubV2Config <a name="StreamAnalyticsStreamInputEventhubV2Config" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsstreaminputeventhubv2"

&streamanalyticsstreaminputeventhubv2.StreamAnalyticsStreamInputEventhubV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EventhubName: *string,
	Name: *string,
	Serialization: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization,
	ServicebusNamespace: *string,
	StreamAnalyticsJobId: *string,
	AuthenticationMode: *string,
	EventhubConsumerGroupName: *string,
	Id: *string,
	PartitionKey: *string,
	SharedAccessPolicyKey: *string,
	SharedAccessPolicyName: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.eventhubName">EventhubName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2#eventhub_name StreamAnalyticsStreamInputEventhubV2#eventhub_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2#name StreamAnalyticsStreamInputEventhubV2#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.serialization">Serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization">StreamAnalyticsStreamInputEventhubV2Serialization</a></code> | serialization block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.servicebusNamespace">ServicebusNamespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2#servicebus_namespace StreamAnalyticsStreamInputEventhubV2#servicebus_namespace}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.streamAnalyticsJobId">StreamAnalyticsJobId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2#stream_analytics_job_id StreamAnalyticsStreamInputEventhubV2#stream_analytics_job_id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.authenticationMode">AuthenticationMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2#authentication_mode StreamAnalyticsStreamInputEventhubV2#authentication_mode}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.eventhubConsumerGroupName">EventhubConsumerGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2#eventhub_consumer_group_name StreamAnalyticsStreamInputEventhubV2#eventhub_consumer_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2#id StreamAnalyticsStreamInputEventhubV2#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.partitionKey">PartitionKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2#partition_key StreamAnalyticsStreamInputEventhubV2#partition_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.sharedAccessPolicyKey">SharedAccessPolicyKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2#shared_access_policy_key StreamAnalyticsStreamInputEventhubV2#shared_access_policy_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.sharedAccessPolicyName">SharedAccessPolicyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2#shared_access_policy_name StreamAnalyticsStreamInputEventhubV2#shared_access_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts">StreamAnalyticsStreamInputEventhubV2Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EventhubName`<sup>Required</sup> <a name="EventhubName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.eventhubName"></a>

```go
EventhubName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2#eventhub_name StreamAnalyticsStreamInputEventhubV2#eventhub_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2#name StreamAnalyticsStreamInputEventhubV2#name}.

---

##### `Serialization`<sup>Required</sup> <a name="Serialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.serialization"></a>

```go
Serialization StreamAnalyticsStreamInputEventhubV2Serialization
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization">StreamAnalyticsStreamInputEventhubV2Serialization</a>

serialization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2#serialization StreamAnalyticsStreamInputEventhubV2#serialization}

---

##### `ServicebusNamespace`<sup>Required</sup> <a name="ServicebusNamespace" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.servicebusNamespace"></a>

```go
ServicebusNamespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2#servicebus_namespace StreamAnalyticsStreamInputEventhubV2#servicebus_namespace}.

---

##### `StreamAnalyticsJobId`<sup>Required</sup> <a name="StreamAnalyticsJobId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.streamAnalyticsJobId"></a>

```go
StreamAnalyticsJobId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2#stream_analytics_job_id StreamAnalyticsStreamInputEventhubV2#stream_analytics_job_id}.

---

##### `AuthenticationMode`<sup>Optional</sup> <a name="AuthenticationMode" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.authenticationMode"></a>

```go
AuthenticationMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2#authentication_mode StreamAnalyticsStreamInputEventhubV2#authentication_mode}.

---

##### `EventhubConsumerGroupName`<sup>Optional</sup> <a name="EventhubConsumerGroupName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.eventhubConsumerGroupName"></a>

```go
EventhubConsumerGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2#eventhub_consumer_group_name StreamAnalyticsStreamInputEventhubV2#eventhub_consumer_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2#id StreamAnalyticsStreamInputEventhubV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PartitionKey`<sup>Optional</sup> <a name="PartitionKey" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.partitionKey"></a>

```go
PartitionKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2#partition_key StreamAnalyticsStreamInputEventhubV2#partition_key}.

---

##### `SharedAccessPolicyKey`<sup>Optional</sup> <a name="SharedAccessPolicyKey" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.sharedAccessPolicyKey"></a>

```go
SharedAccessPolicyKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2#shared_access_policy_key StreamAnalyticsStreamInputEventhubV2#shared_access_policy_key}.

---

##### `SharedAccessPolicyName`<sup>Optional</sup> <a name="SharedAccessPolicyName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.sharedAccessPolicyName"></a>

```go
SharedAccessPolicyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2#shared_access_policy_name StreamAnalyticsStreamInputEventhubV2#shared_access_policy_name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Config.property.timeouts"></a>

```go
Timeouts StreamAnalyticsStreamInputEventhubV2Timeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts">StreamAnalyticsStreamInputEventhubV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2#timeouts StreamAnalyticsStreamInputEventhubV2#timeouts}

---

### StreamAnalyticsStreamInputEventhubV2Serialization <a name="StreamAnalyticsStreamInputEventhubV2Serialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsstreaminputeventhubv2"

&streamanalyticsstreaminputeventhubv2.StreamAnalyticsStreamInputEventhubV2Serialization {
	Type: *string,
	Encoding: *string,
	FieldDelimiter: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2#type StreamAnalyticsStreamInputEventhubV2#type}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization.property.encoding">Encoding</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2#encoding StreamAnalyticsStreamInputEventhubV2#encoding}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization.property.fieldDelimiter">FieldDelimiter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2#field_delimiter StreamAnalyticsStreamInputEventhubV2#field_delimiter}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2#type StreamAnalyticsStreamInputEventhubV2#type}.

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization.property.encoding"></a>

```go
Encoding *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2#encoding StreamAnalyticsStreamInputEventhubV2#encoding}.

---

##### `FieldDelimiter`<sup>Optional</sup> <a name="FieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization.property.fieldDelimiter"></a>

```go
FieldDelimiter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2#field_delimiter StreamAnalyticsStreamInputEventhubV2#field_delimiter}.

---

### StreamAnalyticsStreamInputEventhubV2Timeouts <a name="StreamAnalyticsStreamInputEventhubV2Timeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsstreaminputeventhubv2"

&streamanalyticsstreaminputeventhubv2.StreamAnalyticsStreamInputEventhubV2Timeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2#create StreamAnalyticsStreamInputEventhubV2#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2#delete StreamAnalyticsStreamInputEventhubV2#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2#read StreamAnalyticsStreamInputEventhubV2#read}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2#update StreamAnalyticsStreamInputEventhubV2#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2#create StreamAnalyticsStreamInputEventhubV2#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2#delete StreamAnalyticsStreamInputEventhubV2#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2#read StreamAnalyticsStreamInputEventhubV2#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Timeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/resources/stream_analytics_stream_input_eventhub_v2#update StreamAnalyticsStreamInputEventhubV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsStreamInputEventhubV2SerializationOutputReference <a name="StreamAnalyticsStreamInputEventhubV2SerializationOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsstreaminputeventhubv2"

streamanalyticsstreaminputeventhubv2.NewStreamAnalyticsStreamInputEventhubV2SerializationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StreamAnalyticsStreamInputEventhubV2SerializationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.resetFieldDelimiter">ResetFieldDelimiter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.resetEncoding"></a>

```go
func ResetEncoding()
```

##### `ResetFieldDelimiter` <a name="ResetFieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.resetFieldDelimiter"></a>

```go
func ResetFieldDelimiter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.encodingInput">EncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.fieldDelimiterInput">FieldDelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.encoding">Encoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.fieldDelimiter">FieldDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization">StreamAnalyticsStreamInputEventhubV2Serialization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.encodingInput"></a>

```go
func EncodingInput() *string
```

- *Type:* *string

---

##### `FieldDelimiterInput`<sup>Optional</sup> <a name="FieldDelimiterInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.fieldDelimiterInput"></a>

```go
func FieldDelimiterInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.encoding"></a>

```go
func Encoding() *string
```

- *Type:* *string

---

##### `FieldDelimiter`<sup>Required</sup> <a name="FieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.fieldDelimiter"></a>

```go
func FieldDelimiter() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2SerializationOutputReference.property.internalValue"></a>

```go
func InternalValue() StreamAnalyticsStreamInputEventhubV2Serialization
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2Serialization">StreamAnalyticsStreamInputEventhubV2Serialization</a>

---


### StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference <a name="StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsstreaminputeventhubv2"

streamanalyticsstreaminputeventhubv2.NewStreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputEventhubV2.StreamAnalyticsStreamInputEventhubV2TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



