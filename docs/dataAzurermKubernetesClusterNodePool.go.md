# `data_azurerm_kubernetes_cluster_node_pool`

Refer to the Terraform Registory for docs: [`data_azurerm_kubernetes_cluster_node_pool`](https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/data-sources/kubernetes_cluster_node_pool).

# `dataAzurermKubernetesClusterNodePool` Submodule <a name="`dataAzurermKubernetesClusterNodePool` Submodule" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermKubernetesClusterNodePool <a name="DataAzurermKubernetesClusterNodePool" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/data-sources/kubernetes_cluster_node_pool azurerm_kubernetes_cluster_node_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermkubernetesclusternodepool"

dataazurermkubernetesclusternodepool.NewDataAzurermKubernetesClusterNodePool(scope Construct, id *string, config DataAzurermKubernetesClusterNodePoolConfig) DataAzurermKubernetesClusterNodePool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig">DataAzurermKubernetesClusterNodePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig">DataAzurermKubernetesClusterNodePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermKubernetesClusterNodePoolTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeouts">DataAzurermKubernetesClusterNodePoolTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermkubernetesclusternodepool"

dataazurermkubernetesclusternodepool.DataAzurermKubernetesClusterNodePool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermkubernetesclusternodepool"

dataazurermkubernetesclusternodepool.DataAzurermKubernetesClusterNodePool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermkubernetesclusternodepool"

dataazurermkubernetesclusternodepool.DataAzurermKubernetesClusterNodePool_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.enableAutoScaling">EnableAutoScaling</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.enableNodePublicIp">EnableNodePublicIp</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.evictionPolicy">EvictionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.maxCount">MaxCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.maxPods">MaxPods</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.minCount">MinCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.nodeCount">NodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.nodeLabels">NodeLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.nodePublicIpPrefixId">NodePublicIpPrefixId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.nodeTaints">NodeTaints</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.orchestratorVersion">OrchestratorVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.osDiskSizeGb">OsDiskSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.osDiskType">OsDiskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.osType">OsType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.priority">Priority</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.proximityPlacementGroupId">ProximityPlacementGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.spotMaxPrice">SpotMaxPrice</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference">DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.upgradeSettings">UpgradeSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList">DataAzurermKubernetesClusterNodePoolUpgradeSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.vmSize">VmSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.vnetSubnetId">VnetSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.zones">Zones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.kubernetesClusterNameInput">KubernetesClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.kubernetesClusterName">KubernetesClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `EnableAutoScaling`<sup>Required</sup> <a name="EnableAutoScaling" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.enableAutoScaling"></a>

```go
func EnableAutoScaling() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnableNodePublicIp`<sup>Required</sup> <a name="EnableNodePublicIp" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.enableNodePublicIp"></a>

```go
func EnableNodePublicIp() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EvictionPolicy`<sup>Required</sup> <a name="EvictionPolicy" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.evictionPolicy"></a>

```go
func EvictionPolicy() *string
```

- *Type:* *string

---

##### `MaxCount`<sup>Required</sup> <a name="MaxCount" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.maxCount"></a>

```go
func MaxCount() *f64
```

- *Type:* *f64

---

##### `MaxPods`<sup>Required</sup> <a name="MaxPods" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.maxPods"></a>

```go
func MaxPods() *f64
```

- *Type:* *f64

---

##### `MinCount`<sup>Required</sup> <a name="MinCount" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.minCount"></a>

```go
func MinCount() *f64
```

- *Type:* *f64

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.nodeCount"></a>

```go
func NodeCount() *f64
```

- *Type:* *f64

---

##### `NodeLabels`<sup>Required</sup> <a name="NodeLabels" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.nodeLabels"></a>

```go
func NodeLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `NodePublicIpPrefixId`<sup>Required</sup> <a name="NodePublicIpPrefixId" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.nodePublicIpPrefixId"></a>

```go
func NodePublicIpPrefixId() *string
```

- *Type:* *string

---

##### `NodeTaints`<sup>Required</sup> <a name="NodeTaints" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.nodeTaints"></a>

```go
func NodeTaints() *[]*string
```

- *Type:* *[]*string

---

##### `OrchestratorVersion`<sup>Required</sup> <a name="OrchestratorVersion" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.orchestratorVersion"></a>

```go
func OrchestratorVersion() *string
```

- *Type:* *string

---

##### `OsDiskSizeGb`<sup>Required</sup> <a name="OsDiskSizeGb" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.osDiskSizeGb"></a>

```go
func OsDiskSizeGb() *f64
```

- *Type:* *f64

---

##### `OsDiskType`<sup>Required</sup> <a name="OsDiskType" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.osDiskType"></a>

```go
func OsDiskType() *string
```

- *Type:* *string

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.osType"></a>

```go
func OsType() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.priority"></a>

```go
func Priority() *string
```

- *Type:* *string

---

##### `ProximityPlacementGroupId`<sup>Required</sup> <a name="ProximityPlacementGroupId" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.proximityPlacementGroupId"></a>

```go
func ProximityPlacementGroupId() *string
```

- *Type:* *string

---

