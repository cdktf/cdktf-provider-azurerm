# `webPubsubSharedPrivateLinkResource` Submodule <a name="`webPubsubSharedPrivateLinkResource` Submodule" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebPubsubSharedPrivateLinkResource <a name="WebPubsubSharedPrivateLinkResource" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_shared_private_link_resource azurerm_web_pubsub_shared_private_link_resource}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/webpubsubsharedprivatelinkresource"

webpubsubsharedprivatelinkresource.NewWebPubsubSharedPrivateLinkResource(scope Construct, id *string, config WebPubsubSharedPrivateLinkResourceConfig) WebPubsubSharedPrivateLinkResource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig">WebPubsubSharedPrivateLinkResourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig">WebPubsubSharedPrivateLinkResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.resetRequestMessage">ResetRequestMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.putTimeouts"></a>

```go
func PutTimeouts(value WebPubsubSharedPrivateLinkResourceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts">WebPubsubSharedPrivateLinkResourceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.resetId"></a>

```go
func ResetId()
```

##### `ResetRequestMessage` <a name="ResetRequestMessage" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.resetRequestMessage"></a>

```go
func ResetRequestMessage()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/webpubsubsharedprivatelinkresource"

webpubsubsharedprivatelinkresource.WebPubsubSharedPrivateLinkResource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/webpubsubsharedprivatelinkresource"

webpubsubsharedprivatelinkresource.WebPubsubSharedPrivateLinkResource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/webpubsubsharedprivatelinkresource"

webpubsubsharedprivatelinkresource.WebPubsubSharedPrivateLinkResource_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference">WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.requestMessageInput">RequestMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.subresourceNameInput">SubresourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.targetResourceIdInput">TargetResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.webPubsubIdInput">WebPubsubIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.requestMessage">RequestMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.subresourceName">SubresourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.targetResourceId">TargetResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.webPubsubId">WebPubsubId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.timeouts"></a>

```go
func Timeouts() WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference">WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RequestMessageInput`<sup>Optional</sup> <a name="RequestMessageInput" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.requestMessageInput"></a>

```go
func RequestMessageInput() *string
```

- *Type:* *string

---

##### `SubresourceNameInput`<sup>Optional</sup> <a name="SubresourceNameInput" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.subresourceNameInput"></a>

```go
func SubresourceNameInput() *string
```

- *Type:* *string

---

##### `TargetResourceIdInput`<sup>Optional</sup> <a name="TargetResourceIdInput" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.targetResourceIdInput"></a>

```go
func TargetResourceIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WebPubsubIdInput`<sup>Optional</sup> <a name="WebPubsubIdInput" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.webPubsubIdInput"></a>

```go
func WebPubsubIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RequestMessage`<sup>Required</sup> <a name="RequestMessage" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.requestMessage"></a>

```go
func RequestMessage() *string
```

- *Type:* *string

---

##### `SubresourceName`<sup>Required</sup> <a name="SubresourceName" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.subresourceName"></a>

```go
func SubresourceName() *string
```

- *Type:* *string

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.targetResourceId"></a>

```go
func TargetResourceId() *string
```

- *Type:* *string

---

##### `WebPubsubId`<sup>Required</sup> <a name="WebPubsubId" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.webPubsubId"></a>

```go
func WebPubsubId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WebPubsubSharedPrivateLinkResourceConfig <a name="WebPubsubSharedPrivateLinkResourceConfig" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/webpubsubsharedprivatelinkresource"

&webpubsubsharedprivatelinkresource.WebPubsubSharedPrivateLinkResourceConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	SubresourceName: *string,
	TargetResourceId: *string,
	WebPubsubId: *string,
	Id: *string,
	RequestMessage: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_shared_private_link_resource#name WebPubsubSharedPrivateLinkResource#name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.subresourceName">SubresourceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_shared_private_link_resource#subresource_name WebPubsubSharedPrivateLinkResource#subresource_name}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.targetResourceId">TargetResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_shared_private_link_resource#target_resource_id WebPubsubSharedPrivateLinkResource#target_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.webPubsubId">WebPubsubId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_shared_private_link_resource#web_pubsub_id WebPubsubSharedPrivateLinkResource#web_pubsub_id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_shared_private_link_resource#id WebPubsubSharedPrivateLinkResource#id}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.requestMessage">RequestMessage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_shared_private_link_resource#request_message WebPubsubSharedPrivateLinkResource#request_message}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts">WebPubsubSharedPrivateLinkResourceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_shared_private_link_resource#name WebPubsubSharedPrivateLinkResource#name}.

---

##### `SubresourceName`<sup>Required</sup> <a name="SubresourceName" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.subresourceName"></a>

```go
SubresourceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_shared_private_link_resource#subresource_name WebPubsubSharedPrivateLinkResource#subresource_name}.

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.targetResourceId"></a>

```go
TargetResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_shared_private_link_resource#target_resource_id WebPubsubSharedPrivateLinkResource#target_resource_id}.

---

##### `WebPubsubId`<sup>Required</sup> <a name="WebPubsubId" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.webPubsubId"></a>

```go
WebPubsubId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_shared_private_link_resource#web_pubsub_id WebPubsubSharedPrivateLinkResource#web_pubsub_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_shared_private_link_resource#id WebPubsubSharedPrivateLinkResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RequestMessage`<sup>Optional</sup> <a name="RequestMessage" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.requestMessage"></a>

```go
RequestMessage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_shared_private_link_resource#request_message WebPubsubSharedPrivateLinkResource#request_message}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceConfig.property.timeouts"></a>

```go
Timeouts WebPubsubSharedPrivateLinkResourceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts">WebPubsubSharedPrivateLinkResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_shared_private_link_resource#timeouts WebPubsubSharedPrivateLinkResource#timeouts}

---

### WebPubsubSharedPrivateLinkResourceTimeouts <a name="WebPubsubSharedPrivateLinkResourceTimeouts" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/webpubsubsharedprivatelinkresource"

&webpubsubsharedprivatelinkresource.WebPubsubSharedPrivateLinkResourceTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_shared_private_link_resource#create WebPubsubSharedPrivateLinkResource#create}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_shared_private_link_resource#delete WebPubsubSharedPrivateLinkResource#delete}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_shared_private_link_resource#read WebPubsubSharedPrivateLinkResource#read}. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_shared_private_link_resource#update WebPubsubSharedPrivateLinkResource#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_shared_private_link_resource#create WebPubsubSharedPrivateLinkResource#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_shared_private_link_resource#delete WebPubsubSharedPrivateLinkResource#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_shared_private_link_resource#read WebPubsubSharedPrivateLinkResource#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/web_pubsub_shared_private_link_resource#update WebPubsubSharedPrivateLinkResource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference <a name="WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v6/webpubsubsharedprivatelinkresource"

webpubsubsharedprivatelinkresource.NewWebPubsubSharedPrivateLinkResourceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webPubsubSharedPrivateLinkResource.WebPubsubSharedPrivateLinkResourceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



