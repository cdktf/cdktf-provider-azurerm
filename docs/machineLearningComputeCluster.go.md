# `azurerm_machine_learning_compute_cluster`

Refer to the Terraform Registory for docs: [`azurerm_machine_learning_compute_cluster`](https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster).

# `machineLearningComputeCluster` Submodule <a name="`machineLearningComputeCluster` Submodule" id="@cdktf/provider-azurerm.machineLearningComputeCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MachineLearningComputeCluster <a name="MachineLearningComputeCluster" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster azurerm_machine_learning_compute_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/machinelearningcomputecluster"

machinelearningcomputecluster.NewMachineLearningComputeCluster(scope Construct, id *string, config MachineLearningComputeClusterConfig) MachineLearningComputeCluster
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig">MachineLearningComputeClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig">MachineLearningComputeClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putScaleSettings">PutScaleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putSsh">PutSsh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetLocalAuthEnabled">ResetLocalAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetNodePublicIpEnabled">ResetNodePublicIpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetSsh">ResetSsh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetSshPublicAccessEnabled">ResetSshPublicAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetSubnetResourceId">ResetSubnetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putIdentity"></a>

```go
func PutIdentity(value MachineLearningComputeClusterIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity">MachineLearningComputeClusterIdentity</a>

---

##### `PutScaleSettings` <a name="PutScaleSettings" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putScaleSettings"></a>

```go
func PutScaleSettings(value MachineLearningComputeClusterScaleSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putScaleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings">MachineLearningComputeClusterScaleSettings</a>

---

##### `PutSsh` <a name="PutSsh" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putSsh"></a>

```go
func PutSsh(value MachineLearningComputeClusterSsh)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putSsh.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh">MachineLearningComputeClusterSsh</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putTimeouts"></a>

```go
func PutTimeouts(value MachineLearningComputeClusterTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts">MachineLearningComputeClusterTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetLocalAuthEnabled` <a name="ResetLocalAuthEnabled" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetLocalAuthEnabled"></a>

```go
func ResetLocalAuthEnabled()
```

##### `ResetNodePublicIpEnabled` <a name="ResetNodePublicIpEnabled" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetNodePublicIpEnabled"></a>

```go
func ResetNodePublicIpEnabled()
```

##### `ResetSsh` <a name="ResetSsh" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetSsh"></a>

```go
func ResetSsh()
```

##### `ResetSshPublicAccessEnabled` <a name="ResetSshPublicAccessEnabled" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetSshPublicAccessEnabled"></a>

```go
func ResetSshPublicAccessEnabled()
```

##### `ResetSubnetResourceId` <a name="ResetSubnetResourceId" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetSubnetResourceId"></a>

```go
func ResetSubnetResourceId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/machinelearningcomputecluster"

machinelearningcomputecluster.MachineLearningComputeCluster_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/machinelearningcomputecluster"

machinelearningcomputecluster.MachineLearningComputeCluster_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/machinelearningcomputecluster"

machinelearningcomputecluster.MachineLearningComputeCluster_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference">MachineLearningComputeClusterIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.scaleSettings">ScaleSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference">MachineLearningComputeClusterScaleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.ssh">Ssh</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference">MachineLearningComputeClusterSshOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference">MachineLearningComputeClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity">MachineLearningComputeClusterIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.localAuthEnabledInput">LocalAuthEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.machineLearningWorkspaceIdInput">MachineLearningWorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.nodePublicIpEnabledInput">NodePublicIpEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.scaleSettingsInput">ScaleSettingsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings">MachineLearningComputeClusterScaleSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.sshInput">SshInput</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh">MachineLearningComputeClusterSsh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.sshPublicAccessEnabledInput">SshPublicAccessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.subnetResourceIdInput">SubnetResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.vmPriorityInput">VmPriorityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.vmSizeInput">VmSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.localAuthEnabled">LocalAuthEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.machineLearningWorkspaceId">MachineLearningWorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.nodePublicIpEnabled">NodePublicIpEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.sshPublicAccessEnabled">SshPublicAccessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.subnetResourceId">SubnetResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.vmPriority">VmPriority</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.vmSize">VmSize</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.identity"></a>

```go
func Identity() MachineLearningComputeClusterIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference">MachineLearningComputeClusterIdentityOutputReference</a>

---

##### `ScaleSettings`<sup>Required</sup> <a name="ScaleSettings" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.scaleSettings"></a>

```go
func ScaleSettings() MachineLearningComputeClusterScaleSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference">MachineLearningComputeClusterScaleSettingsOutputReference</a>

---

##### `Ssh`<sup>Required</sup> <a name="Ssh" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.ssh"></a>

```go
func Ssh() MachineLearningComputeClusterSshOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference">MachineLearningComputeClusterSshOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.timeouts"></a>

```go
func Timeouts() MachineLearningComputeClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference">MachineLearningComputeClusterTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.identityInput"></a>

```go
func IdentityInput() MachineLearningComputeClusterIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity">MachineLearningComputeClusterIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocalAuthEnabledInput`<sup>Optional</sup> <a name="LocalAuthEnabledInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.localAuthEnabledInput"></a>

```go
func LocalAuthEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MachineLearningWorkspaceIdInput`<sup>Optional</sup> <a name="MachineLearningWorkspaceIdInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.machineLearningWorkspaceIdInput"></a>

```go
func MachineLearningWorkspaceIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NodePublicIpEnabledInput`<sup>Optional</sup> <a name="NodePublicIpEnabledInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.nodePublicIpEnabledInput"></a>

```go
func NodePublicIpEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ScaleSettingsInput`<sup>Optional</sup> <a name="ScaleSettingsInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.scaleSettingsInput"></a>

```go
func ScaleSettingsInput() MachineLearningComputeClusterScaleSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings">MachineLearningComputeClusterScaleSettings</a>

---

##### `SshInput`<sup>Optional</sup> <a name="SshInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.sshInput"></a>

```go
func SshInput() MachineLearningComputeClusterSsh
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh">MachineLearningComputeClusterSsh</a>

---

##### `SshPublicAccessEnabledInput`<sup>Optional</sup> <a name="SshPublicAccessEnabledInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.sshPublicAccessEnabledInput"></a>

```go
func SshPublicAccessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SubnetResourceIdInput`<sup>Optional</sup> <a name="SubnetResourceIdInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.subnetResourceIdInput"></a>

```go
func SubnetResourceIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VmPriorityInput`<sup>Optional</sup> <a name="VmPriorityInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.vmPriorityInput"></a>

```go
func VmPriorityInput() *string
```

- *Type:* *string

---

##### `VmSizeInput`<sup>Optional</sup> <a name="VmSizeInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.vmSizeInput"></a>

```go
func VmSizeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LocalAuthEnabled`<sup>Required</sup> <a name="LocalAuthEnabled" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.localAuthEnabled"></a>

```go
func LocalAuthEnabled() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MachineLearningWorkspaceId`<sup>Required</sup> <a name="MachineLearningWorkspaceId" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.machineLearningWorkspaceId"></a>

```go
func MachineLearningWorkspaceId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodePublicIpEnabled`<sup>Required</sup> <a name="NodePublicIpEnabled" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.nodePublicIpEnabled"></a>

```go
func NodePublicIpEnabled() interface{}
```

- *Type:* interface{}

---

##### `SshPublicAccessEnabled`<sup>Required</sup> <a name="SshPublicAccessEnabled" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.sshPublicAccessEnabled"></a>

```go
func SshPublicAccessEnabled() interface{}
```

- *Type:* interface{}

---

##### `SubnetResourceId`<sup>Required</sup> <a name="SubnetResourceId" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.subnetResourceId"></a>

```go
func SubnetResourceId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VmPriority`<sup>Required</sup> <a name="VmPriority" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.vmPriority"></a>

```go
func VmPriority() *string
```

- *Type:* *string

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.vmSize"></a>

```go
func VmSize() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeCluster.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MachineLearningComputeClusterConfig <a name="MachineLearningComputeClusterConfig" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/machinelearningcomputecluster"

&machinelearningcomputecluster.MachineLearningComputeClusterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	MachineLearningWorkspaceId: *string,
	Name: *string,
	ScaleSettings: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings,
	VmPriority: *string,
	VmSize: *string,
	Description: *string,
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10.machineLearningComputeCluster.MachineLearningComputeClusterIdentity,
	LocalAuthEnabled: interface{},
	NodePublicIpEnabled: interface{},
	Ssh: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10.machineLearningComputeCluster.MachineLearningComputeClusterSsh,
	SshPublicAccessEnabled: interface{},
	SubnetResourceId: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#location MachineLearningComputeCluster#location}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.machineLearningWorkspaceId">MachineLearningWorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#machine_learning_workspace_id MachineLearningComputeCluster#machine_learning_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#name MachineLearningComputeCluster#name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.scaleSettings">ScaleSettings</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings">MachineLearningComputeClusterScaleSettings</a></code> | scale_settings block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.vmPriority">VmPriority</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#vm_priority MachineLearningComputeCluster#vm_priority}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.vmSize">VmSize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#vm_size MachineLearningComputeCluster#vm_size}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#description MachineLearningComputeCluster#description}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#id MachineLearningComputeCluster#id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity">MachineLearningComputeClusterIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.localAuthEnabled">LocalAuthEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#local_auth_enabled MachineLearningComputeCluster#local_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.nodePublicIpEnabled">NodePublicIpEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#node_public_ip_enabled MachineLearningComputeCluster#node_public_ip_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.ssh">Ssh</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh">MachineLearningComputeClusterSsh</a></code> | ssh block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.sshPublicAccessEnabled">SshPublicAccessEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#ssh_public_access_enabled MachineLearningComputeCluster#ssh_public_access_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.subnetResourceId">SubnetResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#subnet_resource_id MachineLearningComputeCluster#subnet_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#tags MachineLearningComputeCluster#tags}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts">MachineLearningComputeClusterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#location MachineLearningComputeCluster#location}.

---

##### `MachineLearningWorkspaceId`<sup>Required</sup> <a name="MachineLearningWorkspaceId" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.machineLearningWorkspaceId"></a>

```go
MachineLearningWorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#machine_learning_workspace_id MachineLearningComputeCluster#machine_learning_workspace_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#name MachineLearningComputeCluster#name}.

---

##### `ScaleSettings`<sup>Required</sup> <a name="ScaleSettings" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.scaleSettings"></a>

```go
ScaleSettings MachineLearningComputeClusterScaleSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings">MachineLearningComputeClusterScaleSettings</a>

scale_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#scale_settings MachineLearningComputeCluster#scale_settings}

---

##### `VmPriority`<sup>Required</sup> <a name="VmPriority" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.vmPriority"></a>

```go
VmPriority *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#vm_priority MachineLearningComputeCluster#vm_priority}.

---

##### `VmSize`<sup>Required</sup> <a name="VmSize" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.vmSize"></a>

```go
VmSize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#vm_size MachineLearningComputeCluster#vm_size}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#description MachineLearningComputeCluster#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#id MachineLearningComputeCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.identity"></a>

```go
Identity MachineLearningComputeClusterIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity">MachineLearningComputeClusterIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#identity MachineLearningComputeCluster#identity}

---

##### `LocalAuthEnabled`<sup>Optional</sup> <a name="LocalAuthEnabled" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.localAuthEnabled"></a>

```go
LocalAuthEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#local_auth_enabled MachineLearningComputeCluster#local_auth_enabled}.

---

##### `NodePublicIpEnabled`<sup>Optional</sup> <a name="NodePublicIpEnabled" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.nodePublicIpEnabled"></a>

```go
NodePublicIpEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#node_public_ip_enabled MachineLearningComputeCluster#node_public_ip_enabled}.

---

##### `Ssh`<sup>Optional</sup> <a name="Ssh" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.ssh"></a>

```go
Ssh MachineLearningComputeClusterSsh
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh">MachineLearningComputeClusterSsh</a>

ssh block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#ssh MachineLearningComputeCluster#ssh}

---

##### `SshPublicAccessEnabled`<sup>Optional</sup> <a name="SshPublicAccessEnabled" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.sshPublicAccessEnabled"></a>

```go
SshPublicAccessEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#ssh_public_access_enabled MachineLearningComputeCluster#ssh_public_access_enabled}.

---

##### `SubnetResourceId`<sup>Optional</sup> <a name="SubnetResourceId" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.subnetResourceId"></a>

```go
SubnetResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#subnet_resource_id MachineLearningComputeCluster#subnet_resource_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#tags MachineLearningComputeCluster#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterConfig.property.timeouts"></a>

```go
Timeouts MachineLearningComputeClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts">MachineLearningComputeClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#timeouts MachineLearningComputeCluster#timeouts}

---

### MachineLearningComputeClusterIdentity <a name="MachineLearningComputeClusterIdentity" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/machinelearningcomputecluster"

&machinelearningcomputecluster.MachineLearningComputeClusterIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#type MachineLearningComputeCluster#type}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#identity_ids MachineLearningComputeCluster#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#type MachineLearningComputeCluster#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#identity_ids MachineLearningComputeCluster#identity_ids}.

---

### MachineLearningComputeClusterScaleSettings <a name="MachineLearningComputeClusterScaleSettings" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/machinelearningcomputecluster"

&machinelearningcomputecluster.MachineLearningComputeClusterScaleSettings {
	MaxNodeCount: *f64,
	MinNodeCount: *f64,
	ScaleDownNodesAfterIdleDuration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings.property.maxNodeCount">MaxNodeCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#max_node_count MachineLearningComputeCluster#max_node_count}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings.property.minNodeCount">MinNodeCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#min_node_count MachineLearningComputeCluster#min_node_count}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings.property.scaleDownNodesAfterIdleDuration">ScaleDownNodesAfterIdleDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#scale_down_nodes_after_idle_duration MachineLearningComputeCluster#scale_down_nodes_after_idle_duration}. |

---

##### `MaxNodeCount`<sup>Required</sup> <a name="MaxNodeCount" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings.property.maxNodeCount"></a>

```go
MaxNodeCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#max_node_count MachineLearningComputeCluster#max_node_count}.

---

##### `MinNodeCount`<sup>Required</sup> <a name="MinNodeCount" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings.property.minNodeCount"></a>

```go
MinNodeCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#min_node_count MachineLearningComputeCluster#min_node_count}.

---

##### `ScaleDownNodesAfterIdleDuration`<sup>Required</sup> <a name="ScaleDownNodesAfterIdleDuration" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings.property.scaleDownNodesAfterIdleDuration"></a>

```go
ScaleDownNodesAfterIdleDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#scale_down_nodes_after_idle_duration MachineLearningComputeCluster#scale_down_nodes_after_idle_duration}.

---

### MachineLearningComputeClusterSsh <a name="MachineLearningComputeClusterSsh" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/machinelearningcomputecluster"

&machinelearningcomputecluster.MachineLearningComputeClusterSsh {
	AdminUsername: *string,
	AdminPassword: *string,
	KeyValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh.property.adminUsername">AdminUsername</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#admin_username MachineLearningComputeCluster#admin_username}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh.property.adminPassword">AdminPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#admin_password MachineLearningComputeCluster#admin_password}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh.property.keyValue">KeyValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#key_value MachineLearningComputeCluster#key_value}. |

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh.property.adminUsername"></a>

```go
AdminUsername *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#admin_username MachineLearningComputeCluster#admin_username}.

---

##### `AdminPassword`<sup>Optional</sup> <a name="AdminPassword" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh.property.adminPassword"></a>

```go
AdminPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#admin_password MachineLearningComputeCluster#admin_password}.

---

##### `KeyValue`<sup>Optional</sup> <a name="KeyValue" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh.property.keyValue"></a>

```go
KeyValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#key_value MachineLearningComputeCluster#key_value}.

---

### MachineLearningComputeClusterTimeouts <a name="MachineLearningComputeClusterTimeouts" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/machinelearningcomputecluster"

&machinelearningcomputecluster.MachineLearningComputeClusterTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#create MachineLearningComputeCluster#create}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#delete MachineLearningComputeCluster#delete}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#read MachineLearningComputeCluster#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#create MachineLearningComputeCluster#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#delete MachineLearningComputeCluster#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.75.0/docs/resources/machine_learning_compute_cluster#read MachineLearningComputeCluster#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### MachineLearningComputeClusterIdentityOutputReference <a name="MachineLearningComputeClusterIdentityOutputReference" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/machinelearningcomputecluster"

machinelearningcomputecluster.NewMachineLearningComputeClusterIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MachineLearningComputeClusterIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity">MachineLearningComputeClusterIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() MachineLearningComputeClusterIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterIdentity">MachineLearningComputeClusterIdentity</a>

---


### MachineLearningComputeClusterScaleSettingsOutputReference <a name="MachineLearningComputeClusterScaleSettingsOutputReference" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/machinelearningcomputecluster"

machinelearningcomputecluster.NewMachineLearningComputeClusterScaleSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MachineLearningComputeClusterScaleSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.maxNodeCountInput">MaxNodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.minNodeCountInput">MinNodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.scaleDownNodesAfterIdleDurationInput">ScaleDownNodesAfterIdleDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.maxNodeCount">MaxNodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.minNodeCount">MinNodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.scaleDownNodesAfterIdleDuration">ScaleDownNodesAfterIdleDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings">MachineLearningComputeClusterScaleSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxNodeCountInput`<sup>Optional</sup> <a name="MaxNodeCountInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.maxNodeCountInput"></a>

```go
func MaxNodeCountInput() *f64
```

- *Type:* *f64

---

##### `MinNodeCountInput`<sup>Optional</sup> <a name="MinNodeCountInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.minNodeCountInput"></a>

```go
func MinNodeCountInput() *f64
```

- *Type:* *f64

---

##### `ScaleDownNodesAfterIdleDurationInput`<sup>Optional</sup> <a name="ScaleDownNodesAfterIdleDurationInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.scaleDownNodesAfterIdleDurationInput"></a>

```go
func ScaleDownNodesAfterIdleDurationInput() *string
```

- *Type:* *string

---

##### `MaxNodeCount`<sup>Required</sup> <a name="MaxNodeCount" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.maxNodeCount"></a>

```go
func MaxNodeCount() *f64
```

- *Type:* *f64

---

##### `MinNodeCount`<sup>Required</sup> <a name="MinNodeCount" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.minNodeCount"></a>

```go
func MinNodeCount() *f64
```

- *Type:* *f64

---

##### `ScaleDownNodesAfterIdleDuration`<sup>Required</sup> <a name="ScaleDownNodesAfterIdleDuration" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.scaleDownNodesAfterIdleDuration"></a>

```go
func ScaleDownNodesAfterIdleDuration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() MachineLearningComputeClusterScaleSettings
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterScaleSettings">MachineLearningComputeClusterScaleSettings</a>

---


### MachineLearningComputeClusterSshOutputReference <a name="MachineLearningComputeClusterSshOutputReference" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/machinelearningcomputecluster"

machinelearningcomputecluster.NewMachineLearningComputeClusterSshOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MachineLearningComputeClusterSshOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.resetAdminPassword">ResetAdminPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.resetKeyValue">ResetKeyValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdminPassword` <a name="ResetAdminPassword" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.resetAdminPassword"></a>

```go
func ResetAdminPassword()
```

##### `ResetKeyValue` <a name="ResetKeyValue" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.resetKeyValue"></a>

```go
func ResetKeyValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.adminPasswordInput">AdminPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.adminUsernameInput">AdminUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.keyValueInput">KeyValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.adminPassword">AdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.adminUsername">AdminUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.keyValue">KeyValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh">MachineLearningComputeClusterSsh</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminPasswordInput`<sup>Optional</sup> <a name="AdminPasswordInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.adminPasswordInput"></a>

```go
func AdminPasswordInput() *string
```

- *Type:* *string

---

##### `AdminUsernameInput`<sup>Optional</sup> <a name="AdminUsernameInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.adminUsernameInput"></a>

```go
func AdminUsernameInput() *string
```

- *Type:* *string

---

##### `KeyValueInput`<sup>Optional</sup> <a name="KeyValueInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.keyValueInput"></a>

```go
func KeyValueInput() *string
```

- *Type:* *string

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.adminPassword"></a>

```go
func AdminPassword() *string
```

- *Type:* *string

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.adminUsername"></a>

```go
func AdminUsername() *string
```

- *Type:* *string

---

##### `KeyValue`<sup>Required</sup> <a name="KeyValue" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.keyValue"></a>

```go
func KeyValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSshOutputReference.property.internalValue"></a>

```go
func InternalValue() MachineLearningComputeClusterSsh
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterSsh">MachineLearningComputeClusterSsh</a>

---


### MachineLearningComputeClusterTimeoutsOutputReference <a name="MachineLearningComputeClusterTimeoutsOutputReference" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v10/machinelearningcomputecluster"

machinelearningcomputecluster.NewMachineLearningComputeClusterTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MachineLearningComputeClusterTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.machineLearningComputeCluster.MachineLearningComputeClusterTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



