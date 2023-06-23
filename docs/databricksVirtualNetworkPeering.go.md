# `azurerm_databricks_virtual_network_peering`

Refer to the Terraform Registory for docs: [`azurerm_databricks_virtual_network_peering`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/databricks_virtual_network_peering).

# `databricksVirtualNetworkPeering` Submodule <a name="`databricksVirtualNetworkPeering` Submodule" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabricksVirtualNetworkPeering <a name="DatabricksVirtualNetworkPeering" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/databricks_virtual_network_peering azurerm_databricks_virtual_network_peering}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/databricksvirtualnetworkpeering"

databricksvirtualnetworkpeering.NewDatabricksVirtualNetworkPeering(scope Construct, id *string, config DatabricksVirtualNetworkPeeringConfig) DatabricksVirtualNetworkPeering
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig">DatabricksVirtualNetworkPeeringConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig">DatabricksVirtualNetworkPeeringConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetAllowForwardedTraffic">ResetAllowForwardedTraffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetAllowGatewayTransit">ResetAllowGatewayTransit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetAllowVirtualNetworkAccess">ResetAllowVirtualNetworkAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetUseRemoteGateways">ResetUseRemoteGateways</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.putTimeouts"></a>

```go
func PutTimeouts(value DatabricksVirtualNetworkPeeringTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts">DatabricksVirtualNetworkPeeringTimeouts</a>

---

##### `ResetAllowForwardedTraffic` <a name="ResetAllowForwardedTraffic" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetAllowForwardedTraffic"></a>

```go
func ResetAllowForwardedTraffic()
```

##### `ResetAllowGatewayTransit` <a name="ResetAllowGatewayTransit" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetAllowGatewayTransit"></a>

```go
func ResetAllowGatewayTransit()
```

##### `ResetAllowVirtualNetworkAccess` <a name="ResetAllowVirtualNetworkAccess" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetAllowVirtualNetworkAccess"></a>

```go
func ResetAllowVirtualNetworkAccess()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUseRemoteGateways` <a name="ResetUseRemoteGateways" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.resetUseRemoteGateways"></a>

```go
func ResetUseRemoteGateways()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/databricksvirtualnetworkpeering"

databricksvirtualnetworkpeering.DatabricksVirtualNetworkPeering_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/databricksvirtualnetworkpeering"

databricksvirtualnetworkpeering.DatabricksVirtualNetworkPeering_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/databricksvirtualnetworkpeering"

databricksvirtualnetworkpeering.DatabricksVirtualNetworkPeering_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.addressSpacePrefixes">AddressSpacePrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference">DatabricksVirtualNetworkPeeringTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.virtualNetworkId">VirtualNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowForwardedTrafficInput">AllowForwardedTrafficInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowGatewayTransitInput">AllowGatewayTransitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowVirtualNetworkAccessInput">AllowVirtualNetworkAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteAddressSpacePrefixesInput">RemoteAddressSpacePrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteVirtualNetworkIdInput">RemoteVirtualNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.useRemoteGatewaysInput">UseRemoteGatewaysInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowForwardedTraffic">AllowForwardedTraffic</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowGatewayTransit">AllowGatewayTransit</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowVirtualNetworkAccess">AllowVirtualNetworkAccess</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteAddressSpacePrefixes">RemoteAddressSpacePrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteVirtualNetworkId">RemoteVirtualNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.useRemoteGateways">UseRemoteGateways</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AddressSpacePrefixes`<sup>Required</sup> <a name="AddressSpacePrefixes" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.addressSpacePrefixes"></a>

```go
func AddressSpacePrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.timeouts"></a>

```go
func Timeouts() DatabricksVirtualNetworkPeeringTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference">DatabricksVirtualNetworkPeeringTimeoutsOutputReference</a>

---

##### `VirtualNetworkId`<sup>Required</sup> <a name="VirtualNetworkId" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.virtualNetworkId"></a>

```go
func VirtualNetworkId() *string
```

- *Type:* *string

---

##### `AllowForwardedTrafficInput`<sup>Optional</sup> <a name="AllowForwardedTrafficInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowForwardedTrafficInput"></a>

```go
func AllowForwardedTrafficInput() interface{}
```

- *Type:* interface{}

---

##### `AllowGatewayTransitInput`<sup>Optional</sup> <a name="AllowGatewayTransitInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowGatewayTransitInput"></a>