##### `SpotMaxPrice`<sup>Required</sup> <a name="SpotMaxPrice" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.spotMaxPrice"></a>

```go
func SpotMaxPrice() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.timeouts"></a>

```go
func Timeouts() DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference">DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference</a>

---

##### `UpgradeSettings`<sup>Required</sup> <a name="UpgradeSettings" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.upgradeSettings"></a>

```go
func UpgradeSettings() DataAzurermKubernetesClusterNodePoolUpgradeSettingsList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList">DataAzurermKubernetesClusterNodePoolUpgradeSettingsList</a>

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.vmSize"></a>

```go
func VmSize() *string
```

- *Type:* *string

---

##### `VnetSubnetId`<sup>Required</sup> <a name="VnetSubnetId" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.vnetSubnetId"></a>

```go
func VnetSubnetId() *string
```

- *Type:* *string

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.zones"></a>

```go
func Zones() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KubernetesClusterNameInput`<sup>Optional</sup> <a name="KubernetesClusterNameInput" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.kubernetesClusterNameInput"></a>

```go
func KubernetesClusterNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KubernetesClusterName`<sup>Required</sup> <a name="KubernetesClusterName" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.kubernetesClusterName"></a>

```go
func KubernetesClusterName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermKubernetesClusterNodePoolConfig <a name="DataAzurermKubernetesClusterNodePoolConfig" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermkubernetesclusternodepool"

&dataazurermkubernetesclusternodepool.DataAzurermKubernetesClusterNodePoolConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	KubernetesClusterName: *string,
	Name: *string,
	ResourceGroupName: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.kubernetesClusterName">KubernetesClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/data-sources/kubernetes_cluster_node_pool#kubernetes_cluster_name DataAzurermKubernetesClusterNodePool#kubernetes_cluster_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/data-sources/kubernetes_cluster_node_pool#name DataAzurermKubernetesClusterNodePool#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/data-sources/kubernetes_cluster_node_pool#resource_group_name DataAzurermKubernetesClusterNodePool#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/data-sources/kubernetes_cluster_node_pool#id DataAzurermKubernetesClusterNodePool#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeouts">DataAzurermKubernetesClusterNodePoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KubernetesClusterName`<sup>Required</sup> <a name="KubernetesClusterName" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.kubernetesClusterName"></a>

```go
KubernetesClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/data-sources/kubernetes_cluster_node_pool#kubernetes_cluster_name DataAzurermKubernetesClusterNodePool#kubernetes_cluster_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/data-sources/kubernetes_cluster_node_pool#name DataAzurermKubernetesClusterNodePool#name}.

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/data-sources/kubernetes_cluster_node_pool#resource_group_name DataAzurermKubernetesClusterNodePool#resource_group_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/data-sources/kubernetes_cluster_node_pool#id DataAzurermKubernetesClusterNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolConfig.property.timeouts"></a>

```go
Timeouts DataAzurermKubernetesClusterNodePoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeouts">DataAzurermKubernetesClusterNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/data-sources/kubernetes_cluster_node_pool#timeouts DataAzurermKubernetesClusterNodePool#timeouts}

---

### DataAzurermKubernetesClusterNodePoolTimeouts <a name="DataAzurermKubernetesClusterNodePoolTimeouts" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermkubernetesclusternodepool"

&dataazurermkubernetesclusternodepool.DataAzurermKubernetesClusterNodePoolTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/data-sources/kubernetes_cluster_node_pool#read DataAzurermKubernetesClusterNodePool#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.59.0/docs/data-sources/kubernetes_cluster_node_pool#read DataAzurermKubernetesClusterNodePool#read}.

---

### DataAzurermKubernetesClusterNodePoolUpgradeSettings <a name="DataAzurermKubernetesClusterNodePoolUpgradeSettings" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermkubernetesclusternodepool"

&dataazurermkubernetesclusternodepool.DataAzurermKubernetesClusterNodePoolUpgradeSettings {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference <a name="DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermkubernetesclusternodepool"

dataazurermkubernetesclusternodepool.NewDataAzurermKubernetesClusterNodePoolTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAzurermKubernetesClusterNodePoolUpgradeSettingsList <a name="DataAzurermKubernetesClusterNodePoolUpgradeSettingsList" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermkubernetesclusternodepool"

dataazurermkubernetesclusternodepool.NewDataAzurermKubernetesClusterNodePoolUpgradeSettingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermKubernetesClusterNodePoolUpgradeSettingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.get"></a>

```go
func Get(index *f64) DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference <a name="DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermkubernetesclusternodepool"

dataazurermkubernetesclusternodepool.NewDataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.property.maxSurge">MaxSurge</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettings">DataAzurermKubernetesClusterNodePoolUpgradeSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxSurge`<sup>Required</sup> <a name="MaxSurge" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.property.maxSurge"></a>

```go
func MaxSurge() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermKubernetesClusterNodePoolUpgradeSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermKubernetesClusterNodePool.DataAzurermKubernetesClusterNodePoolUpgradeSettings">DataAzurermKubernetesClusterNodePoolUpgradeSettings</a>

---



