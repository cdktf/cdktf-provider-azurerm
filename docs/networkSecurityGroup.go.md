# `azurerm_network_security_group`

Refer to the Terraform Registory for docs: [`azurerm_network_security_group`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group).

# `networkSecurityGroup` Submodule <a name="`networkSecurityGroup` Submodule" id="@cdktf/provider-azurerm.networkSecurityGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkSecurityGroup <a name="NetworkSecurityGroup" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group azurerm_network_security_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/networksecuritygroup"

networksecuritygroup.NewNetworkSecurityGroup(scope Construct, id *string, config NetworkSecurityGroupConfig) NetworkSecurityGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig">NetworkSecurityGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig">NetworkSecurityGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.putSecurityRule">PutSecurityRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.resetSecurityRule">ResetSecurityRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutSecurityRule` <a name="PutSecurityRule" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.putSecurityRule"></a>

```go
func PutSecurityRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.putSecurityRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.putTimeouts"></a>

```go
func PutTimeouts(value NetworkSecurityGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts">NetworkSecurityGroupTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetSecurityRule` <a name="ResetSecurityRule" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.resetSecurityRule"></a>

```go
func ResetSecurityRule()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/networksecuritygroup"

networksecuritygroup.NetworkSecurityGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/networksecuritygroup"

networksecuritygroup.NetworkSecurityGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/networksecuritygroup"

networksecuritygroup.NetworkSecurityGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.securityRule">SecurityRule</a></code> | <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList">NetworkSecurityGroupSecurityRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference">NetworkSecurityGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.securityRuleInput">SecurityRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SecurityRule`<sup>Required</sup> <a name="SecurityRule" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.securityRule"></a>

```go
func SecurityRule() NetworkSecurityGroupSecurityRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList">NetworkSecurityGroupSecurityRuleList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.timeouts"></a>

```go
func Timeouts() NetworkSecurityGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference">NetworkSecurityGroupTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `SecurityRuleInput`<sup>Optional</sup> <a name="SecurityRuleInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.securityRuleInput"></a>

```go
func SecurityRuleInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkSecurityGroupConfig <a name="NetworkSecurityGroupConfig" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/networksecuritygroup"

&networksecuritygroup.NetworkSecurityGroupConfig {
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
	Id: *string,
	SecurityRule: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.networkSecurityGroup.NetworkSecurityGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#location NetworkSecurityGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#name NetworkSecurityGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#resource_group_name NetworkSecurityGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#id NetworkSecurityGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.securityRule">SecurityRule</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#security_rule NetworkSecurityGroup#security_rule}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#tags NetworkSecurityGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts">NetworkSecurityGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#location NetworkSecurityGroup#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#name NetworkSecurityGroup#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#resource_group_name NetworkSecurityGroup#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#id NetworkSecurityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SecurityRule`<sup>Optional</sup> <a name="SecurityRule" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.securityRule"></a>

```go
SecurityRule interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#security_rule NetworkSecurityGroup#security_rule}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#tags NetworkSecurityGroup#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupConfig.property.timeouts"></a>

```go
Timeouts NetworkSecurityGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts">NetworkSecurityGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#timeouts NetworkSecurityGroup#timeouts}

---

### NetworkSecurityGroupSecurityRule <a name="NetworkSecurityGroupSecurityRule" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/networksecuritygroup"

