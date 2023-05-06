# `data_azurerm_network_security_group`

Refer to the Terraform Registory for docs: [`data_azurerm_network_security_group`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/network_security_group).

# `dataAzurermNetworkSecurityGroup` Submodule <a name="`dataAzurermNetworkSecurityGroup` Submodule" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermNetworkSecurityGroup <a name="DataAzurermNetworkSecurityGroup" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/network_security_group azurerm_network_security_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermnetworksecuritygroup"

dataazurermnetworksecuritygroup.NewDataAzurermNetworkSecurityGroup(scope Construct, id *string, config DataAzurermNetworkSecurityGroupConfig) DataAzurermNetworkSecurityGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig">DataAzurermNetworkSecurityGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig">DataAzurermNetworkSecurityGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermNetworkSecurityGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeouts">DataAzurermNetworkSecurityGroupTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermnetworksecuritygroup"

dataazurermnetworksecuritygroup.DataAzurermNetworkSecurityGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermnetworksecuritygroup"

dataazurermnetworksecuritygroup.DataAzurermNetworkSecurityGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermnetworksecuritygroup"

dataazurermnetworksecuritygroup.DataAzurermNetworkSecurityGroup_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.securityRule">SecurityRule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList">DataAzurermNetworkSecurityGroupSecurityRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference">DataAzurermNetworkSecurityGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `SecurityRule`<sup>Required</sup> <a name="SecurityRule" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.securityRule"></a>

```go
func SecurityRule() DataAzurermNetworkSecurityGroupSecurityRuleList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList">DataAzurermNetworkSecurityGroupSecurityRuleList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.timeouts"></a>

```go
func Timeouts() DataAzurermNetworkSecurityGroupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference">DataAzurermNetworkSecurityGroupTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermNetworkSecurityGroupConfig <a name="DataAzurermNetworkSecurityGroupConfig" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermnetworksecuritygroup"

&dataazurermnetworksecuritygroup.DataAzurermNetworkSecurityGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ResourceGroupName: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/network_security_group#name DataAzurermNetworkSecurityGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/network_security_group#resource_group_name DataAzurermNetworkSecurityGroup#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/network_security_group#id DataAzurermNetworkSecurityGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeouts">DataAzurermNetworkSecurityGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/network_security_group#name DataAzurermNetworkSecurityGroup#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/network_security_group#resource_group_name DataAzurermNetworkSecurityGroup#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/network_security_group#id DataAzurermNetworkSecurityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupConfig.property.timeouts"></a>

```go
Timeouts DataAzurermNetworkSecurityGroupTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeouts">DataAzurermNetworkSecurityGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/network_security_group#timeouts DataAzurermNetworkSecurityGroup#timeouts}

---

### DataAzurermNetworkSecurityGroupSecurityRule <a name="DataAzurermNetworkSecurityGroupSecurityRule" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermnetworksecuritygroup"

&dataazurermnetworksecuritygroup.DataAzurermNetworkSecurityGroupSecurityRule {

}
```


### DataAzurermNetworkSecurityGroupTimeouts <a name="DataAzurermNetworkSecurityGroupTimeouts" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermnetworksecuritygroup"

&dataazurermnetworksecuritygroup.DataAzurermNetworkSecurityGroupTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/network_security_group#read DataAzurermNetworkSecurityGroup#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/data-sources/network_security_group#read DataAzurermNetworkSecurityGroup#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermNetworkSecurityGroupSecurityRuleList <a name="DataAzurermNetworkSecurityGroupSecurityRuleList" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermnetworksecuritygroup"

dataazurermnetworksecuritygroup.NewDataAzurermNetworkSecurityGroupSecurityRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermNetworkSecurityGroupSecurityRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.get"></a>

```go
func Get(index *f64) DataAzurermNetworkSecurityGroupSecurityRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermNetworkSecurityGroupSecurityRuleOutputReference <a name="DataAzurermNetworkSecurityGroupSecurityRuleOutputReference" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermnetworksecuritygroup"

dataazurermnetworksecuritygroup.NewDataAzurermNetworkSecurityGroupSecurityRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermNetworkSecurityGroupSecurityRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.access">Access</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefix">DestinationAddressPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefixes">DestinationAddressPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.destinationApplicationSecurityGroupIds">DestinationApplicationSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRange">DestinationPortRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRanges">DestinationPortRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefix">SourceAddressPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefixes">SourceAddressPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.sourceApplicationSecurityGroupIds">SourceApplicationSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRange">SourcePortRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRanges">SourcePortRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRule">DataAzurermNetworkSecurityGroupSecurityRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.access"></a>

```go
func Access() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DestinationAddressPrefix`<sup>Required</sup> <a name="DestinationAddressPrefix" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefix"></a>

```go
func DestinationAddressPrefix() *string
```

- *Type:* *string

---

##### `DestinationAddressPrefixes`<sup>Required</sup> <a name="DestinationAddressPrefixes" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.destinationAddressPrefixes"></a>

```go
func DestinationAddressPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationApplicationSecurityGroupIds`<sup>Required</sup> <a name="DestinationApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.destinationApplicationSecurityGroupIds"></a>

```go
func DestinationApplicationSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `DestinationPortRange`<sup>Required</sup> <a name="DestinationPortRange" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRange"></a>

```go
func DestinationPortRange() *string
```

- *Type:* *string

---

##### `DestinationPortRanges`<sup>Required</sup> <a name="DestinationPortRanges" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.destinationPortRanges"></a>

```go
func DestinationPortRanges() *[]*string
```

- *Type:* *[]*string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SourceAddressPrefix`<sup>Required</sup> <a name="SourceAddressPrefix" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefix"></a>

```go
func SourceAddressPrefix() *string
```

- *Type:* *string

---

##### `SourceAddressPrefixes`<sup>Required</sup> <a name="SourceAddressPrefixes" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.sourceAddressPrefixes"></a>

```go
func SourceAddressPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `SourceApplicationSecurityGroupIds`<sup>Required</sup> <a name="SourceApplicationSecurityGroupIds" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.sourceApplicationSecurityGroupIds"></a>

```go
func SourceApplicationSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SourcePortRange`<sup>Required</sup> <a name="SourcePortRange" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRange"></a>

```go
func SourcePortRange() *string
```

- *Type:* *string

---

##### `SourcePortRanges`<sup>Required</sup> <a name="SourcePortRanges" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.sourcePortRanges"></a>

```go
func SourcePortRanges() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermNetworkSecurityGroupSecurityRule
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupSecurityRule">DataAzurermNetworkSecurityGroupSecurityRule</a>

---


### DataAzurermNetworkSecurityGroupTimeoutsOutputReference <a name="DataAzurermNetworkSecurityGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermnetworksecuritygroup"

dataazurermnetworksecuritygroup.NewDataAzurermNetworkSecurityGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermNetworkSecurityGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermNetworkSecurityGroup.DataAzurermNetworkSecurityGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



