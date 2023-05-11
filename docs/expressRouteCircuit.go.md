# `azurerm_express_route_circuit`

Refer to the Terraform Registory for docs: [`azurerm_express_route_circuit`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit).

# `expressRouteCircuit` Submodule <a name="`expressRouteCircuit` Submodule" id="@cdktf/provider-azurerm.expressRouteCircuit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExpressRouteCircuit <a name="ExpressRouteCircuit" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit azurerm_express_route_circuit}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/expressroutecircuit"

expressroutecircuit.NewExpressRouteCircuit(scope Construct, id *string, config ExpressRouteCircuitConfig) ExpressRouteCircuit
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig">ExpressRouteCircuitConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig">ExpressRouteCircuitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.putSku">PutSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetAllowClassicOperations">ResetAllowClassicOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetAuthorizationKey">ResetAuthorizationKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetBandwidthInGbps">ResetBandwidthInGbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetBandwidthInMbps">ResetBandwidthInMbps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetExpressRoutePortId">ResetExpressRoutePortId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetPeeringLocation">ResetPeeringLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetServiceProviderName">ResetServiceProviderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutSku` <a name="PutSku" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.putSku"></a>

```go
func PutSku(value ExpressRouteCircuitSku)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.putSku.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSku">ExpressRouteCircuitSku</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.putTimeouts"></a>

```go
func PutTimeouts(value ExpressRouteCircuitTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeouts">ExpressRouteCircuitTimeouts</a>

---

##### `ResetAllowClassicOperations` <a name="ResetAllowClassicOperations" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetAllowClassicOperations"></a>

```go
func ResetAllowClassicOperations()
```

##### `ResetAuthorizationKey` <a name="ResetAuthorizationKey" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetAuthorizationKey"></a>

```go
func ResetAuthorizationKey()
```

##### `ResetBandwidthInGbps` <a name="ResetBandwidthInGbps" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetBandwidthInGbps"></a>

```go
func ResetBandwidthInGbps()
```

##### `ResetBandwidthInMbps` <a name="ResetBandwidthInMbps" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetBandwidthInMbps"></a>

```go
func ResetBandwidthInMbps()
```

##### `ResetExpressRoutePortId` <a name="ResetExpressRoutePortId" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetExpressRoutePortId"></a>

```go
func ResetExpressRoutePortId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetId"></a>

```go
func ResetId()
```

##### `ResetPeeringLocation` <a name="ResetPeeringLocation" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetPeeringLocation"></a>

```go
func ResetPeeringLocation()
```

##### `ResetServiceProviderName` <a name="ResetServiceProviderName" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetServiceProviderName"></a>

```go
func ResetServiceProviderName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/expressroutecircuit"

expressroutecircuit.ExpressRouteCircuit_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/expressroutecircuit"

expressroutecircuit.ExpressRouteCircuit_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/expressroutecircuit"

expressroutecircuit.ExpressRouteCircuit_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.serviceKey">ServiceKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.serviceProviderProvisioningState">ServiceProviderProvisioningState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.sku">Sku</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference">ExpressRouteCircuitSkuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference">ExpressRouteCircuitTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.allowClassicOperationsInput">AllowClassicOperationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.authorizationKeyInput">AuthorizationKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.bandwidthInGbpsInput">BandwidthInGbpsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.bandwidthInMbpsInput">BandwidthInMbpsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.expressRoutePortIdInput">ExpressRoutePortIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.peeringLocationInput">PeeringLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.serviceProviderNameInput">ServiceProviderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.skuInput">SkuInput</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSku">ExpressRouteCircuitSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.allowClassicOperations">AllowClassicOperations</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.authorizationKey">AuthorizationKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.bandwidthInGbps">BandwidthInGbps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.bandwidthInMbps">BandwidthInMbps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.expressRoutePortId">ExpressRoutePortId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.peeringLocation">PeeringLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.serviceProviderName">ServiceProviderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ServiceKey`<sup>Required</sup> <a name="ServiceKey" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.serviceKey"></a>

```go
func ServiceKey() *string
```

- *Type:* *string

---

##### `ServiceProviderProvisioningState`<sup>Required</sup> <a name="ServiceProviderProvisioningState" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.serviceProviderProvisioningState"></a>

```go
func ServiceProviderProvisioningState() *string
```

- *Type:* *string

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.sku"></a>

```go
func Sku() ExpressRouteCircuitSkuOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference">ExpressRouteCircuitSkuOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.timeouts"></a>

```go
func Timeouts() ExpressRouteCircuitTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference">ExpressRouteCircuitTimeoutsOutputReference</a>

---

##### `AllowClassicOperationsInput`<sup>Optional</sup> <a name="AllowClassicOperationsInput" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.allowClassicOperationsInput"></a>