&networksecuritygroup.NetworkSecurityGroupSecurityRule {
	Access: *string,
	Description: *string,
	DestinationAddressPrefix: *string,
	DestinationAddressPrefixes: *[]*string,
	DestinationApplicationSecurityGroupIds: *[]*string,
	DestinationPortRange: *string,
	DestinationPortRanges: *[]*string,
	Direction: *string,
	Name: *string,
	Priority: *f64,
	Protocol: *string,
	SourceAddressPrefix: *string,
	SourceAddressPrefixes: *[]*string,
	SourceApplicationSecurityGroupIds: *[]*string,
	SourcePortRange: *string,
	SourcePortRanges: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.access">Access</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#access NetworkSecurityGroup#access}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#description NetworkSecurityGroup#description}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.destinationAddressPrefix">DestinationAddressPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#destination_address_prefix NetworkSecurityGroup#destination_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.destinationAddressPrefixes">DestinationAddressPrefixes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#destination_address_prefixes NetworkSecurityGroup#destination_address_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.destinationApplicationSecurityGroupIds">DestinationApplicationSecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#destination_application_security_group_ids NetworkSecurityGroup#destination_application_security_group_ids}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.destinationPortRange">DestinationPortRange</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#destination_port_range NetworkSecurityGroup#destination_port_range}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.destinationPortRanges">DestinationPortRanges</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#destination_port_ranges NetworkSecurityGroup#destination_port_ranges}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.direction">Direction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#direction NetworkSecurityGroup#direction}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#name NetworkSecurityGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#priority NetworkSecurityGroup#priority}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#protocol NetworkSecurityGroup#protocol}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.sourceAddressPrefix">SourceAddressPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#source_address_prefix NetworkSecurityGroup#source_address_prefix}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.sourceAddressPrefixes">SourceAddressPrefixes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#source_address_prefixes NetworkSecurityGroup#source_address_prefixes}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.sourceApplicationSecurityGroupIds">SourceApplicationSecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#source_application_security_group_ids NetworkSecurityGroup#source_application_security_group_ids}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.sourcePortRange">SourcePortRange</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#source_port_range NetworkSecurityGroup#source_port_range}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.sourcePortRanges">SourcePortRanges</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#source_port_ranges NetworkSecurityGroup#source_port_ranges}. |

---

##### `Access`<sup>Optional</sup> <a name="Access" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.access"></a>

```go
Access *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#access NetworkSecurityGroup#access}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#description NetworkSecurityGroup#description}.

---

##### `DestinationAddressPrefix`<sup>Optional</sup> <a name="DestinationAddressPrefix" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.destinationAddressPrefix"></a>

```go
DestinationAddressPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#destination_address_prefix NetworkSecurityGroup#destination_address_prefix}.

---

##### `DestinationAddressPrefixes`<sup>Optional</sup> <a name="DestinationAddressPrefixes" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.destinationAddressPrefixes"></a>

```go
DestinationAddressPrefixes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#destination_address_prefixes NetworkSecurityGroup#destination_address_prefixes}.

---

##### `DestinationApplicationSecurityGroupIds`<sup>Optional</sup> <a name="DestinationApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.destinationApplicationSecurityGroupIds"></a>

```go
DestinationApplicationSecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#destination_application_security_group_ids NetworkSecurityGroup#destination_application_security_group_ids}.

---

##### `DestinationPortRange`<sup>Optional</sup> <a name="DestinationPortRange" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.destinationPortRange"></a>

```go
DestinationPortRange *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#destination_port_range NetworkSecurityGroup#destination_port_range}.

---

##### `DestinationPortRanges`<sup>Optional</sup> <a name="DestinationPortRanges" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.destinationPortRanges"></a>

```go
DestinationPortRanges *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#destination_port_ranges NetworkSecurityGroup#destination_port_ranges}.

---

##### `Direction`<sup>Optional</sup> <a name="Direction" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#direction NetworkSecurityGroup#direction}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#name NetworkSecurityGroup#name}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#priority NetworkSecurityGroup#priority}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#protocol NetworkSecurityGroup#protocol}.

---

##### `SourceAddressPrefix`<sup>Optional</sup> <a name="SourceAddressPrefix" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.sourceAddressPrefix"></a>

```go
SourceAddressPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#source_address_prefix NetworkSecurityGroup#source_address_prefix}.

---

##### `SourceAddressPrefixes`<sup>Optional</sup> <a name="SourceAddressPrefixes" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.sourceAddressPrefixes"></a>

```go
SourceAddressPrefixes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#source_address_prefixes NetworkSecurityGroup#source_address_prefixes}.

---

##### `SourceApplicationSecurityGroupIds`<sup>Optional</sup> <a name="SourceApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.sourceApplicationSecurityGroupIds"></a>

```go
SourceApplicationSecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#source_application_security_group_ids NetworkSecurityGroup#source_application_security_group_ids}.

---

##### `SourcePortRange`<sup>Optional</sup> <a name="SourcePortRange" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.sourcePortRange"></a>

```go
SourcePortRange *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#source_port_range NetworkSecurityGroup#source_port_range}.

---

##### `SourcePortRanges`<sup>Optional</sup> <a name="SourcePortRanges" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRule.property.sourcePortRanges"></a>

```go
SourcePortRanges *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#source_port_ranges NetworkSecurityGroup#source_port_ranges}.

---

### NetworkSecurityGroupTimeouts <a name="NetworkSecurityGroupTimeouts" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/networksecuritygroup"

&networksecuritygroup.NetworkSecurityGroupTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#create NetworkSecurityGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#delete NetworkSecurityGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#read NetworkSecurityGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#update NetworkSecurityGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#create NetworkSecurityGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#delete NetworkSecurityGroup#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#read NetworkSecurityGroup#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/network_security_group#update NetworkSecurityGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkSecurityGroupSecurityRuleList <a name="NetworkSecurityGroupSecurityRuleList" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/networksecuritygroup"

networksecuritygroup.NewNetworkSecurityGroupSecurityRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkSecurityGroupSecurityRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.get"></a>

```go
func Get(index *f64) NetworkSecurityGroupSecurityRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecurityGroupSecurityRuleOutputReference <a name="NetworkSecurityGroupSecurityRuleOutputReference" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/networksecuritygroup"

networksecuritygroup.NewNetworkSecurityGroupSecurityRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkSecurityGroupSecurityRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetAccess">ResetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDestinationAddressPrefix">ResetDestinationAddressPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDestinationAddressPrefixes">ResetDestinationAddressPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDestinationApplicationSecurityGroupIds">ResetDestinationApplicationSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDestinationPortRange">ResetDestinationPortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDestinationPortRanges">ResetDestinationPortRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDirection">ResetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetSourceAddressPrefix">ResetSourceAddressPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetSourceAddressPrefixes">ResetSourceAddressPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetSourceApplicationSecurityGroupIds">ResetSourceApplicationSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetSourcePortRange">ResetSourcePortRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetSourcePortRanges">ResetSourcePortRanges</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccess` <a name="ResetAccess" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetAccess"></a>

```go
func ResetAccess()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDestinationAddressPrefix` <a name="ResetDestinationAddressPrefix" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDestinationAddressPrefix"></a>

```go
func ResetDestinationAddressPrefix()
```

##### `ResetDestinationAddressPrefixes` <a name="ResetDestinationAddressPrefixes" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDestinationAddressPrefixes"></a>

```go
func ResetDestinationAddressPrefixes()
```

##### `ResetDestinationApplicationSecurityGroupIds` <a name="ResetDestinationApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDestinationApplicationSecurityGroupIds"></a>

```go
func ResetDestinationApplicationSecurityGroupIds()
```

##### `ResetDestinationPortRange` <a name="ResetDestinationPortRange" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDestinationPortRange"></a>

```go
func ResetDestinationPortRange()
```

##### `ResetDestinationPortRanges` <a name="ResetDestinationPortRanges" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDestinationPortRanges"></a>

```go
func ResetDestinationPortRanges()
```

##### `ResetDirection` <a name="ResetDirection" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetDirection"></a>

```go
func ResetDirection()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetSourceAddressPrefix` <a name="ResetSourceAddressPrefix" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetSourceAddressPrefix"></a>

```go
func ResetSourceAddressPrefix()
```

##### `ResetSourceAddressPrefixes` <a name="ResetSourceAddressPrefixes" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetSourceAddressPrefixes"></a>

```go
func ResetSourceAddressPrefixes()
```

##### `ResetSourceApplicationSecurityGroupIds` <a name="ResetSourceApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetSourceApplicationSecurityGroupIds"></a>

```go
func ResetSourceApplicationSecurityGroupIds()
```

##### `ResetSourcePortRange` <a name="ResetSourcePortRange" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetSourcePortRange"></a>

```go
func ResetSourcePortRange()
```

##### `ResetSourcePortRanges` <a name="ResetSourcePortRanges" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.resetSourcePortRanges"></a>

```go
func ResetSourcePortRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.accessInput">AccessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefixesInput">DestinationAddressPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefixInput">DestinationAddressPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationApplicationSecurityGroupIdsInput">DestinationApplicationSecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRangeInput">DestinationPortRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRangesInput">DestinationPortRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefixesInput">SourceAddressPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefixInput">SourceAddressPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourceApplicationSecurityGroupIdsInput">SourceApplicationSecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRangeInput">SourcePortRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRangesInput">SourcePortRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.access">Access</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefix">DestinationAddressPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefixes">DestinationAddressPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationApplicationSecurityGroupIds">DestinationApplicationSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRange">DestinationPortRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRanges">DestinationPortRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefix">SourceAddressPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefixes">SourceAddressPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourceApplicationSecurityGroupIds">SourceApplicationSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRange">SourcePortRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRanges">SourcePortRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessInput`<sup>Optional</sup> <a name="AccessInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.accessInput"></a>

```go
func AccessInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DestinationAddressPrefixesInput`<sup>Optional</sup> <a name="DestinationAddressPrefixesInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefixesInput"></a>

```go
func DestinationAddressPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationAddressPrefixInput`<sup>Optional</sup> <a name="DestinationAddressPrefixInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefixInput"></a>

```go
func DestinationAddressPrefixInput() *string
```

- *Type:* *string

---

##### `DestinationApplicationSecurityGroupIdsInput`<sup>Optional</sup> <a name="DestinationApplicationSecurityGroupIdsInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationApplicationSecurityGroupIdsInput"></a>

```go
func DestinationApplicationSecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationPortRangeInput`<sup>Optional</sup> <a name="DestinationPortRangeInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRangeInput"></a>

```go
func DestinationPortRangeInput() *string
```

- *Type:* *string

---

##### `DestinationPortRangesInput`<sup>Optional</sup> <a name="DestinationPortRangesInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRangesInput"></a>

```go
func DestinationPortRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `SourceAddressPrefixesInput`<sup>Optional</sup> <a name="SourceAddressPrefixesInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefixesInput"></a>

```go
func SourceAddressPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceAddressPrefixInput`<sup>Optional</sup> <a name="SourceAddressPrefixInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefixInput"></a>

```go
func SourceAddressPrefixInput() *string
```

- *Type:* *string

---

##### `SourceApplicationSecurityGroupIdsInput`<sup>Optional</sup> <a name="SourceApplicationSecurityGroupIdsInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourceApplicationSecurityGroupIdsInput"></a>

```go
func SourceApplicationSecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourcePortRangeInput`<sup>Optional</sup> <a name="SourcePortRangeInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRangeInput"></a>

```go
func SourcePortRangeInput() *string
```

- *Type:* *string

---

##### `SourcePortRangesInput`<sup>Optional</sup> <a name="SourcePortRangesInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRangesInput"></a>

```go
func SourcePortRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.access"></a>

```go
func Access() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DestinationAddressPrefix`<sup>Required</sup> <a name="DestinationAddressPrefix" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefix"></a>

```go
func DestinationAddressPrefix() *string
```

- *Type:* *string

---

##### `DestinationAddressPrefixes`<sup>Required</sup> <a name="DestinationAddressPrefixes" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefixes"></a>

```go
func DestinationAddressPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationApplicationSecurityGroupIds`<sup>Required</sup> <a name="DestinationApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationApplicationSecurityGroupIds"></a>

```go
func DestinationApplicationSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationPortRange`<sup>Required</sup> <a name="DestinationPortRange" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRange"></a>

```go
func DestinationPortRange() *string
```

- *Type:* *string

---

##### `DestinationPortRanges`<sup>Required</sup> <a name="DestinationPortRanges" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRanges"></a>

```go
func DestinationPortRanges() *[]*string
```

- *Type:* *[]*string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SourceAddressPrefix`<sup>Required</sup> <a name="SourceAddressPrefix" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefix"></a>

```go
func SourceAddressPrefix() *string
```

- *Type:* *string

---

##### `SourceAddressPrefixes`<sup>Required</sup> <a name="SourceAddressPrefixes" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefixes"></a>

```go
func SourceAddressPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `SourceApplicationSecurityGroupIds`<sup>Required</sup> <a name="SourceApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourceApplicationSecurityGroupIds"></a>

```go
func SourceApplicationSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SourcePortRange`<sup>Required</sup> <a name="SourcePortRange" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRange"></a>

```go
func SourcePortRange() *string
```

- *Type:* *string

---

##### `SourcePortRanges`<sup>Required</sup> <a name="SourcePortRanges" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRanges"></a>

```go
func SourcePortRanges() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupSecurityRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkSecurityGroupTimeoutsOutputReference <a name="NetworkSecurityGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/networksecuritygroup"

networksecuritygroup.NewNetworkSecurityGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkSecurityGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.networkSecurityGroup.NetworkSecurityGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