```go
func AllowGatewayTransitInput() interface{}
```

- *Type:* interface{}

---

##### `AllowVirtualNetworkAccessInput`<sup>Optional</sup> <a name="AllowVirtualNetworkAccessInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowVirtualNetworkAccessInput"></a>

```go
func AllowVirtualNetworkAccessInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RemoteAddressSpacePrefixesInput`<sup>Optional</sup> <a name="RemoteAddressSpacePrefixesInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteAddressSpacePrefixesInput"></a>

```go
func RemoteAddressSpacePrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RemoteVirtualNetworkIdInput`<sup>Optional</sup> <a name="RemoteVirtualNetworkIdInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteVirtualNetworkIdInput"></a>

```go
func RemoteVirtualNetworkIdInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UseRemoteGatewaysInput`<sup>Optional</sup> <a name="UseRemoteGatewaysInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.useRemoteGatewaysInput"></a>

```go
func UseRemoteGatewaysInput() interface{}
```

- *Type:* interface{}

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `AllowForwardedTraffic`<sup>Required</sup> <a name="AllowForwardedTraffic" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowForwardedTraffic"></a>

```go
func AllowForwardedTraffic() interface{}
```

- *Type:* interface{}

---

##### `AllowGatewayTransit`<sup>Required</sup> <a name="AllowGatewayTransit" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowGatewayTransit"></a>

```go
func AllowGatewayTransit() interface{}
```

- *Type:* interface{}

---

##### `AllowVirtualNetworkAccess`<sup>Required</sup> <a name="AllowVirtualNetworkAccess" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.allowVirtualNetworkAccess"></a>

```go
func AllowVirtualNetworkAccess() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RemoteAddressSpacePrefixes`<sup>Required</sup> <a name="RemoteAddressSpacePrefixes" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteAddressSpacePrefixes"></a>

```go
func RemoteAddressSpacePrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `RemoteVirtualNetworkId`<sup>Required</sup> <a name="RemoteVirtualNetworkId" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.remoteVirtualNetworkId"></a>

```go
func RemoteVirtualNetworkId() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `UseRemoteGateways`<sup>Required</sup> <a name="UseRemoteGateways" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.useRemoteGateways"></a>

```go
func UseRemoteGateways() interface{}
```

- *Type:* interface{}

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeering.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabricksVirtualNetworkPeeringConfig <a name="DatabricksVirtualNetworkPeeringConfig" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/databricksvirtualnetworkpeering"

&databricksvirtualnetworkpeering.DatabricksVirtualNetworkPeeringConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	RemoteAddressSpacePrefixes: *[]*string,
	RemoteVirtualNetworkId: *string,
	ResourceGroupName: *string,
	WorkspaceId: *string,
	AllowForwardedTraffic: interface{},
	AllowGatewayTransit: interface{},
	AllowVirtualNetworkAccess: interface{},
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts,
	UseRemoteGateways: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/databricks_virtual_network_peering#name DatabricksVirtualNetworkPeering#name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.remoteAddressSpacePrefixes">RemoteAddressSpacePrefixes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/databricks_virtual_network_peering#remote_address_space_prefixes DatabricksVirtualNetworkPeering#remote_address_space_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.remoteVirtualNetworkId">RemoteVirtualNetworkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/databricks_virtual_network_peering#remote_virtual_network_id DatabricksVirtualNetworkPeering#remote_virtual_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/databricks_virtual_network_peering#resource_group_name DatabricksVirtualNetworkPeering#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/databricks_virtual_network_peering#workspace_id DatabricksVirtualNetworkPeering#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.allowForwardedTraffic">AllowForwardedTraffic</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/databricks_virtual_network_peering#allow_forwarded_traffic DatabricksVirtualNetworkPeering#allow_forwarded_traffic}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.allowGatewayTransit">AllowGatewayTransit</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/databricks_virtual_network_peering#allow_gateway_transit DatabricksVirtualNetworkPeering#allow_gateway_transit}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.allowVirtualNetworkAccess">AllowVirtualNetworkAccess</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/databricks_virtual_network_peering#allow_virtual_network_access DatabricksVirtualNetworkPeering#allow_virtual_network_access}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/databricks_virtual_network_peering#id DatabricksVirtualNetworkPeering#id}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts">DatabricksVirtualNetworkPeeringTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.useRemoteGateways">UseRemoteGateways</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/databricks_virtual_network_peering#use_remote_gateways DatabricksVirtualNetworkPeering#use_remote_gateways}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/databricks_virtual_network_peering#name DatabricksVirtualNetworkPeering#name}.