```go
func AllowClassicOperationsInput() interface{}
```

- *Type:* interface{}

---

##### `AuthorizationKeyInput`<sup>Optional</sup> <a name="AuthorizationKeyInput" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.authorizationKeyInput"></a>

```go
func AuthorizationKeyInput() *string
```

- *Type:* *string

---

##### `BandwidthInGbpsInput`<sup>Optional</sup> <a name="BandwidthInGbpsInput" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.bandwidthInGbpsInput"></a>

```go
func BandwidthInGbpsInput() *f64
```

- *Type:* *f64

---

##### `BandwidthInMbpsInput`<sup>Optional</sup> <a name="BandwidthInMbpsInput" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.bandwidthInMbpsInput"></a>

```go
func BandwidthInMbpsInput() *f64
```

- *Type:* *f64

---

##### `ExpressRoutePortIdInput`<sup>Optional</sup> <a name="ExpressRoutePortIdInput" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.expressRoutePortIdInput"></a>

```go
func ExpressRoutePortIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PeeringLocationInput`<sup>Optional</sup> <a name="PeeringLocationInput" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.peeringLocationInput"></a>

```go
func PeeringLocationInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `ServiceProviderNameInput`<sup>Optional</sup> <a name="ServiceProviderNameInput" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.serviceProviderNameInput"></a>

```go
func ServiceProviderNameInput() *string
```

- *Type:* *string

---

##### `SkuInput`<sup>Optional</sup> <a name="SkuInput" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.skuInput"></a>

```go
func SkuInput() ExpressRouteCircuitSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSku">ExpressRouteCircuitSku</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AllowClassicOperations`<sup>Required</sup> <a name="AllowClassicOperations" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.allowClassicOperations"></a>

```go
func AllowClassicOperations() interface{}
```

- *Type:* interface{}

---

##### `AuthorizationKey`<sup>Required</sup> <a name="AuthorizationKey" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.authorizationKey"></a>

```go
func AuthorizationKey() *string
```

- *Type:* *string

---

##### `BandwidthInGbps`<sup>Required</sup> <a name="BandwidthInGbps" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.bandwidthInGbps"></a>

```go
func BandwidthInGbps() *f64
```

- *Type:* *f64

---

##### `BandwidthInMbps`<sup>Required</sup> <a name="BandwidthInMbps" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.bandwidthInMbps"></a>

```go
func BandwidthInMbps() *f64
```

- *Type:* *f64

---

##### `ExpressRoutePortId`<sup>Required</sup> <a name="ExpressRoutePortId" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.expressRoutePortId"></a>

```go
func ExpressRoutePortId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PeeringLocation`<sup>Required</sup> <a name="PeeringLocation" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.peeringLocation"></a>

```go
func PeeringLocation() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `ServiceProviderName`<sup>Required</sup> <a name="ServiceProviderName" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.serviceProviderName"></a>

```go
func ServiceProviderName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuit.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ExpressRouteCircuitConfig <a name="ExpressRouteCircuitConfig" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/expressroutecircuit"

