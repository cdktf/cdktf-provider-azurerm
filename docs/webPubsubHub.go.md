# `azurerm_web_pubsub_hub`

Refer to the Terraform Registory for docs: [`azurerm_web_pubsub_hub`](https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub).

# `webPubsubHub` Submodule <a name="`webPubsubHub` Submodule" id="@cdktf/provider-azurerm.webPubsubHub"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebPubsubHub <a name="WebPubsubHub" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub azurerm_web_pubsub_hub}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/webpubsubhub"

webpubsubhub.NewWebPubsubHub(scope Construct, id *string, config WebPubsubHubConfig) WebPubsubHub
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig">WebPubsubHubConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig">WebPubsubHubConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putEventHandler">PutEventHandler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putEventListener">PutEventListener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetAnonymousConnectionsEnabled">ResetAnonymousConnectionsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetEventHandler">ResetEventHandler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetEventListener">ResetEventListener</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutEventHandler` <a name="PutEventHandler" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putEventHandler"></a>

```go
func PutEventHandler(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putEventHandler.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEventListener` <a name="PutEventListener" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putEventListener"></a>

```go
func PutEventListener(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putEventListener.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putTimeouts"></a>

```go
func PutTimeouts(value WebPubsubHubTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts">WebPubsubHubTimeouts</a>

---

##### `ResetAnonymousConnectionsEnabled` <a name="ResetAnonymousConnectionsEnabled" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetAnonymousConnectionsEnabled"></a>

```go
func ResetAnonymousConnectionsEnabled()
```

##### `ResetEventHandler` <a name="ResetEventHandler" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetEventHandler"></a>

```go
func ResetEventHandler()
```

##### `ResetEventListener` <a name="ResetEventListener" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetEventListener"></a>

```go
func ResetEventListener()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/webpubsubhub"

webpubsubhub.WebPubsubHub_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/webpubsubhub"

webpubsubhub.WebPubsubHub_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/webpubsubhub"

webpubsubhub.WebPubsubHub_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.eventHandler">EventHandler</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList">WebPubsubHubEventHandlerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.eventListener">EventListener</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList">WebPubsubHubEventListenerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference">WebPubsubHubTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.anonymousConnectionsEnabledInput">AnonymousConnectionsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.eventHandlerInput">EventHandlerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.eventListenerInput">EventListenerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.webPubsubIdInput">WebPubsubIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.anonymousConnectionsEnabled">AnonymousConnectionsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.webPubsubId">WebPubsubId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EventHandler`<sup>Required</sup> <a name="EventHandler" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.eventHandler"></a>

```go
func EventHandler() WebPubsubHubEventHandlerList
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList">WebPubsubHubEventHandlerList</a>

---

##### `EventListener`<sup>Required</sup> <a name="EventListener" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.eventListener"></a>

```go
func EventListener() WebPubsubHubEventListenerList
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList">WebPubsubHubEventListenerList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.timeouts"></a>

```go
func Timeouts() WebPubsubHubTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference">WebPubsubHubTimeoutsOutputReference</a>

---

##### `AnonymousConnectionsEnabledInput`<sup>Optional</sup> <a name="AnonymousConnectionsEnabledInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.anonymousConnectionsEnabledInput"></a>

```go
func AnonymousConnectionsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EventHandlerInput`<sup>Optional</sup> <a name="EventHandlerInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.eventHandlerInput"></a>

```go
func EventHandlerInput() interface{}
```

- *Type:* interface{}

---

##### `EventListenerInput`<sup>Optional</sup> <a name="EventListenerInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.eventListenerInput"></a>

```go
func EventListenerInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WebPubsubIdInput`<sup>Optional</sup> <a name="WebPubsubIdInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.webPubsubIdInput"></a>

```go
func WebPubsubIdInput() *string
```

- *Type:* *string

---

##### `AnonymousConnectionsEnabled`<sup>Required</sup> <a name="AnonymousConnectionsEnabled" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.anonymousConnectionsEnabled"></a>

```go
func AnonymousConnectionsEnabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `WebPubsubId`<sup>Required</sup> <a name="WebPubsubId" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.webPubsubId"></a>

```go
func WebPubsubId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHub.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WebPubsubHubConfig <a name="WebPubsubHubConfig" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/webpubsubhub"

&webpubsubhub.WebPubsubHubConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	WebPubsubId: *string,
	AnonymousConnectionsEnabled: interface{},
	EventHandler: interface{},
	EventListener: interface{},
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.webPubsubHub.WebPubsubHubTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub#name WebPubsubHub#name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.webPubsubId">WebPubsubId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub#web_pubsub_id WebPubsubHub#web_pubsub_id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.anonymousConnectionsEnabled">AnonymousConnectionsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub#anonymous_connections_enabled WebPubsubHub#anonymous_connections_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.eventHandler">EventHandler</a></code> | <code>interface{}</code> | event_handler block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.eventListener">EventListener</a></code> | <code>interface{}</code> | event_listener block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub#id WebPubsubHub#id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts">WebPubsubHubTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub#name WebPubsubHub#name}.

---

##### `WebPubsubId`<sup>Required</sup> <a name="WebPubsubId" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.webPubsubId"></a>

```go
WebPubsubId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub#web_pubsub_id WebPubsubHub#web_pubsub_id}.

---

##### `AnonymousConnectionsEnabled`<sup>Optional</sup> <a name="AnonymousConnectionsEnabled" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.anonymousConnectionsEnabled"></a>

```go
AnonymousConnectionsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub#anonymous_connections_enabled WebPubsubHub#anonymous_connections_enabled}.

---

##### `EventHandler`<sup>Optional</sup> <a name="EventHandler" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.eventHandler"></a>

```go
EventHandler interface{}
```

- *Type:* interface{}

event_handler block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub#event_handler WebPubsubHub#event_handler}

---

##### `EventListener`<sup>Optional</sup> <a name="EventListener" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.eventListener"></a>

```go
EventListener interface{}
```

- *Type:* interface{}

event_listener block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub#event_listener WebPubsubHub#event_listener}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub#id WebPubsubHub#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubConfig.property.timeouts"></a>

```go
Timeouts WebPubsubHubTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts">WebPubsubHubTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub#timeouts WebPubsubHub#timeouts}

---

### WebPubsubHubEventHandler <a name="WebPubsubHubEventHandler" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/webpubsubhub"

&webpubsubhub.WebPubsubHubEventHandler {
	UrlTemplate: *string,
	Auth: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth,
	SystemEvents: *[]*string,
	UserEventPattern: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler.property.urlTemplate">UrlTemplate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub#url_template WebPubsubHub#url_template}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler.property.auth">Auth</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth">WebPubsubHubEventHandlerAuth</a></code> | auth block. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler.property.systemEvents">SystemEvents</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub#system_events WebPubsubHub#system_events}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler.property.userEventPattern">UserEventPattern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub#user_event_pattern WebPubsubHub#user_event_pattern}. |

---

##### `UrlTemplate`<sup>Required</sup> <a name="UrlTemplate" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler.property.urlTemplate"></a>

```go
UrlTemplate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub#url_template WebPubsubHub#url_template}.

---

##### `Auth`<sup>Optional</sup> <a name="Auth" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler.property.auth"></a>

```go
Auth WebPubsubHubEventHandlerAuth
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth">WebPubsubHubEventHandlerAuth</a>

auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub#auth WebPubsubHub#auth}

---

##### `SystemEvents`<sup>Optional</sup> <a name="SystemEvents" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler.property.systemEvents"></a>

```go
SystemEvents *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub#system_events WebPubsubHub#system_events}.

---

##### `UserEventPattern`<sup>Optional</sup> <a name="UserEventPattern" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandler.property.userEventPattern"></a>

```go
UserEventPattern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub#user_event_pattern WebPubsubHub#user_event_pattern}.

---

### WebPubsubHubEventHandlerAuth <a name="WebPubsubHubEventHandlerAuth" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/webpubsubhub"

&webpubsubhub.WebPubsubHubEventHandlerAuth {
	ManagedIdentityId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth.property.managedIdentityId">ManagedIdentityId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub#managed_identity_id WebPubsubHub#managed_identity_id}. |

---

##### `ManagedIdentityId`<sup>Required</sup> <a name="ManagedIdentityId" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth.property.managedIdentityId"></a>

```go
ManagedIdentityId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub#managed_identity_id WebPubsubHub#managed_identity_id}.

---

### WebPubsubHubEventListener <a name="WebPubsubHubEventListener" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/webpubsubhub"

&webpubsubhub.WebPubsubHubEventListener {
	EventhubName: *string,
	EventhubNamespaceName: *string,
	SystemEventNameFilter: *[]*string,
	UserEventNameFilter: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener.property.eventhubName">EventhubName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub#eventhub_name WebPubsubHub#eventhub_name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener.property.eventhubNamespaceName">EventhubNamespaceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub#eventhub_namespace_name WebPubsubHub#eventhub_namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener.property.systemEventNameFilter">SystemEventNameFilter</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub#system_event_name_filter WebPubsubHub#system_event_name_filter}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener.property.userEventNameFilter">UserEventNameFilter</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub#user_event_name_filter WebPubsubHub#user_event_name_filter}. |

---

##### `EventhubName`<sup>Required</sup> <a name="EventhubName" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener.property.eventhubName"></a>

```go
EventhubName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub#eventhub_name WebPubsubHub#eventhub_name}.

---

##### `EventhubNamespaceName`<sup>Required</sup> <a name="EventhubNamespaceName" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener.property.eventhubNamespaceName"></a>

```go
EventhubNamespaceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub#eventhub_namespace_name WebPubsubHub#eventhub_namespace_name}.

---

##### `SystemEventNameFilter`<sup>Optional</sup> <a name="SystemEventNameFilter" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener.property.systemEventNameFilter"></a>

```go
SystemEventNameFilter *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub#system_event_name_filter WebPubsubHub#system_event_name_filter}.

---

##### `UserEventNameFilter`<sup>Optional</sup> <a name="UserEventNameFilter" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListener.property.userEventNameFilter"></a>

```go
UserEventNameFilter *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub#user_event_name_filter WebPubsubHub#user_event_name_filter}.

---

### WebPubsubHubTimeouts <a name="WebPubsubHubTimeouts" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/webpubsubhub"

&webpubsubhub.WebPubsubHubTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub#create WebPubsubHub#create}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub#delete WebPubsubHub#delete}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub#read WebPubsubHub#read}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub#update WebPubsubHub#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub#create WebPubsubHub#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub#delete WebPubsubHub#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub#read WebPubsubHub#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/web_pubsub_hub#update WebPubsubHub#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WebPubsubHubEventHandlerAuthOutputReference <a name="WebPubsubHubEventHandlerAuthOutputReference" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/webpubsubhub"

webpubsubhub.NewWebPubsubHubEventHandlerAuthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WebPubsubHubEventHandlerAuthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.managedIdentityIdInput">ManagedIdentityIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.managedIdentityId">ManagedIdentityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth">WebPubsubHubEventHandlerAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ManagedIdentityIdInput`<sup>Optional</sup> <a name="ManagedIdentityIdInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.managedIdentityIdInput"></a>

```go
func ManagedIdentityIdInput() *string
```

- *Type:* *string

---

##### `ManagedIdentityId`<sup>Required</sup> <a name="ManagedIdentityId" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.managedIdentityId"></a>

```go
func ManagedIdentityId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference.property.internalValue"></a>

```go
func InternalValue() WebPubsubHubEventHandlerAuth
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth">WebPubsubHubEventHandlerAuth</a>

---


### WebPubsubHubEventHandlerList <a name="WebPubsubHubEventHandlerList" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/webpubsubhub"

webpubsubhub.NewWebPubsubHubEventHandlerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WebPubsubHubEventHandlerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.get"></a>

```go
func Get(index *f64) WebPubsubHubEventHandlerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WebPubsubHubEventHandlerOutputReference <a name="WebPubsubHubEventHandlerOutputReference" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/webpubsubhub"

webpubsubhub.NewWebPubsubHubEventHandlerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WebPubsubHubEventHandlerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.putAuth">PutAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.resetAuth">ResetAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.resetSystemEvents">ResetSystemEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.resetUserEventPattern">ResetUserEventPattern</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuth` <a name="PutAuth" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.putAuth"></a>

```go
func PutAuth(value WebPubsubHubEventHandlerAuth)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.putAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth">WebPubsubHubEventHandlerAuth</a>

---

##### `ResetAuth` <a name="ResetAuth" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.resetAuth"></a>

```go
func ResetAuth()
```

##### `ResetSystemEvents` <a name="ResetSystemEvents" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.resetSystemEvents"></a>

```go
func ResetSystemEvents()
```

##### `ResetUserEventPattern` <a name="ResetUserEventPattern" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.resetUserEventPattern"></a>

```go
func ResetUserEventPattern()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.auth">Auth</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference">WebPubsubHubEventHandlerAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.authInput">AuthInput</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth">WebPubsubHubEventHandlerAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.systemEventsInput">SystemEventsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.urlTemplateInput">UrlTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.userEventPatternInput">UserEventPatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.systemEvents">SystemEvents</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.urlTemplate">UrlTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.userEventPattern">UserEventPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Auth`<sup>Required</sup> <a name="Auth" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.auth"></a>

```go
func Auth() WebPubsubHubEventHandlerAuthOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuthOutputReference">WebPubsubHubEventHandlerAuthOutputReference</a>

---

##### `AuthInput`<sup>Optional</sup> <a name="AuthInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.authInput"></a>

```go
func AuthInput() WebPubsubHubEventHandlerAuth
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerAuth">WebPubsubHubEventHandlerAuth</a>

---

##### `SystemEventsInput`<sup>Optional</sup> <a name="SystemEventsInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.systemEventsInput"></a>

```go
func SystemEventsInput() *[]*string
```

- *Type:* *[]*string

---

##### `UrlTemplateInput`<sup>Optional</sup> <a name="UrlTemplateInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.urlTemplateInput"></a>

```go
func UrlTemplateInput() *string
```

- *Type:* *string

---

##### `UserEventPatternInput`<sup>Optional</sup> <a name="UserEventPatternInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.userEventPatternInput"></a>

```go
func UserEventPatternInput() *string
```

- *Type:* *string

---

##### `SystemEvents`<sup>Required</sup> <a name="SystemEvents" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.systemEvents"></a>

```go
func SystemEvents() *[]*string
```

- *Type:* *[]*string

---

##### `UrlTemplate`<sup>Required</sup> <a name="UrlTemplate" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.urlTemplate"></a>

```go
func UrlTemplate() *string
```

- *Type:* *string

---

##### `UserEventPattern`<sup>Required</sup> <a name="UserEventPattern" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.userEventPattern"></a>

```go
func UserEventPattern() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventHandlerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WebPubsubHubEventListenerList <a name="WebPubsubHubEventListenerList" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/webpubsubhub"

webpubsubhub.NewWebPubsubHubEventListenerList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WebPubsubHubEventListenerList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.get"></a>

```go
func Get(index *f64) WebPubsubHubEventListenerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WebPubsubHubEventListenerOutputReference <a name="WebPubsubHubEventListenerOutputReference" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/webpubsubhub"

webpubsubhub.NewWebPubsubHubEventListenerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WebPubsubHubEventListenerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.resetSystemEventNameFilter">ResetSystemEventNameFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.resetUserEventNameFilter">ResetUserEventNameFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSystemEventNameFilter` <a name="ResetSystemEventNameFilter" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.resetSystemEventNameFilter"></a>

```go
func ResetSystemEventNameFilter()
```

##### `ResetUserEventNameFilter` <a name="ResetUserEventNameFilter" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.resetUserEventNameFilter"></a>

```go
func ResetUserEventNameFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.eventhubNameInput">EventhubNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.eventhubNamespaceNameInput">EventhubNamespaceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.systemEventNameFilterInput">SystemEventNameFilterInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.userEventNameFilterInput">UserEventNameFilterInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.eventhubName">EventhubName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.eventhubNamespaceName">EventhubNamespaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.systemEventNameFilter">SystemEventNameFilter</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.userEventNameFilter">UserEventNameFilter</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EventhubNameInput`<sup>Optional</sup> <a name="EventhubNameInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.eventhubNameInput"></a>

```go
func EventhubNameInput() *string
```

- *Type:* *string

---

##### `EventhubNamespaceNameInput`<sup>Optional</sup> <a name="EventhubNamespaceNameInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.eventhubNamespaceNameInput"></a>

```go
func EventhubNamespaceNameInput() *string
```

- *Type:* *string

---

##### `SystemEventNameFilterInput`<sup>Optional</sup> <a name="SystemEventNameFilterInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.systemEventNameFilterInput"></a>

```go
func SystemEventNameFilterInput() *[]*string
```

- *Type:* *[]*string

---

##### `UserEventNameFilterInput`<sup>Optional</sup> <a name="UserEventNameFilterInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.userEventNameFilterInput"></a>

```go
func UserEventNameFilterInput() *[]*string
```

- *Type:* *[]*string

---

##### `EventhubName`<sup>Required</sup> <a name="EventhubName" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.eventhubName"></a>

```go
func EventhubName() *string
```

- *Type:* *string

---

##### `EventhubNamespaceName`<sup>Required</sup> <a name="EventhubNamespaceName" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.eventhubNamespaceName"></a>

```go
func EventhubNamespaceName() *string
```

- *Type:* *string

---

##### `SystemEventNameFilter`<sup>Required</sup> <a name="SystemEventNameFilter" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.systemEventNameFilter"></a>

```go
func SystemEventNameFilter() *[]*string
```

- *Type:* *[]*string

---

##### `UserEventNameFilter`<sup>Required</sup> <a name="UserEventNameFilter" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.userEventNameFilter"></a>

```go
func UserEventNameFilter() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubEventListenerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WebPubsubHubTimeoutsOutputReference <a name="WebPubsubHubTimeoutsOutputReference" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/webpubsubhub"

webpubsubhub.NewWebPubsubHubTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WebPubsubHubTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webPubsubHub.WebPubsubHubTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



