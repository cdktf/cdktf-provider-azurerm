# `azurerm_stream_analytics_stream_input_iothub`

Refer to the Terraform Registory for docs: [`azurerm_stream_analytics_stream_input_iothub`](https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/stream_analytics_stream_input_iothub).

# `streamAnalyticsStreamInputIothub` Submodule <a name="`streamAnalyticsStreamInputIothub` Submodule" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamAnalyticsStreamInputIothub <a name="StreamAnalyticsStreamInputIothub" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/stream_analytics_stream_input_iothub azurerm_stream_analytics_stream_input_iothub}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsstreaminputiothub"

streamanalyticsstreaminputiothub.NewStreamAnalyticsStreamInputIothub(scope Construct, id *string, config StreamAnalyticsStreamInputIothubConfig) StreamAnalyticsStreamInputIothub
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig">StreamAnalyticsStreamInputIothubConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig">StreamAnalyticsStreamInputIothubConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.putSerialization">PutSerialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutSerialization` <a name="PutSerialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.putSerialization"></a>

```go
func PutSerialization(value StreamAnalyticsStreamInputIothubSerialization)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.putSerialization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerialization">StreamAnalyticsStreamInputIothubSerialization</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.putTimeouts"></a>

```go
func PutTimeouts(value StreamAnalyticsStreamInputIothubTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeouts">StreamAnalyticsStreamInputIothubTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsstreaminputiothub"

streamanalyticsstreaminputiothub.StreamAnalyticsStreamInputIothub_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsstreaminputiothub"

streamanalyticsstreaminputiothub.StreamAnalyticsStreamInputIothub_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsstreaminputiothub"

streamanalyticsstreaminputiothub.StreamAnalyticsStreamInputIothub_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.serialization">Serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference">StreamAnalyticsStreamInputIothubSerializationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference">StreamAnalyticsStreamInputIothubTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.eventhubConsumerGroupNameInput">EventhubConsumerGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.iothubNamespaceInput">IothubNamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.serializationInput">SerializationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerialization">StreamAnalyticsStreamInputIothubSerialization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.sharedAccessPolicyKeyInput">SharedAccessPolicyKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.sharedAccessPolicyNameInput">SharedAccessPolicyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.streamAnalyticsJobNameInput">StreamAnalyticsJobNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.eventhubConsumerGroupName">EventhubConsumerGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.iothubNamespace">IothubNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.sharedAccessPolicyKey">SharedAccessPolicyKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.sharedAccessPolicyName">SharedAccessPolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.streamAnalyticsJobName">StreamAnalyticsJobName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Serialization`<sup>Required</sup> <a name="Serialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.serialization"></a>

```go
func Serialization() StreamAnalyticsStreamInputIothubSerializationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference">StreamAnalyticsStreamInputIothubSerializationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.timeouts"></a>

```go
func Timeouts() StreamAnalyticsStreamInputIothubTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference">StreamAnalyticsStreamInputIothubTimeoutsOutputReference</a>

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `EventhubConsumerGroupNameInput`<sup>Optional</sup> <a name="EventhubConsumerGroupNameInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.eventhubConsumerGroupNameInput"></a>

```go
func EventhubConsumerGroupNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IothubNamespaceInput`<sup>Optional</sup> <a name="IothubNamespaceInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.iothubNamespaceInput"></a>

```go
func IothubNamespaceInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SerializationInput`<sup>Optional</sup> <a name="SerializationInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.serializationInput"></a>

```go
func SerializationInput() StreamAnalyticsStreamInputIothubSerialization
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerialization">StreamAnalyticsStreamInputIothubSerialization</a>

---

##### `SharedAccessPolicyKeyInput`<sup>Optional</sup> <a name="SharedAccessPolicyKeyInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.sharedAccessPolicyKeyInput"></a>

```go
func SharedAccessPolicyKeyInput() *string
```

- *Type:* *string

---

##### `SharedAccessPolicyNameInput`<sup>Optional</sup> <a name="SharedAccessPolicyNameInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.sharedAccessPolicyNameInput"></a>

```go
func SharedAccessPolicyNameInput() *string
```

- *Type:* *string

---

##### `StreamAnalyticsJobNameInput`<sup>Optional</sup> <a name="StreamAnalyticsJobNameInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.streamAnalyticsJobNameInput"></a>

```go
func StreamAnalyticsJobNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `EventhubConsumerGroupName`<sup>Required</sup> <a name="EventhubConsumerGroupName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.eventhubConsumerGroupName"></a>

```go
func EventhubConsumerGroupName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IothubNamespace`<sup>Required</sup> <a name="IothubNamespace" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.iothubNamespace"></a>

```go
func IothubNamespace() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `SharedAccessPolicyKey`<sup>Required</sup> <a name="SharedAccessPolicyKey" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.sharedAccessPolicyKey"></a>

```go
func SharedAccessPolicyKey() *string
```

- *Type:* *string

---

##### `SharedAccessPolicyName`<sup>Required</sup> <a name="SharedAccessPolicyName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.sharedAccessPolicyName"></a>

```go
func SharedAccessPolicyName() *string
```

- *Type:* *string

---

##### `StreamAnalyticsJobName`<sup>Required</sup> <a name="StreamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.streamAnalyticsJobName"></a>

```go
func StreamAnalyticsJobName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothub.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamAnalyticsStreamInputIothubConfig <a name="StreamAnalyticsStreamInputIothubConfig" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsstreaminputiothub"

&streamanalyticsstreaminputiothub.StreamAnalyticsStreamInputIothubConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Endpoint: *string,
	EventhubConsumerGroupName: *string,
	IothubNamespace: *string,
	Name: *string,
	ResourceGroupName: *string,
	Serialization: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerialization,
	SharedAccessPolicyKey: *string,
	SharedAccessPolicyName: *string,
	StreamAnalyticsJobName: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.endpoint">Endpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/stream_analytics_stream_input_iothub#endpoint StreamAnalyticsStreamInputIothub#endpoint}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.eventhubConsumerGroupName">EventhubConsumerGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/stream_analytics_stream_input_iothub#eventhub_consumer_group_name StreamAnalyticsStreamInputIothub#eventhub_consumer_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.iothubNamespace">IothubNamespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/stream_analytics_stream_input_iothub#iothub_namespace StreamAnalyticsStreamInputIothub#iothub_namespace}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/stream_analytics_stream_input_iothub#name StreamAnalyticsStreamInputIothub#name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/stream_analytics_stream_input_iothub#resource_group_name StreamAnalyticsStreamInputIothub#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.serialization">Serialization</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerialization">StreamAnalyticsStreamInputIothubSerialization</a></code> | serialization block. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.sharedAccessPolicyKey">SharedAccessPolicyKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/stream_analytics_stream_input_iothub#shared_access_policy_key StreamAnalyticsStreamInputIothub#shared_access_policy_key}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.sharedAccessPolicyName">SharedAccessPolicyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/stream_analytics_stream_input_iothub#shared_access_policy_name StreamAnalyticsStreamInputIothub#shared_access_policy_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.streamAnalyticsJobName">StreamAnalyticsJobName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/stream_analytics_stream_input_iothub#stream_analytics_job_name StreamAnalyticsStreamInputIothub#stream_analytics_job_name}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/stream_analytics_stream_input_iothub#id StreamAnalyticsStreamInputIothub#id}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeouts">StreamAnalyticsStreamInputIothubTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/stream_analytics_stream_input_iothub#endpoint StreamAnalyticsStreamInputIothub#endpoint}.

---

##### `EventhubConsumerGroupName`<sup>Required</sup> <a name="EventhubConsumerGroupName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.eventhubConsumerGroupName"></a>

```go
EventhubConsumerGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/stream_analytics_stream_input_iothub#eventhub_consumer_group_name StreamAnalyticsStreamInputIothub#eventhub_consumer_group_name}.

---

##### `IothubNamespace`<sup>Required</sup> <a name="IothubNamespace" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.iothubNamespace"></a>

```go
IothubNamespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/stream_analytics_stream_input_iothub#iothub_namespace StreamAnalyticsStreamInputIothub#iothub_namespace}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/stream_analytics_stream_input_iothub#name StreamAnalyticsStreamInputIothub#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/stream_analytics_stream_input_iothub#resource_group_name StreamAnalyticsStreamInputIothub#resource_group_name}.

---

##### `Serialization`<sup>Required</sup> <a name="Serialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.serialization"></a>

```go
Serialization StreamAnalyticsStreamInputIothubSerialization
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerialization">StreamAnalyticsStreamInputIothubSerialization</a>

serialization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/stream_analytics_stream_input_iothub#serialization StreamAnalyticsStreamInputIothub#serialization}

---

##### `SharedAccessPolicyKey`<sup>Required</sup> <a name="SharedAccessPolicyKey" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.sharedAccessPolicyKey"></a>

```go
SharedAccessPolicyKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/stream_analytics_stream_input_iothub#shared_access_policy_key StreamAnalyticsStreamInputIothub#shared_access_policy_key}.

---

##### `SharedAccessPolicyName`<sup>Required</sup> <a name="SharedAccessPolicyName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.sharedAccessPolicyName"></a>

```go
SharedAccessPolicyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/stream_analytics_stream_input_iothub#shared_access_policy_name StreamAnalyticsStreamInputIothub#shared_access_policy_name}.

---

##### `StreamAnalyticsJobName`<sup>Required</sup> <a name="StreamAnalyticsJobName" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.streamAnalyticsJobName"></a>

```go
StreamAnalyticsJobName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/stream_analytics_stream_input_iothub#stream_analytics_job_name StreamAnalyticsStreamInputIothub#stream_analytics_job_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/stream_analytics_stream_input_iothub#id StreamAnalyticsStreamInputIothub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubConfig.property.timeouts"></a>

```go
Timeouts StreamAnalyticsStreamInputIothubTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeouts">StreamAnalyticsStreamInputIothubTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/stream_analytics_stream_input_iothub#timeouts StreamAnalyticsStreamInputIothub#timeouts}

---

### StreamAnalyticsStreamInputIothubSerialization <a name="StreamAnalyticsStreamInputIothubSerialization" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerialization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerialization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsstreaminputiothub"

&streamanalyticsstreaminputiothub.StreamAnalyticsStreamInputIothubSerialization {
	Type: *string,
	Encoding: *string,
	FieldDelimiter: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerialization.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/stream_analytics_stream_input_iothub#type StreamAnalyticsStreamInputIothub#type}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerialization.property.encoding">Encoding</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/stream_analytics_stream_input_iothub#encoding StreamAnalyticsStreamInputIothub#encoding}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerialization.property.fieldDelimiter">FieldDelimiter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/stream_analytics_stream_input_iothub#field_delimiter StreamAnalyticsStreamInputIothub#field_delimiter}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerialization.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/stream_analytics_stream_input_iothub#type StreamAnalyticsStreamInputIothub#type}.

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerialization.property.encoding"></a>

```go
Encoding *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/stream_analytics_stream_input_iothub#encoding StreamAnalyticsStreamInputIothub#encoding}.

---

##### `FieldDelimiter`<sup>Optional</sup> <a name="FieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerialization.property.fieldDelimiter"></a>

```go
FieldDelimiter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/stream_analytics_stream_input_iothub#field_delimiter StreamAnalyticsStreamInputIothub#field_delimiter}.

---

### StreamAnalyticsStreamInputIothubTimeouts <a name="StreamAnalyticsStreamInputIothubTimeouts" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsstreaminputiothub"

&streamanalyticsstreaminputiothub.StreamAnalyticsStreamInputIothubTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/stream_analytics_stream_input_iothub#create StreamAnalyticsStreamInputIothub#create}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/stream_analytics_stream_input_iothub#delete StreamAnalyticsStreamInputIothub#delete}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/stream_analytics_stream_input_iothub#read StreamAnalyticsStreamInputIothub#read}. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/stream_analytics_stream_input_iothub#update StreamAnalyticsStreamInputIothub#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/stream_analytics_stream_input_iothub#create StreamAnalyticsStreamInputIothub#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/stream_analytics_stream_input_iothub#delete StreamAnalyticsStreamInputIothub#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/stream_analytics_stream_input_iothub#read StreamAnalyticsStreamInputIothub#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/stream_analytics_stream_input_iothub#update StreamAnalyticsStreamInputIothub#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamAnalyticsStreamInputIothubSerializationOutputReference <a name="StreamAnalyticsStreamInputIothubSerializationOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsstreaminputiothub"

streamanalyticsstreaminputiothub.NewStreamAnalyticsStreamInputIothubSerializationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StreamAnalyticsStreamInputIothubSerializationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.resetFieldDelimiter">ResetFieldDelimiter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.resetEncoding"></a>

```go
func ResetEncoding()
```

##### `ResetFieldDelimiter` <a name="ResetFieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.resetFieldDelimiter"></a>

```go
func ResetFieldDelimiter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.property.encodingInput">EncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.property.fieldDelimiterInput">FieldDelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.property.encoding">Encoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.property.fieldDelimiter">FieldDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerialization">StreamAnalyticsStreamInputIothubSerialization</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.property.encodingInput"></a>

```go
func EncodingInput() *string
```

- *Type:* *string

---

##### `FieldDelimiterInput`<sup>Optional</sup> <a name="FieldDelimiterInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.property.fieldDelimiterInput"></a>

```go
func FieldDelimiterInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.property.encoding"></a>

```go
func Encoding() *string
```

- *Type:* *string

---

##### `FieldDelimiter`<sup>Required</sup> <a name="FieldDelimiter" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.property.fieldDelimiter"></a>

```go
func FieldDelimiter() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerializationOutputReference.property.internalValue"></a>

```go
func InternalValue() StreamAnalyticsStreamInputIothubSerialization
```

- *Type:* <a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubSerialization">StreamAnalyticsStreamInputIothubSerialization</a>

---


### StreamAnalyticsStreamInputIothubTimeoutsOutputReference <a name="StreamAnalyticsStreamInputIothubTimeoutsOutputReference" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/streamanalyticsstreaminputiothub"

streamanalyticsstreaminputiothub.NewStreamAnalyticsStreamInputIothubTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StreamAnalyticsStreamInputIothubTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.streamAnalyticsStreamInputIothub.StreamAnalyticsStreamInputIothubTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



