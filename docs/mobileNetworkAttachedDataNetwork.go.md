# `azurerm_mobile_network_attached_data_network`

Refer to the Terraform Registory for docs: [`azurerm_mobile_network_attached_data_network`](https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network).

# `mobileNetworkAttachedDataNetwork` Submodule <a name="`mobileNetworkAttachedDataNetwork` Submodule" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MobileNetworkAttachedDataNetwork <a name="MobileNetworkAttachedDataNetwork" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network azurerm_mobile_network_attached_data_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/mobilenetworkattacheddatanetwork"

mobilenetworkattacheddatanetwork.NewMobileNetworkAttachedDataNetwork(scope Construct, id *string, config MobileNetworkAttachedDataNetworkConfig) MobileNetworkAttachedDataNetwork
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig">MobileNetworkAttachedDataNetworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig">MobileNetworkAttachedDataNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.putNetworkAddressPortTranslation">PutNetworkAddressPortTranslation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetNetworkAddressPortTranslation">ResetNetworkAddressPortTranslation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetUserEquipmentAddressPoolPrefixes">ResetUserEquipmentAddressPoolPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetUserEquipmentStaticAddressPoolPrefixes">ResetUserEquipmentStaticAddressPoolPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetUserPlaneAccessIpv4Address">ResetUserPlaneAccessIpv4Address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetUserPlaneAccessIpv4Gateway">ResetUserPlaneAccessIpv4Gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetUserPlaneAccessIpv4Subnet">ResetUserPlaneAccessIpv4Subnet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetUserPlaneAccessName">ResetUserPlaneAccessName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutNetworkAddressPortTranslation` <a name="PutNetworkAddressPortTranslation" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.putNetworkAddressPortTranslation"></a>

```go
func PutNetworkAddressPortTranslation(value MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.putNetworkAddressPortTranslation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.putTimeouts"></a>

```go
func PutTimeouts(value MobileNetworkAttachedDataNetworkTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts">MobileNetworkAttachedDataNetworkTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetId"></a>

```go
func ResetId()
```

##### `ResetNetworkAddressPortTranslation` <a name="ResetNetworkAddressPortTranslation" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetNetworkAddressPortTranslation"></a>

```go
func ResetNetworkAddressPortTranslation()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUserEquipmentAddressPoolPrefixes` <a name="ResetUserEquipmentAddressPoolPrefixes" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetUserEquipmentAddressPoolPrefixes"></a>

```go
func ResetUserEquipmentAddressPoolPrefixes()
```

##### `ResetUserEquipmentStaticAddressPoolPrefixes` <a name="ResetUserEquipmentStaticAddressPoolPrefixes" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetUserEquipmentStaticAddressPoolPrefixes"></a>

```go
func ResetUserEquipmentStaticAddressPoolPrefixes()
```

##### `ResetUserPlaneAccessIpv4Address` <a name="ResetUserPlaneAccessIpv4Address" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetUserPlaneAccessIpv4Address"></a>

```go
func ResetUserPlaneAccessIpv4Address()
```

##### `ResetUserPlaneAccessIpv4Gateway` <a name="ResetUserPlaneAccessIpv4Gateway" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetUserPlaneAccessIpv4Gateway"></a>

```go
func ResetUserPlaneAccessIpv4Gateway()
```

##### `ResetUserPlaneAccessIpv4Subnet` <a name="ResetUserPlaneAccessIpv4Subnet" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetUserPlaneAccessIpv4Subnet"></a>

```go
func ResetUserPlaneAccessIpv4Subnet()
```

##### `ResetUserPlaneAccessName` <a name="ResetUserPlaneAccessName" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.resetUserPlaneAccessName"></a>

```go
func ResetUserPlaneAccessName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/mobilenetworkattacheddatanetwork"

mobilenetworkattacheddatanetwork.MobileNetworkAttachedDataNetwork_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/mobilenetworkattacheddatanetwork"

mobilenetworkattacheddatanetwork.MobileNetworkAttachedDataNetwork_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/mobilenetworkattacheddatanetwork"

mobilenetworkattacheddatanetwork.MobileNetworkAttachedDataNetwork_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.networkAddressPortTranslation">NetworkAddressPortTranslation</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference">MobileNetworkAttachedDataNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.dnsAddressesInput">DnsAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.mobileNetworkDataNetworkNameInput">MobileNetworkDataNetworkNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.mobileNetworkPacketCoreDataPlaneIdInput">MobileNetworkPacketCoreDataPlaneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.networkAddressPortTranslationInput">NetworkAddressPortTranslationInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userEquipmentAddressPoolPrefixesInput">UserEquipmentAddressPoolPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userEquipmentStaticAddressPoolPrefixesInput">UserEquipmentStaticAddressPoolPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4AddressInput">UserPlaneAccessIpv4AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4GatewayInput">UserPlaneAccessIpv4GatewayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4SubnetInput">UserPlaneAccessIpv4SubnetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessNameInput">UserPlaneAccessNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.dnsAddresses">DnsAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.mobileNetworkDataNetworkName">MobileNetworkDataNetworkName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.mobileNetworkPacketCoreDataPlaneId">MobileNetworkPacketCoreDataPlaneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userEquipmentAddressPoolPrefixes">UserEquipmentAddressPoolPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userEquipmentStaticAddressPoolPrefixes">UserEquipmentStaticAddressPoolPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4Address">UserPlaneAccessIpv4Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4Gateway">UserPlaneAccessIpv4Gateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4Subnet">UserPlaneAccessIpv4Subnet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessName">UserPlaneAccessName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NetworkAddressPortTranslation`<sup>Required</sup> <a name="NetworkAddressPortTranslation" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.networkAddressPortTranslation"></a>

```go
func NetworkAddressPortTranslation() MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.timeouts"></a>

```go
func Timeouts() MobileNetworkAttachedDataNetworkTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference">MobileNetworkAttachedDataNetworkTimeoutsOutputReference</a>

---

##### `DnsAddressesInput`<sup>Optional</sup> <a name="DnsAddressesInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.dnsAddressesInput"></a>

```go
func DnsAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MobileNetworkDataNetworkNameInput`<sup>Optional</sup> <a name="MobileNetworkDataNetworkNameInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.mobileNetworkDataNetworkNameInput"></a>

```go
func MobileNetworkDataNetworkNameInput() *string
```

- *Type:* *string

---

##### `MobileNetworkPacketCoreDataPlaneIdInput`<sup>Optional</sup> <a name="MobileNetworkPacketCoreDataPlaneIdInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.mobileNetworkPacketCoreDataPlaneIdInput"></a>

```go
func MobileNetworkPacketCoreDataPlaneIdInput() *string
```

- *Type:* *string

---

##### `NetworkAddressPortTranslationInput`<sup>Optional</sup> <a name="NetworkAddressPortTranslationInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.networkAddressPortTranslationInput"></a>

```go
func NetworkAddressPortTranslationInput() MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UserEquipmentAddressPoolPrefixesInput`<sup>Optional</sup> <a name="UserEquipmentAddressPoolPrefixesInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userEquipmentAddressPoolPrefixesInput"></a>

```go
func UserEquipmentAddressPoolPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `UserEquipmentStaticAddressPoolPrefixesInput`<sup>Optional</sup> <a name="UserEquipmentStaticAddressPoolPrefixesInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userEquipmentStaticAddressPoolPrefixesInput"></a>

```go
func UserEquipmentStaticAddressPoolPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `UserPlaneAccessIpv4AddressInput`<sup>Optional</sup> <a name="UserPlaneAccessIpv4AddressInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4AddressInput"></a>

```go
func UserPlaneAccessIpv4AddressInput() *string
```

- *Type:* *string

---

##### `UserPlaneAccessIpv4GatewayInput`<sup>Optional</sup> <a name="UserPlaneAccessIpv4GatewayInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4GatewayInput"></a>

```go
func UserPlaneAccessIpv4GatewayInput() *string
```

- *Type:* *string

---

##### `UserPlaneAccessIpv4SubnetInput`<sup>Optional</sup> <a name="UserPlaneAccessIpv4SubnetInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4SubnetInput"></a>

```go
func UserPlaneAccessIpv4SubnetInput() *string
```

- *Type:* *string

---

##### `UserPlaneAccessNameInput`<sup>Optional</sup> <a name="UserPlaneAccessNameInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessNameInput"></a>

```go
func UserPlaneAccessNameInput() *string
```

- *Type:* *string

---

##### `DnsAddresses`<sup>Required</sup> <a name="DnsAddresses" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.dnsAddresses"></a>

```go
func DnsAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MobileNetworkDataNetworkName`<sup>Required</sup> <a name="MobileNetworkDataNetworkName" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.mobileNetworkDataNetworkName"></a>

```go
func MobileNetworkDataNetworkName() *string
```

- *Type:* *string

---

##### `MobileNetworkPacketCoreDataPlaneId`<sup>Required</sup> <a name="MobileNetworkPacketCoreDataPlaneId" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.mobileNetworkPacketCoreDataPlaneId"></a>

```go
func MobileNetworkPacketCoreDataPlaneId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UserEquipmentAddressPoolPrefixes`<sup>Required</sup> <a name="UserEquipmentAddressPoolPrefixes" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userEquipmentAddressPoolPrefixes"></a>

```go
func UserEquipmentAddressPoolPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `UserEquipmentStaticAddressPoolPrefixes`<sup>Required</sup> <a name="UserEquipmentStaticAddressPoolPrefixes" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userEquipmentStaticAddressPoolPrefixes"></a>

```go
func UserEquipmentStaticAddressPoolPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `UserPlaneAccessIpv4Address`<sup>Required</sup> <a name="UserPlaneAccessIpv4Address" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4Address"></a>

```go
func UserPlaneAccessIpv4Address() *string
```

- *Type:* *string

---

##### `UserPlaneAccessIpv4Gateway`<sup>Required</sup> <a name="UserPlaneAccessIpv4Gateway" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4Gateway"></a>

```go
func UserPlaneAccessIpv4Gateway() *string
```

- *Type:* *string

---

##### `UserPlaneAccessIpv4Subnet`<sup>Required</sup> <a name="UserPlaneAccessIpv4Subnet" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessIpv4Subnet"></a>

```go
func UserPlaneAccessIpv4Subnet() *string
```

- *Type:* *string

---

##### `UserPlaneAccessName`<sup>Required</sup> <a name="UserPlaneAccessName" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.userPlaneAccessName"></a>

```go
func UserPlaneAccessName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetwork.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MobileNetworkAttachedDataNetworkConfig <a name="MobileNetworkAttachedDataNetworkConfig" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/mobilenetworkattacheddatanetwork"

&mobilenetworkattacheddatanetwork.MobileNetworkAttachedDataNetworkConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DnsAddresses: *[]*string,
	Location: *string,
	MobileNetworkDataNetworkName: *string,
	MobileNetworkPacketCoreDataPlaneId: *string,
	Id: *string,
	NetworkAddressPortTranslation: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts,
	UserEquipmentAddressPoolPrefixes: *[]*string,
	UserEquipmentStaticAddressPoolPrefixes: *[]*string,
	UserPlaneAccessIpv4Address: *string,
	UserPlaneAccessIpv4Gateway: *string,
	UserPlaneAccessIpv4Subnet: *string,
	UserPlaneAccessName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.dnsAddresses">DnsAddresses</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#dns_addresses MobileNetworkAttachedDataNetwork#dns_addresses}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#location MobileNetworkAttachedDataNetwork#location}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.mobileNetworkDataNetworkName">MobileNetworkDataNetworkName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#mobile_network_data_network_name MobileNetworkAttachedDataNetwork#mobile_network_data_network_name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.mobileNetworkPacketCoreDataPlaneId">MobileNetworkPacketCoreDataPlaneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#mobile_network_packet_core_data_plane_id MobileNetworkAttachedDataNetwork#mobile_network_packet_core_data_plane_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#id MobileNetworkAttachedDataNetwork#id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.networkAddressPortTranslation">NetworkAddressPortTranslation</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation</a></code> | network_address_port_translation block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#tags MobileNetworkAttachedDataNetwork#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts">MobileNetworkAttachedDataNetworkTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.userEquipmentAddressPoolPrefixes">UserEquipmentAddressPoolPrefixes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#user_equipment_address_pool_prefixes MobileNetworkAttachedDataNetwork#user_equipment_address_pool_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.userEquipmentStaticAddressPoolPrefixes">UserEquipmentStaticAddressPoolPrefixes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#user_equipment_static_address_pool_prefixes MobileNetworkAttachedDataNetwork#user_equipment_static_address_pool_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.userPlaneAccessIpv4Address">UserPlaneAccessIpv4Address</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#user_plane_access_ipv4_address MobileNetworkAttachedDataNetwork#user_plane_access_ipv4_address}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.userPlaneAccessIpv4Gateway">UserPlaneAccessIpv4Gateway</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#user_plane_access_ipv4_gateway MobileNetworkAttachedDataNetwork#user_plane_access_ipv4_gateway}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.userPlaneAccessIpv4Subnet">UserPlaneAccessIpv4Subnet</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#user_plane_access_ipv4_subnet MobileNetworkAttachedDataNetwork#user_plane_access_ipv4_subnet}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.userPlaneAccessName">UserPlaneAccessName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#user_plane_access_name MobileNetworkAttachedDataNetwork#user_plane_access_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DnsAddresses`<sup>Required</sup> <a name="DnsAddresses" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.dnsAddresses"></a>

```go
DnsAddresses *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#dns_addresses MobileNetworkAttachedDataNetwork#dns_addresses}.

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#location MobileNetworkAttachedDataNetwork#location}.

---

##### `MobileNetworkDataNetworkName`<sup>Required</sup> <a name="MobileNetworkDataNetworkName" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.mobileNetworkDataNetworkName"></a>

```go
MobileNetworkDataNetworkName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#mobile_network_data_network_name MobileNetworkAttachedDataNetwork#mobile_network_data_network_name}.

---

##### `MobileNetworkPacketCoreDataPlaneId`<sup>Required</sup> <a name="MobileNetworkPacketCoreDataPlaneId" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.mobileNetworkPacketCoreDataPlaneId"></a>

```go
MobileNetworkPacketCoreDataPlaneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#mobile_network_packet_core_data_plane_id MobileNetworkAttachedDataNetwork#mobile_network_packet_core_data_plane_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#id MobileNetworkAttachedDataNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NetworkAddressPortTranslation`<sup>Optional</sup> <a name="NetworkAddressPortTranslation" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.networkAddressPortTranslation"></a>

```go
NetworkAddressPortTranslation MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation</a>

network_address_port_translation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#network_address_port_translation MobileNetworkAttachedDataNetwork#network_address_port_translation}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#tags MobileNetworkAttachedDataNetwork#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.timeouts"></a>

```go
Timeouts MobileNetworkAttachedDataNetworkTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts">MobileNetworkAttachedDataNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#timeouts MobileNetworkAttachedDataNetwork#timeouts}

---

##### `UserEquipmentAddressPoolPrefixes`<sup>Optional</sup> <a name="UserEquipmentAddressPoolPrefixes" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.userEquipmentAddressPoolPrefixes"></a>

```go
UserEquipmentAddressPoolPrefixes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#user_equipment_address_pool_prefixes MobileNetworkAttachedDataNetwork#user_equipment_address_pool_prefixes}.

---

##### `UserEquipmentStaticAddressPoolPrefixes`<sup>Optional</sup> <a name="UserEquipmentStaticAddressPoolPrefixes" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.userEquipmentStaticAddressPoolPrefixes"></a>

```go
UserEquipmentStaticAddressPoolPrefixes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#user_equipment_static_address_pool_prefixes MobileNetworkAttachedDataNetwork#user_equipment_static_address_pool_prefixes}.

---

##### `UserPlaneAccessIpv4Address`<sup>Optional</sup> <a name="UserPlaneAccessIpv4Address" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.userPlaneAccessIpv4Address"></a>

```go
UserPlaneAccessIpv4Address *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#user_plane_access_ipv4_address MobileNetworkAttachedDataNetwork#user_plane_access_ipv4_address}.

---

##### `UserPlaneAccessIpv4Gateway`<sup>Optional</sup> <a name="UserPlaneAccessIpv4Gateway" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.userPlaneAccessIpv4Gateway"></a>

```go
UserPlaneAccessIpv4Gateway *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#user_plane_access_ipv4_gateway MobileNetworkAttachedDataNetwork#user_plane_access_ipv4_gateway}.

---

##### `UserPlaneAccessIpv4Subnet`<sup>Optional</sup> <a name="UserPlaneAccessIpv4Subnet" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.userPlaneAccessIpv4Subnet"></a>

```go
UserPlaneAccessIpv4Subnet *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#user_plane_access_ipv4_subnet MobileNetworkAttachedDataNetwork#user_plane_access_ipv4_subnet}.

---

##### `UserPlaneAccessName`<sup>Optional</sup> <a name="UserPlaneAccessName" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkConfig.property.userPlaneAccessName"></a>

```go
UserPlaneAccessName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#user_plane_access_name MobileNetworkAttachedDataNetwork#user_plane_access_name}.

---

### MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation <a name="MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/mobilenetworkattacheddatanetwork"

&mobilenetworkattacheddatanetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation {
	IcmpPinholeTimeoutInSeconds: *f64,
	PinholeMaximumNumber: *f64,
	PortRange: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange,
	TcpPinholeTimeoutInSeconds: *f64,
	TcpPortReuseMinimumHoldTimeInSeconds: *f64,
	UdpPinholeTimeoutInSeconds: *f64,
	UdpPortReuseMinimumHoldTimeInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.icmpPinholeTimeoutInSeconds">IcmpPinholeTimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#icmp_pinhole_timeout_in_seconds MobileNetworkAttachedDataNetwork#icmp_pinhole_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.pinholeMaximumNumber">PinholeMaximumNumber</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#pinhole_maximum_number MobileNetworkAttachedDataNetwork#pinhole_maximum_number}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.portRange">PortRange</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange</a></code> | port_range block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.tcpPinholeTimeoutInSeconds">TcpPinholeTimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#tcp_pinhole_timeout_in_seconds MobileNetworkAttachedDataNetwork#tcp_pinhole_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.tcpPortReuseMinimumHoldTimeInSeconds">TcpPortReuseMinimumHoldTimeInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#tcp_port_reuse_minimum_hold_time_in_seconds MobileNetworkAttachedDataNetwork#tcp_port_reuse_minimum_hold_time_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.udpPinholeTimeoutInSeconds">UdpPinholeTimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#udp_pinhole_timeout_in_seconds MobileNetworkAttachedDataNetwork#udp_pinhole_timeout_in_seconds}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.udpPortReuseMinimumHoldTimeInSeconds">UdpPortReuseMinimumHoldTimeInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#udp_port_reuse_minimum_hold_time_in_seconds MobileNetworkAttachedDataNetwork#udp_port_reuse_minimum_hold_time_in_seconds}. |

---

##### `IcmpPinholeTimeoutInSeconds`<sup>Optional</sup> <a name="IcmpPinholeTimeoutInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.icmpPinholeTimeoutInSeconds"></a>

```go
IcmpPinholeTimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#icmp_pinhole_timeout_in_seconds MobileNetworkAttachedDataNetwork#icmp_pinhole_timeout_in_seconds}.

---

##### `PinholeMaximumNumber`<sup>Optional</sup> <a name="PinholeMaximumNumber" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.pinholeMaximumNumber"></a>

```go
PinholeMaximumNumber *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#pinhole_maximum_number MobileNetworkAttachedDataNetwork#pinhole_maximum_number}.

---

##### `PortRange`<sup>Optional</sup> <a name="PortRange" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.portRange"></a>

```go
PortRange MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange</a>

port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#port_range MobileNetworkAttachedDataNetwork#port_range}

---

##### `TcpPinholeTimeoutInSeconds`<sup>Optional</sup> <a name="TcpPinholeTimeoutInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.tcpPinholeTimeoutInSeconds"></a>

```go
TcpPinholeTimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#tcp_pinhole_timeout_in_seconds MobileNetworkAttachedDataNetwork#tcp_pinhole_timeout_in_seconds}.

---

##### `TcpPortReuseMinimumHoldTimeInSeconds`<sup>Optional</sup> <a name="TcpPortReuseMinimumHoldTimeInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.tcpPortReuseMinimumHoldTimeInSeconds"></a>

```go
TcpPortReuseMinimumHoldTimeInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#tcp_port_reuse_minimum_hold_time_in_seconds MobileNetworkAttachedDataNetwork#tcp_port_reuse_minimum_hold_time_in_seconds}.

---

##### `UdpPinholeTimeoutInSeconds`<sup>Optional</sup> <a name="UdpPinholeTimeoutInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.udpPinholeTimeoutInSeconds"></a>

```go
UdpPinholeTimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#udp_pinhole_timeout_in_seconds MobileNetworkAttachedDataNetwork#udp_pinhole_timeout_in_seconds}.

---

##### `UdpPortReuseMinimumHoldTimeInSeconds`<sup>Optional</sup> <a name="UdpPortReuseMinimumHoldTimeInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation.property.udpPortReuseMinimumHoldTimeInSeconds"></a>

```go
UdpPortReuseMinimumHoldTimeInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#udp_port_reuse_minimum_hold_time_in_seconds MobileNetworkAttachedDataNetwork#udp_port_reuse_minimum_hold_time_in_seconds}.

---

### MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange <a name="MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/mobilenetworkattacheddatanetwork"

&mobilenetworkattacheddatanetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange {
	Maximum: *f64,
	Minimum: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange.property.maximum">Maximum</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#maximum MobileNetworkAttachedDataNetwork#maximum}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange.property.minimum">Minimum</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#minimum MobileNetworkAttachedDataNetwork#minimum}. |

---

##### `Maximum`<sup>Optional</sup> <a name="Maximum" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange.property.maximum"></a>

```go
Maximum *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#maximum MobileNetworkAttachedDataNetwork#maximum}.

---

##### `Minimum`<sup>Optional</sup> <a name="Minimum" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange.property.minimum"></a>

```go
Minimum *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#minimum MobileNetworkAttachedDataNetwork#minimum}.

---

### MobileNetworkAttachedDataNetworkTimeouts <a name="MobileNetworkAttachedDataNetworkTimeouts" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/mobilenetworkattacheddatanetwork"

&mobilenetworkattacheddatanetwork.MobileNetworkAttachedDataNetworkTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#create MobileNetworkAttachedDataNetwork#create}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#delete MobileNetworkAttachedDataNetwork#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#read MobileNetworkAttachedDataNetwork#read}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#update MobileNetworkAttachedDataNetwork#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#create MobileNetworkAttachedDataNetwork#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#delete MobileNetworkAttachedDataNetwork#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#read MobileNetworkAttachedDataNetwork#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.76.0/docs/resources/mobile_network_attached_data_network#update MobileNetworkAttachedDataNetwork#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference <a name="MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/mobilenetworkattacheddatanetwork"

mobilenetworkattacheddatanetwork.NewMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.putPortRange">PutPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetIcmpPinholeTimeoutInSeconds">ResetIcmpPinholeTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetPinholeMaximumNumber">ResetPinholeMaximumNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetPortRange">ResetPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetTcpPinholeTimeoutInSeconds">ResetTcpPinholeTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetTcpPortReuseMinimumHoldTimeInSeconds">ResetTcpPortReuseMinimumHoldTimeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetUdpPinholeTimeoutInSeconds">ResetUdpPinholeTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetUdpPortReuseMinimumHoldTimeInSeconds">ResetUdpPortReuseMinimumHoldTimeInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPortRange` <a name="PutPortRange" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.putPortRange"></a>

```go
func PutPortRange(value MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.putPortRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange</a>

---

##### `ResetIcmpPinholeTimeoutInSeconds` <a name="ResetIcmpPinholeTimeoutInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetIcmpPinholeTimeoutInSeconds"></a>

```go
func ResetIcmpPinholeTimeoutInSeconds()
```

##### `ResetPinholeMaximumNumber` <a name="ResetPinholeMaximumNumber" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetPinholeMaximumNumber"></a>

```go
func ResetPinholeMaximumNumber()
```

##### `ResetPortRange` <a name="ResetPortRange" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetPortRange"></a>

```go
func ResetPortRange()
```

##### `ResetTcpPinholeTimeoutInSeconds` <a name="ResetTcpPinholeTimeoutInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetTcpPinholeTimeoutInSeconds"></a>

```go
func ResetTcpPinholeTimeoutInSeconds()
```

##### `ResetTcpPortReuseMinimumHoldTimeInSeconds` <a name="ResetTcpPortReuseMinimumHoldTimeInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetTcpPortReuseMinimumHoldTimeInSeconds"></a>

```go
func ResetTcpPortReuseMinimumHoldTimeInSeconds()
```

##### `ResetUdpPinholeTimeoutInSeconds` <a name="ResetUdpPinholeTimeoutInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetUdpPinholeTimeoutInSeconds"></a>

```go
func ResetUdpPinholeTimeoutInSeconds()
```

##### `ResetUdpPortReuseMinimumHoldTimeInSeconds` <a name="ResetUdpPortReuseMinimumHoldTimeInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.resetUdpPortReuseMinimumHoldTimeInSeconds"></a>

```go
func ResetUdpPortReuseMinimumHoldTimeInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.portRange">PortRange</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.icmpPinholeTimeoutInSecondsInput">IcmpPinholeTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.pinholeMaximumNumberInput">PinholeMaximumNumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.portRangeInput">PortRangeInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.tcpPinholeTimeoutInSecondsInput">TcpPinholeTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.tcpPortReuseMinimumHoldTimeInSecondsInput">TcpPortReuseMinimumHoldTimeInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.udpPinholeTimeoutInSecondsInput">UdpPinholeTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.udpPortReuseMinimumHoldTimeInSecondsInput">UdpPortReuseMinimumHoldTimeInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.icmpPinholeTimeoutInSeconds">IcmpPinholeTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.pinholeMaximumNumber">PinholeMaximumNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.tcpPinholeTimeoutInSeconds">TcpPinholeTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.tcpPortReuseMinimumHoldTimeInSeconds">TcpPortReuseMinimumHoldTimeInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.udpPinholeTimeoutInSeconds">UdpPinholeTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.udpPortReuseMinimumHoldTimeInSeconds">UdpPortReuseMinimumHoldTimeInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortRange`<sup>Required</sup> <a name="PortRange" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.portRange"></a>

```go
func PortRange() MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference</a>

---

##### `IcmpPinholeTimeoutInSecondsInput`<sup>Optional</sup> <a name="IcmpPinholeTimeoutInSecondsInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.icmpPinholeTimeoutInSecondsInput"></a>

```go
func IcmpPinholeTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `PinholeMaximumNumberInput`<sup>Optional</sup> <a name="PinholeMaximumNumberInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.pinholeMaximumNumberInput"></a>

```go
func PinholeMaximumNumberInput() *f64
```

- *Type:* *f64

---

##### `PortRangeInput`<sup>Optional</sup> <a name="PortRangeInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.portRangeInput"></a>

```go
func PortRangeInput() MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange</a>

---

##### `TcpPinholeTimeoutInSecondsInput`<sup>Optional</sup> <a name="TcpPinholeTimeoutInSecondsInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.tcpPinholeTimeoutInSecondsInput"></a>

```go
func TcpPinholeTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `TcpPortReuseMinimumHoldTimeInSecondsInput`<sup>Optional</sup> <a name="TcpPortReuseMinimumHoldTimeInSecondsInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.tcpPortReuseMinimumHoldTimeInSecondsInput"></a>

```go
func TcpPortReuseMinimumHoldTimeInSecondsInput() *f64
```

- *Type:* *f64

---

##### `UdpPinholeTimeoutInSecondsInput`<sup>Optional</sup> <a name="UdpPinholeTimeoutInSecondsInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.udpPinholeTimeoutInSecondsInput"></a>

```go
func UdpPinholeTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `UdpPortReuseMinimumHoldTimeInSecondsInput`<sup>Optional</sup> <a name="UdpPortReuseMinimumHoldTimeInSecondsInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.udpPortReuseMinimumHoldTimeInSecondsInput"></a>

```go
func UdpPortReuseMinimumHoldTimeInSecondsInput() *f64
```

- *Type:* *f64

---

##### `IcmpPinholeTimeoutInSeconds`<sup>Required</sup> <a name="IcmpPinholeTimeoutInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.icmpPinholeTimeoutInSeconds"></a>

```go
func IcmpPinholeTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `PinholeMaximumNumber`<sup>Required</sup> <a name="PinholeMaximumNumber" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.pinholeMaximumNumber"></a>

```go
func PinholeMaximumNumber() *f64
```

- *Type:* *f64

---

##### `TcpPinholeTimeoutInSeconds`<sup>Required</sup> <a name="TcpPinholeTimeoutInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.tcpPinholeTimeoutInSeconds"></a>

```go
func TcpPinholeTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `TcpPortReuseMinimumHoldTimeInSeconds`<sup>Required</sup> <a name="TcpPortReuseMinimumHoldTimeInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.tcpPortReuseMinimumHoldTimeInSeconds"></a>

```go
func TcpPortReuseMinimumHoldTimeInSeconds() *f64
```

- *Type:* *f64

---

##### `UdpPinholeTimeoutInSeconds`<sup>Required</sup> <a name="UdpPinholeTimeoutInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.udpPinholeTimeoutInSeconds"></a>

```go
func UdpPinholeTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `UdpPortReuseMinimumHoldTimeInSeconds`<sup>Required</sup> <a name="UdpPortReuseMinimumHoldTimeInSeconds" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.udpPortReuseMinimumHoldTimeInSeconds"></a>

```go
func UdpPortReuseMinimumHoldTimeInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationOutputReference.property.internalValue"></a>

```go
func InternalValue() MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslation</a>

---


### MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference <a name="MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/mobilenetworkattacheddatanetwork"

mobilenetworkattacheddatanetwork.NewMobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.resetMaximum">ResetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.resetMinimum">ResetMinimum</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximum` <a name="ResetMaximum" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.resetMaximum"></a>

```go
func ResetMaximum()
```

##### `ResetMinimum` <a name="ResetMinimum" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.resetMinimum"></a>

```go
func ResetMinimum()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.maximumInput">MaximumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.minimumInput">MinimumInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.maximum">Maximum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.minimum">Minimum</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaximumInput`<sup>Optional</sup> <a name="MaximumInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.maximumInput"></a>

```go
func MaximumInput() *f64
```

- *Type:* *f64

---

##### `MinimumInput`<sup>Optional</sup> <a name="MinimumInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.minimumInput"></a>

```go
func MinimumInput() *f64
```

- *Type:* *f64

---

##### `Maximum`<sup>Required</sup> <a name="Maximum" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.maximum"></a>

```go
func Maximum() *f64
```

- *Type:* *f64

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.minimum"></a>

```go
func Minimum() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange">MobileNetworkAttachedDataNetworkNetworkAddressPortTranslationPortRange</a>

---


### MobileNetworkAttachedDataNetworkTimeoutsOutputReference <a name="MobileNetworkAttachedDataNetworkTimeoutsOutputReference" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/mobilenetworkattacheddatanetwork"

mobilenetworkattacheddatanetwork.NewMobileNetworkAttachedDataNetworkTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MobileNetworkAttachedDataNetworkTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.mobileNetworkAttachedDataNetwork.MobileNetworkAttachedDataNetworkTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