&expressroutecircuit.ExpressRouteCircuitConfig {
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
	Sku: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.expressRouteCircuit.ExpressRouteCircuitSku,
	AllowClassicOperations: interface{},
	AuthorizationKey: *string,
	BandwidthInGbps: *f64,
	BandwidthInMbps: *f64,
	ExpressRoutePortId: *string,
	Id: *string,
	PeeringLocation: *string,
	ServiceProviderName: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.expressRouteCircuit.ExpressRouteCircuitTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#location ExpressRouteCircuit#location}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#name ExpressRouteCircuit#name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#resource_group_name ExpressRouteCircuit#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.sku">Sku</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSku">ExpressRouteCircuitSku</a></code> | sku block. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.allowClassicOperations">AllowClassicOperations</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#allow_classic_operations ExpressRouteCircuit#allow_classic_operations}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.authorizationKey">AuthorizationKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#authorization_key ExpressRouteCircuit#authorization_key}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.bandwidthInGbps">BandwidthInGbps</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#bandwidth_in_gbps ExpressRouteCircuit#bandwidth_in_gbps}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.bandwidthInMbps">BandwidthInMbps</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#bandwidth_in_mbps ExpressRouteCircuit#bandwidth_in_mbps}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.expressRoutePortId">ExpressRoutePortId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#express_route_port_id ExpressRouteCircuit#express_route_port_id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#id ExpressRouteCircuit#id}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.peeringLocation">PeeringLocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#peering_location ExpressRouteCircuit#peering_location}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.serviceProviderName">ServiceProviderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#service_provider_name ExpressRouteCircuit#service_provider_name}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#tags ExpressRouteCircuit#tags}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeouts">ExpressRouteCircuitTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#location ExpressRouteCircuit#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#name ExpressRouteCircuit#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#resource_group_name ExpressRouteCircuit#resource_group_name}.

---

##### `Sku`<sup>Required</sup> <a name="Sku" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.sku"></a>

```go
Sku ExpressRouteCircuitSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSku">ExpressRouteCircuitSku</a>

sku block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#sku ExpressRouteCircuit#sku}

---

##### `AllowClassicOperations`<sup>Optional</sup> <a name="AllowClassicOperations" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.allowClassicOperations"></a>

```go
AllowClassicOperations interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#allow_classic_operations ExpressRouteCircuit#allow_classic_operations}.

---

##### `AuthorizationKey`<sup>Optional</sup> <a name="AuthorizationKey" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.authorizationKey"></a>

```go
AuthorizationKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#authorization_key ExpressRouteCircuit#authorization_key}.

---

##### `BandwidthInGbps`<sup>Optional</sup> <a name="BandwidthInGbps" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.bandwidthInGbps"></a>

```go
BandwidthInGbps *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#bandwidth_in_gbps ExpressRouteCircuit#bandwidth_in_gbps}.

---

##### `BandwidthInMbps`<sup>Optional</sup> <a name="BandwidthInMbps" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.bandwidthInMbps"></a>

```go
BandwidthInMbps *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#bandwidth_in_mbps ExpressRouteCircuit#bandwidth_in_mbps}.

---

##### `ExpressRoutePortId`<sup>Optional</sup> <a name="ExpressRoutePortId" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.expressRoutePortId"></a>

```go
ExpressRoutePortId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#express_route_port_id ExpressRouteCircuit#express_route_port_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#id ExpressRouteCircuit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PeeringLocation`<sup>Optional</sup> <a name="PeeringLocation" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.peeringLocation"></a>

```go
PeeringLocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#peering_location ExpressRouteCircuit#peering_location}.

---

##### `ServiceProviderName`<sup>Optional</sup> <a name="ServiceProviderName" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.serviceProviderName"></a>

```go
ServiceProviderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#service_provider_name ExpressRouteCircuit#service_provider_name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#tags ExpressRouteCircuit#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitConfig.property.timeouts"></a>

```go
Timeouts ExpressRouteCircuitTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeouts">ExpressRouteCircuitTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#timeouts ExpressRouteCircuit#timeouts}

---

### ExpressRouteCircuitSku <a name="ExpressRouteCircuitSku" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSku"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSku.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/expressroutecircuit"

&expressroutecircuit.ExpressRouteCircuitSku {
	Family: *string,
	Tier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSku.property.family">Family</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#family ExpressRouteCircuit#family}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSku.property.tier">Tier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#tier ExpressRouteCircuit#tier}. |

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSku.property.family"></a>

```go
Family *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#family ExpressRouteCircuit#family}.

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSku.property.tier"></a>

```go
Tier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#tier ExpressRouteCircuit#tier}.

---

### ExpressRouteCircuitTimeouts <a name="ExpressRouteCircuitTimeouts" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/expressroutecircuit"

&expressroutecircuit.ExpressRouteCircuitTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#create ExpressRouteCircuit#create}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#delete ExpressRouteCircuit#delete}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#read ExpressRouteCircuit#read}. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#update ExpressRouteCircuit#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#create ExpressRouteCircuit#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#delete ExpressRouteCircuit#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#read ExpressRouteCircuit#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/express_route_circuit#update ExpressRouteCircuit#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ExpressRouteCircuitSkuOutputReference <a name="ExpressRouteCircuitSkuOutputReference" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/expressroutecircuit"

expressroutecircuit.NewExpressRouteCircuitSkuOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ExpressRouteCircuitSkuOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.property.familyInput">FamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.property.tierInput">TierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.property.family">Family</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.property.tier">Tier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSku">ExpressRouteCircuitSku</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FamilyInput`<sup>Optional</sup> <a name="FamilyInput" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.property.familyInput"></a>

```go
func FamilyInput() *string
```

- *Type:* *string

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.property.tierInput"></a>

```go
func TierInput() *string
```

- *Type:* *string

---

##### `Family`<sup>Required</sup> <a name="Family" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.property.family"></a>

```go
func Family() *string
```

- *Type:* *string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.property.tier"></a>

```go
func Tier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSkuOutputReference.property.internalValue"></a>

```go
func InternalValue() ExpressRouteCircuitSku
```

- *Type:* <a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitSku">ExpressRouteCircuitSku</a>

---


### ExpressRouteCircuitTimeoutsOutputReference <a name="ExpressRouteCircuitTimeoutsOutputReference" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/expressroutecircuit"

expressroutecircuit.NewExpressRouteCircuitTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ExpressRouteCircuitTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.expressRouteCircuit.ExpressRouteCircuitTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



