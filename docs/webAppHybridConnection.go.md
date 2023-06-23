# `azurerm_web_app_hybrid_connection`

Refer to the Terraform Registory for docs: [`azurerm_web_app_hybrid_connection`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/web_app_hybrid_connection).

# `webAppHybridConnection` Submodule <a name="`webAppHybridConnection` Submodule" id="@cdktf/provider-azurerm.webAppHybridConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WebAppHybridConnection <a name="WebAppHybridConnection" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/web_app_hybrid_connection azurerm_web_app_hybrid_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapphybridconnection"

webapphybridconnection.NewWebAppHybridConnection(scope Construct, id *string, config WebAppHybridConnectionConfig) WebAppHybridConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionConfig">WebAppHybridConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionConfig">WebAppHybridConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.resetSendKeyName">ResetSendKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.putTimeouts"></a>

```go
func PutTimeouts(value WebAppHybridConnectionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeouts">WebAppHybridConnectionTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.resetId"></a>

```go
func ResetId()
```

##### `ResetSendKeyName` <a name="ResetSendKeyName" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.resetSendKeyName"></a>

```go
func ResetSendKeyName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapphybridconnection"

webapphybridconnection.WebAppHybridConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapphybridconnection"

webapphybridconnection.WebAppHybridConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapphybridconnection"

webapphybridconnection.WebAppHybridConnection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.namespaceName">NamespaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.relayName">RelayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.sendKeyValue">SendKeyValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.serviceBusNamespace">ServiceBusNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.serviceBusSuffix">ServiceBusSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference">WebAppHybridConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.relayIdInput">RelayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.sendKeyNameInput">SendKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.webAppIdInput">WebAppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.relayId">RelayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.sendKeyName">SendKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.webAppId">WebAppId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.namespaceName"></a>

```go
func NamespaceName() *string
```

- *Type:* *string

---

##### `RelayName`<sup>Required</sup> <a name="RelayName" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.relayName"></a>

```go
func RelayName() *string
```

- *Type:* *string

---

##### `SendKeyValue`<sup>Required</sup> <a name="SendKeyValue" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.sendKeyValue"></a>

```go
func SendKeyValue() *string
```

- *Type:* *string

---

##### `ServiceBusNamespace`<sup>Required</sup> <a name="ServiceBusNamespace" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.serviceBusNamespace"></a>

```go
func ServiceBusNamespace() *string
```

- *Type:* *string

---

##### `ServiceBusSuffix`<sup>Required</sup> <a name="ServiceBusSuffix" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.serviceBusSuffix"></a>

```go
func ServiceBusSuffix() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.timeouts"></a>

```go
func Timeouts() WebAppHybridConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference">WebAppHybridConnectionTimeoutsOutputReference</a>

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `RelayIdInput`<sup>Optional</sup> <a name="RelayIdInput" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.relayIdInput"></a>

```go
func RelayIdInput() *string
```

- *Type:* *string

---

##### `SendKeyNameInput`<sup>Optional</sup> <a name="SendKeyNameInput" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.sendKeyNameInput"></a>

```go
func SendKeyNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WebAppIdInput`<sup>Optional</sup> <a name="WebAppIdInput" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.webAppIdInput"></a>

```go
func WebAppIdInput() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `RelayId`<sup>Required</sup> <a name="RelayId" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.relayId"></a>

```go
func RelayId() *string
```

- *Type:* *string

---

##### `SendKeyName`<sup>Required</sup> <a name="SendKeyName" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.sendKeyName"></a>

```go
func SendKeyName() *string
```

- *Type:* *string

---

##### `WebAppId`<sup>Required</sup> <a name="WebAppId" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.webAppId"></a>

```go
func WebAppId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WebAppHybridConnectionConfig <a name="WebAppHybridConnectionConfig" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapphybridconnection"

&webapphybridconnection.WebAppHybridConnectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Hostname: *string,
	Port: *f64,
	RelayId: *string,
	WebAppId: *string,
	Id: *string,
	SendKeyName: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.webAppHybridConnection.WebAppHybridConnectionTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionConfig.property.hostname">Hostname</a></code> | <code>*string</code> | The hostname of the endpoint. |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionConfig.property.port">Port</a></code> | <code>*f64</code> | The port to use for the endpoint. |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionConfig.property.relayId">RelayId</a></code> | <code>*string</code> | The ID of the Relay Hybrid Connection to use. |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionConfig.property.webAppId">WebAppId</a></code> | <code>*string</code> | The ID of the Web App for this Hybrid Connection. |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/web_app_hybrid_connection#id WebAppHybridConnection#id}. |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionConfig.property.sendKeyName">SendKeyName</a></code> | <code>*string</code> | The name of the Relay key with `Send` permission to use. Defaults to `RootManageSharedAccessKey`. |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeouts">WebAppHybridConnectionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionConfig.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

The hostname of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/web_app_hybrid_connection#hostname WebAppHybridConnection#hostname}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port to use for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/web_app_hybrid_connection#port WebAppHybridConnection#port}

---

##### `RelayId`<sup>Required</sup> <a name="RelayId" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionConfig.property.relayId"></a>

```go
RelayId *string
```

- *Type:* *string

The ID of the Relay Hybrid Connection to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/web_app_hybrid_connection#relay_id WebAppHybridConnection#relay_id}

---

##### `WebAppId`<sup>Required</sup> <a name="WebAppId" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionConfig.property.webAppId"></a>

```go
WebAppId *string
```

- *Type:* *string

The ID of the Web App for this Hybrid Connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/web_app_hybrid_connection#web_app_id WebAppHybridConnection#web_app_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/web_app_hybrid_connection#id WebAppHybridConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SendKeyName`<sup>Optional</sup> <a name="SendKeyName" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionConfig.property.sendKeyName"></a>

```go
SendKeyName *string
```

- *Type:* *string

The name of the Relay key with `Send` permission to use. Defaults to `RootManageSharedAccessKey`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/web_app_hybrid_connection#send_key_name WebAppHybridConnection#send_key_name}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionConfig.property.timeouts"></a>

```go
Timeouts WebAppHybridConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeouts">WebAppHybridConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/web_app_hybrid_connection#timeouts WebAppHybridConnection#timeouts}

---

### WebAppHybridConnectionTimeouts <a name="WebAppHybridConnectionTimeouts" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapphybridconnection"

&webapphybridconnection.WebAppHybridConnectionTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/web_app_hybrid_connection#create WebAppHybridConnection#create}. |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/web_app_hybrid_connection#delete WebAppHybridConnection#delete}. |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/web_app_hybrid_connection#read WebAppHybridConnection#read}. |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/web_app_hybrid_connection#update WebAppHybridConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/web_app_hybrid_connection#create WebAppHybridConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/web_app_hybrid_connection#delete WebAppHybridConnection#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/web_app_hybrid_connection#read WebAppHybridConnection#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/web_app_hybrid_connection#update WebAppHybridConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### WebAppHybridConnectionTimeoutsOutputReference <a name="WebAppHybridConnectionTimeoutsOutputReference" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/webapphybridconnection"

webapphybridconnection.NewWebAppHybridConnectionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WebAppHybridConnectionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.webAppHybridConnection.WebAppHybridConnectionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