---

##### `RemoteAddressSpacePrefixes`<sup>Required</sup> <a name="RemoteAddressSpacePrefixes" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.remoteAddressSpacePrefixes"></a>

```go
RemoteAddressSpacePrefixes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/databricks_virtual_network_peering#remote_address_space_prefixes DatabricksVirtualNetworkPeering#remote_address_space_prefixes}.

---

##### `RemoteVirtualNetworkId`<sup>Required</sup> <a name="RemoteVirtualNetworkId" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.remoteVirtualNetworkId"></a>

```go
RemoteVirtualNetworkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/databricks_virtual_network_peering#remote_virtual_network_id DatabricksVirtualNetworkPeering#remote_virtual_network_id}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/databricks_virtual_network_peering#resource_group_name DatabricksVirtualNetworkPeering#resource_group_name}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/databricks_virtual_network_peering#workspace_id DatabricksVirtualNetworkPeering#workspace_id}.

---

##### `AllowForwardedTraffic`<sup>Optional</sup> <a name="AllowForwardedTraffic" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.allowForwardedTraffic"></a>

```go
AllowForwardedTraffic interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/databricks_virtual_network_peering#allow_forwarded_traffic DatabricksVirtualNetworkPeering#allow_forwarded_traffic}.

---

##### `AllowGatewayTransit`<sup>Optional</sup> <a name="AllowGatewayTransit" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.allowGatewayTransit"></a>

```go
AllowGatewayTransit interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/databricks_virtual_network_peering#allow_gateway_transit DatabricksVirtualNetworkPeering#allow_gateway_transit}.

---

##### `AllowVirtualNetworkAccess`<sup>Optional</sup> <a name="AllowVirtualNetworkAccess" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.allowVirtualNetworkAccess"></a>

```go
AllowVirtualNetworkAccess interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/databricks_virtual_network_peering#allow_virtual_network_access DatabricksVirtualNetworkPeering#allow_virtual_network_access}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/databricks_virtual_network_peering#id DatabricksVirtualNetworkPeering#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.timeouts"></a>

```go
Timeouts DatabricksVirtualNetworkPeeringTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts">DatabricksVirtualNetworkPeeringTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/databricks_virtual_network_peering#timeouts DatabricksVirtualNetworkPeering#timeouts}

---

##### `UseRemoteGateways`<sup>Optional</sup> <a name="UseRemoteGateways" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringConfig.property.useRemoteGateways"></a>

```go
UseRemoteGateways interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/databricks_virtual_network_peering#use_remote_gateways DatabricksVirtualNetworkPeering#use_remote_gateways}.

---

### DatabricksVirtualNetworkPeeringTimeouts <a name="DatabricksVirtualNetworkPeeringTimeouts" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/databricksvirtualnetworkpeering"

&databricksvirtualnetworkpeering.DatabricksVirtualNetworkPeeringTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/databricks_virtual_network_peering#create DatabricksVirtualNetworkPeering#create}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/databricks_virtual_network_peering#delete DatabricksVirtualNetworkPeering#delete}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/databricks_virtual_network_peering#read DatabricksVirtualNetworkPeering#read}. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/databricks_virtual_network_peering#update DatabricksVirtualNetworkPeering#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/databricks_virtual_network_peering#create DatabricksVirtualNetworkPeering#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/databricks_virtual_network_peering#delete DatabricksVirtualNetworkPeering#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/databricks_virtual_network_peering#read DatabricksVirtualNetworkPeering#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.0/docs/resources/databricks_virtual_network_peering#update DatabricksVirtualNetworkPeering#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabricksVirtualNetworkPeeringTimeoutsOutputReference <a name="DatabricksVirtualNetworkPeeringTimeoutsOutputReference" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/databricksvirtualnetworkpeering"

databricksvirtualnetworkpeering.NewDatabricksVirtualNetworkPeeringTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatabricksVirtualNetworkPeeringTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.databricksVirtualNetworkPeering.DatabricksVirtualNetworkPeeringTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



