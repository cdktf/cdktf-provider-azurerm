# `azurerm_machine_learning_compute_instance`

Refer to the Terraform Registory for docs: [`azurerm_machine_learning_compute_instance`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance).

# `machineLearningComputeInstance` Submodule <a name="`machineLearningComputeInstance` Submodule" id="@cdktf/provider-azurerm.machineLearningComputeInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MachineLearningComputeInstance <a name="MachineLearningComputeInstance" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance azurerm_machine_learning_compute_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/machinelearningcomputeinstance"

machinelearningcomputeinstance.NewMachineLearningComputeInstance(scope Construct, id *string, config MachineLearningComputeInstanceConfig) MachineLearningComputeInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig">MachineLearningComputeInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig">MachineLearningComputeInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.putAssignToUser">PutAssignToUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.putSsh">PutSsh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetAssignToUser">ResetAssignToUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetAuthorizationType">ResetAuthorizationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetLocalAuthEnabled">ResetLocalAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetSsh">ResetSsh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetSubnetResourceId">ResetSubnetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAssignToUser` <a name="PutAssignToUser" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.putAssignToUser"></a>

```go
func PutAssignToUser(value MachineLearningComputeInstanceAssignToUser)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.putAssignToUser.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUser">MachineLearningComputeInstanceAssignToUser</a>

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.putIdentity"></a>

```go
func PutIdentity(value MachineLearningComputeInstanceIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentity">MachineLearningComputeInstanceIdentity</a>

---

##### `PutSsh` <a name="PutSsh" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.putSsh"></a>

```go
func PutSsh(value MachineLearningComputeInstanceSsh)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.putSsh.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSsh">MachineLearningComputeInstanceSsh</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.putTimeouts"></a>

```go
func PutTimeouts(value MachineLearningComputeInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeouts">MachineLearningComputeInstanceTimeouts</a>

---

##### `ResetAssignToUser` <a name="ResetAssignToUser" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetAssignToUser"></a>

```go
func ResetAssignToUser()
```

##### `ResetAuthorizationType` <a name="ResetAuthorizationType" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetAuthorizationType"></a>

```go
func ResetAuthorizationType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetLocalAuthEnabled` <a name="ResetLocalAuthEnabled" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetLocalAuthEnabled"></a>

```go
func ResetLocalAuthEnabled()
```

##### `ResetSsh` <a name="ResetSsh" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetSsh"></a>

```go
func ResetSsh()
```

##### `ResetSubnetResourceId` <a name="ResetSubnetResourceId" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetSubnetResourceId"></a>

```go
func ResetSubnetResourceId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/machinelearningcomputeinstance"

machinelearningcomputeinstance.MachineLearningComputeInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/machinelearningcomputeinstance"

machinelearningcomputeinstance.MachineLearningComputeInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/machinelearningcomputeinstance"

machinelearningcomputeinstance.MachineLearningComputeInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.assignToUser">AssignToUser</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference">MachineLearningComputeInstanceAssignToUserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference">MachineLearningComputeInstanceIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.ssh">Ssh</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference">MachineLearningComputeInstanceSshOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference">MachineLearningComputeInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.assignToUserInput">AssignToUserInput</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUser">MachineLearningComputeInstanceAssignToUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.authorizationTypeInput">AuthorizationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentity">MachineLearningComputeInstanceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.localAuthEnabledInput">LocalAuthEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.machineLearningWorkspaceIdInput">MachineLearningWorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.sshInput">SshInput</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSsh">MachineLearningComputeInstanceSsh</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.subnetResourceIdInput">SubnetResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.virtualMachineSizeInput">VirtualMachineSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.authorizationType">AuthorizationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.localAuthEnabled">LocalAuthEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.machineLearningWorkspaceId">MachineLearningWorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.subnetResourceId">SubnetResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.virtualMachineSize">VirtualMachineSize</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssignToUser`<sup>Required</sup> <a name="AssignToUser" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.assignToUser"></a>

```go
func AssignToUser() MachineLearningComputeInstanceAssignToUserOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference">MachineLearningComputeInstanceAssignToUserOutputReference</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.identity"></a>

```go
func Identity() MachineLearningComputeInstanceIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference">MachineLearningComputeInstanceIdentityOutputReference</a>

---

##### `Ssh`<sup>Required</sup> <a name="Ssh" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.ssh"></a>

```go
func Ssh() MachineLearningComputeInstanceSshOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference">MachineLearningComputeInstanceSshOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.timeouts"></a>

```go
func Timeouts() MachineLearningComputeInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference">MachineLearningComputeInstanceTimeoutsOutputReference</a>

---

##### `AssignToUserInput`<sup>Optional</sup> <a name="AssignToUserInput" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.assignToUserInput"></a>

```go
func AssignToUserInput() MachineLearningComputeInstanceAssignToUser
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUser">MachineLearningComputeInstanceAssignToUser</a>

---

##### `AuthorizationTypeInput`<sup>Optional</sup> <a name="AuthorizationTypeInput" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.authorizationTypeInput"></a>

```go
func AuthorizationTypeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.identityInput"></a>

```go
func IdentityInput() MachineLearningComputeInstanceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentity">MachineLearningComputeInstanceIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocalAuthEnabledInput`<sup>Optional</sup> <a name="LocalAuthEnabledInput" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.localAuthEnabledInput"></a>

```go
func LocalAuthEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MachineLearningWorkspaceIdInput`<sup>Optional</sup> <a name="MachineLearningWorkspaceIdInput" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.machineLearningWorkspaceIdInput"></a>

```go
func MachineLearningWorkspaceIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SshInput`<sup>Optional</sup> <a name="SshInput" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.sshInput"></a>

```go
func SshInput() MachineLearningComputeInstanceSsh
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSsh">MachineLearningComputeInstanceSsh</a>

---

##### `SubnetResourceIdInput`<sup>Optional</sup> <a name="SubnetResourceIdInput" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.subnetResourceIdInput"></a>

```go
func SubnetResourceIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualMachineSizeInput`<sup>Optional</sup> <a name="VirtualMachineSizeInput" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.virtualMachineSizeInput"></a>

```go
func VirtualMachineSizeInput() *string
```

- *Type:* *string

---

##### `AuthorizationType`<sup>Required</sup> <a name="AuthorizationType" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.authorizationType"></a>

```go
func AuthorizationType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LocalAuthEnabled`<sup>Required</sup> <a name="LocalAuthEnabled" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.localAuthEnabled"></a>

```go
func LocalAuthEnabled() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MachineLearningWorkspaceId`<sup>Required</sup> <a name="MachineLearningWorkspaceId" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.machineLearningWorkspaceId"></a>

```go
func MachineLearningWorkspaceId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SubnetResourceId`<sup>Required</sup> <a name="SubnetResourceId" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.subnetResourceId"></a>

```go
func SubnetResourceId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VirtualMachineSize`<sup>Required</sup> <a name="VirtualMachineSize" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.virtualMachineSize"></a>

```go
func VirtualMachineSize() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MachineLearningComputeInstanceAssignToUser <a name="MachineLearningComputeInstanceAssignToUser" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUser.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/machinelearningcomputeinstance"

&machinelearningcomputeinstance.MachineLearningComputeInstanceAssignToUser {
	ObjectId: *string,
	TenantId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUser.property.objectId">ObjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#object_id MachineLearningComputeInstance#object_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUser.property.tenantId">TenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#tenant_id MachineLearningComputeInstance#tenant_id}. |

---

##### `ObjectId`<sup>Optional</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUser.property.objectId"></a>

```go
ObjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#object_id MachineLearningComputeInstance#object_id}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUser.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#tenant_id MachineLearningComputeInstance#tenant_id}.

---

### MachineLearningComputeInstanceConfig <a name="MachineLearningComputeInstanceConfig" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/machinelearningcomputeinstance"

&machinelearningcomputeinstance.MachineLearningComputeInstanceConfig {
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
	VirtualMachineSize: *string,
	AssignToUser: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUser,
	AuthorizationType: *string,
	Description: *string,
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentity,
	LocalAuthEnabled: interface{},
	Ssh: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSsh,
	SubnetResourceId: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#location MachineLearningComputeInstance#location}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.machineLearningWorkspaceId">MachineLearningWorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#machine_learning_workspace_id MachineLearningComputeInstance#machine_learning_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#name MachineLearningComputeInstance#name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.virtualMachineSize">VirtualMachineSize</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#virtual_machine_size MachineLearningComputeInstance#virtual_machine_size}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.assignToUser">AssignToUser</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUser">MachineLearningComputeInstanceAssignToUser</a></code> | assign_to_user block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.authorizationType">AuthorizationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#authorization_type MachineLearningComputeInstance#authorization_type}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#description MachineLearningComputeInstance#description}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#id MachineLearningComputeInstance#id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentity">MachineLearningComputeInstanceIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.localAuthEnabled">LocalAuthEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#local_auth_enabled MachineLearningComputeInstance#local_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.ssh">Ssh</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSsh">MachineLearningComputeInstanceSsh</a></code> | ssh block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.subnetResourceId">SubnetResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#subnet_resource_id MachineLearningComputeInstance#subnet_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#tags MachineLearningComputeInstance#tags}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeouts">MachineLearningComputeInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#location MachineLearningComputeInstance#location}.

---

##### `MachineLearningWorkspaceId`<sup>Required</sup> <a name="MachineLearningWorkspaceId" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.machineLearningWorkspaceId"></a>

```go
MachineLearningWorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#machine_learning_workspace_id MachineLearningComputeInstance#machine_learning_workspace_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#name MachineLearningComputeInstance#name}.

---

##### `VirtualMachineSize`<sup>Required</sup> <a name="VirtualMachineSize" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.virtualMachineSize"></a>

```go
VirtualMachineSize *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#virtual_machine_size MachineLearningComputeInstance#virtual_machine_size}.

---

##### `AssignToUser`<sup>Optional</sup> <a name="AssignToUser" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.assignToUser"></a>

```go
AssignToUser MachineLearningComputeInstanceAssignToUser
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUser">MachineLearningComputeInstanceAssignToUser</a>

assign_to_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#assign_to_user MachineLearningComputeInstance#assign_to_user}

---

##### `AuthorizationType`<sup>Optional</sup> <a name="AuthorizationType" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.authorizationType"></a>

```go
AuthorizationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#authorization_type MachineLearningComputeInstance#authorization_type}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#description MachineLearningComputeInstance#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#id MachineLearningComputeInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.identity"></a>

```go
Identity MachineLearningComputeInstanceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentity">MachineLearningComputeInstanceIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#identity MachineLearningComputeInstance#identity}

---

##### `LocalAuthEnabled`<sup>Optional</sup> <a name="LocalAuthEnabled" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.localAuthEnabled"></a>

```go
LocalAuthEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#local_auth_enabled MachineLearningComputeInstance#local_auth_enabled}.

---

##### `Ssh`<sup>Optional</sup> <a name="Ssh" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.ssh"></a>

```go
Ssh MachineLearningComputeInstanceSsh
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSsh">MachineLearningComputeInstanceSsh</a>

ssh block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#ssh MachineLearningComputeInstance#ssh}

---

##### `SubnetResourceId`<sup>Optional</sup> <a name="SubnetResourceId" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.subnetResourceId"></a>

```go
SubnetResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#subnet_resource_id MachineLearningComputeInstance#subnet_resource_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#tags MachineLearningComputeInstance#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceConfig.property.timeouts"></a>

```go
Timeouts MachineLearningComputeInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeouts">MachineLearningComputeInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#timeouts MachineLearningComputeInstance#timeouts}

---

### MachineLearningComputeInstanceIdentity <a name="MachineLearningComputeInstanceIdentity" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/machinelearningcomputeinstance"

&machinelearningcomputeinstance.MachineLearningComputeInstanceIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#type MachineLearningComputeInstance#type}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#identity_ids MachineLearningComputeInstance#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#type MachineLearningComputeInstance#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#identity_ids MachineLearningComputeInstance#identity_ids}.

---

### MachineLearningComputeInstanceSsh <a name="MachineLearningComputeInstanceSsh" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSsh"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSsh.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/machinelearningcomputeinstance"

&machinelearningcomputeinstance.MachineLearningComputeInstanceSsh {
	PublicKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSsh.property.publicKey">PublicKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#public_key MachineLearningComputeInstance#public_key}. |

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSsh.property.publicKey"></a>

```go
PublicKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#public_key MachineLearningComputeInstance#public_key}.

---

### MachineLearningComputeInstanceTimeouts <a name="MachineLearningComputeInstanceTimeouts" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/machinelearningcomputeinstance"

&machinelearningcomputeinstance.MachineLearningComputeInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#create MachineLearningComputeInstance#create}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#delete MachineLearningComputeInstance#delete}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#read MachineLearningComputeInstance#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#create MachineLearningComputeInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#delete MachineLearningComputeInstance#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/machine_learning_compute_instance#read MachineLearningComputeInstance#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### MachineLearningComputeInstanceAssignToUserOutputReference <a name="MachineLearningComputeInstanceAssignToUserOutputReference" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/machinelearningcomputeinstance"

machinelearningcomputeinstance.NewMachineLearningComputeInstanceAssignToUserOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MachineLearningComputeInstanceAssignToUserOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.resetObjectId">ResetObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.resetTenantId">ResetTenantId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetObjectId` <a name="ResetObjectId" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.resetObjectId"></a>

```go
func ResetObjectId()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.resetTenantId"></a>

```go
func ResetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.property.objectIdInput">ObjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.property.objectId">ObjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUser">MachineLearningComputeInstanceAssignToUser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.property.objectIdInput"></a>

```go
func ObjectIdInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.property.objectId"></a>

```go
func ObjectId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUserOutputReference.property.internalValue"></a>

```go
func InternalValue() MachineLearningComputeInstanceAssignToUser
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceAssignToUser">MachineLearningComputeInstanceAssignToUser</a>

---


### MachineLearningComputeInstanceIdentityOutputReference <a name="MachineLearningComputeInstanceIdentityOutputReference" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/machinelearningcomputeinstance"

machinelearningcomputeinstance.NewMachineLearningComputeInstanceIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MachineLearningComputeInstanceIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentity">MachineLearningComputeInstanceIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() MachineLearningComputeInstanceIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceIdentity">MachineLearningComputeInstanceIdentity</a>

---


### MachineLearningComputeInstanceSshOutputReference <a name="MachineLearningComputeInstanceSshOutputReference" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/machinelearningcomputeinstance"

machinelearningcomputeinstance.NewMachineLearningComputeInstanceSshOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MachineLearningComputeInstanceSshOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.property.publicKeyInput">PublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.property.publicKey">PublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSsh">MachineLearningComputeInstanceSsh</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `PublicKeyInput`<sup>Optional</sup> <a name="PublicKeyInput" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.property.publicKeyInput"></a>

```go
func PublicKeyInput() *string
```

- *Type:* *string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.property.publicKey"></a>

```go
func PublicKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSshOutputReference.property.internalValue"></a>

```go
func InternalValue() MachineLearningComputeInstanceSsh
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceSsh">MachineLearningComputeInstanceSsh</a>

---


### MachineLearningComputeInstanceTimeoutsOutputReference <a name="MachineLearningComputeInstanceTimeoutsOutputReference" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/machinelearningcomputeinstance"

machinelearningcomputeinstance.NewMachineLearningComputeInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MachineLearningComputeInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.machineLearningComputeInstance.MachineLearningComputeInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



