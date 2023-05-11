# `azurerm_machine_learning_synapse_spark`

Refer to the Terraform Registory for docs: [`azurerm_machine_learning_synapse_spark`](https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/machine_learning_synapse_spark).

# `machineLearningSynapseSpark` Submodule <a name="`machineLearningSynapseSpark` Submodule" id="@cdktf/provider-azurerm.machineLearningSynapseSpark"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MachineLearningSynapseSpark <a name="MachineLearningSynapseSpark" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/machine_learning_synapse_spark azurerm_machine_learning_synapse_spark}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/machinelearningsynapsespark"

machinelearningsynapsespark.NewMachineLearningSynapseSpark(scope Construct, id *string, config MachineLearningSynapseSparkConfig) MachineLearningSynapseSpark
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig">MachineLearningSynapseSparkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig">MachineLearningSynapseSparkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.putIdentity">PutIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetIdentity">ResetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetLocalAuthEnabled">ResetLocalAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutIdentity` <a name="PutIdentity" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.putIdentity"></a>

```go
func PutIdentity(value MachineLearningSynapseSparkIdentity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity">MachineLearningSynapseSparkIdentity</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.putTimeouts"></a>

```go
func PutTimeouts(value MachineLearningSynapseSparkTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts">MachineLearningSynapseSparkTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentity` <a name="ResetIdentity" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetIdentity"></a>

```go
func ResetIdentity()
```

##### `ResetLocalAuthEnabled` <a name="ResetLocalAuthEnabled" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetLocalAuthEnabled"></a>

```go
func ResetLocalAuthEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/machinelearningsynapsespark"

machinelearningsynapsespark.MachineLearningSynapseSpark_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/machinelearningsynapsespark"

machinelearningsynapsespark.MachineLearningSynapseSpark_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/machinelearningsynapsespark"

machinelearningsynapsespark.MachineLearningSynapseSpark_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference">MachineLearningSynapseSparkIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference">MachineLearningSynapseSparkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.identityInput">IdentityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity">MachineLearningSynapseSparkIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.localAuthEnabledInput">LocalAuthEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.machineLearningWorkspaceIdInput">MachineLearningWorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.synapseSparkPoolIdInput">SynapseSparkPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.localAuthEnabled">LocalAuthEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.machineLearningWorkspaceId">MachineLearningWorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.synapseSparkPoolId">SynapseSparkPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.identity"></a>

```go
func Identity() MachineLearningSynapseSparkIdentityOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference">MachineLearningSynapseSparkIdentityOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.timeouts"></a>

```go
func Timeouts() MachineLearningSynapseSparkTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference">MachineLearningSynapseSparkTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdentityInput`<sup>Optional</sup> <a name="IdentityInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.identityInput"></a>

```go
func IdentityInput() MachineLearningSynapseSparkIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity">MachineLearningSynapseSparkIdentity</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocalAuthEnabledInput`<sup>Optional</sup> <a name="LocalAuthEnabledInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.localAuthEnabledInput"></a>

```go
func LocalAuthEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MachineLearningWorkspaceIdInput`<sup>Optional</sup> <a name="MachineLearningWorkspaceIdInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.machineLearningWorkspaceIdInput"></a>

```go
func MachineLearningWorkspaceIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SynapseSparkPoolIdInput`<sup>Optional</sup> <a name="SynapseSparkPoolIdInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.synapseSparkPoolIdInput"></a>

```go
func SynapseSparkPoolIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LocalAuthEnabled`<sup>Required</sup> <a name="LocalAuthEnabled" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.localAuthEnabled"></a>

```go
func LocalAuthEnabled() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MachineLearningWorkspaceId`<sup>Required</sup> <a name="MachineLearningWorkspaceId" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.machineLearningWorkspaceId"></a>

```go
func MachineLearningWorkspaceId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SynapseSparkPoolId`<sup>Required</sup> <a name="SynapseSparkPoolId" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.synapseSparkPoolId"></a>

```go
func SynapseSparkPoolId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSpark.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MachineLearningSynapseSparkConfig <a name="MachineLearningSynapseSparkConfig" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/machinelearningsynapsespark"

&machinelearningsynapsespark.MachineLearningSynapseSparkConfig {
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
	SynapseSparkPoolId: *string,
	Description: *string,
	Id: *string,
	Identity: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity,
	LocalAuthEnabled: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/machine_learning_synapse_spark#location MachineLearningSynapseSpark#location}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.machineLearningWorkspaceId">MachineLearningWorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/machine_learning_synapse_spark#machine_learning_workspace_id MachineLearningSynapseSpark#machine_learning_workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/machine_learning_synapse_spark#name MachineLearningSynapseSpark#name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.synapseSparkPoolId">SynapseSparkPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/machine_learning_synapse_spark#synapse_spark_pool_id MachineLearningSynapseSpark#synapse_spark_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/machine_learning_synapse_spark#description MachineLearningSynapseSpark#description}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/machine_learning_synapse_spark#id MachineLearningSynapseSpark#id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity">MachineLearningSynapseSparkIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.localAuthEnabled">LocalAuthEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/machine_learning_synapse_spark#local_auth_enabled MachineLearningSynapseSpark#local_auth_enabled}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/machine_learning_synapse_spark#tags MachineLearningSynapseSpark#tags}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts">MachineLearningSynapseSparkTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/machine_learning_synapse_spark#location MachineLearningSynapseSpark#location}.

---

##### `MachineLearningWorkspaceId`<sup>Required</sup> <a name="MachineLearningWorkspaceId" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.machineLearningWorkspaceId"></a>

```go
MachineLearningWorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/machine_learning_synapse_spark#machine_learning_workspace_id MachineLearningSynapseSpark#machine_learning_workspace_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/machine_learning_synapse_spark#name MachineLearningSynapseSpark#name}.

---

##### `SynapseSparkPoolId`<sup>Required</sup> <a name="SynapseSparkPoolId" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.synapseSparkPoolId"></a>

```go
SynapseSparkPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/machine_learning_synapse_spark#synapse_spark_pool_id MachineLearningSynapseSpark#synapse_spark_pool_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/machine_learning_synapse_spark#description MachineLearningSynapseSpark#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/machine_learning_synapse_spark#id MachineLearningSynapseSpark#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identity`<sup>Optional</sup> <a name="Identity" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.identity"></a>

```go
Identity MachineLearningSynapseSparkIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity">MachineLearningSynapseSparkIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/machine_learning_synapse_spark#identity MachineLearningSynapseSpark#identity}

---

##### `LocalAuthEnabled`<sup>Optional</sup> <a name="LocalAuthEnabled" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.localAuthEnabled"></a>

```go
LocalAuthEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/machine_learning_synapse_spark#local_auth_enabled MachineLearningSynapseSpark#local_auth_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/machine_learning_synapse_spark#tags MachineLearningSynapseSpark#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkConfig.property.timeouts"></a>

```go
Timeouts MachineLearningSynapseSparkTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts">MachineLearningSynapseSparkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/machine_learning_synapse_spark#timeouts MachineLearningSynapseSpark#timeouts}

---

### MachineLearningSynapseSparkIdentity <a name="MachineLearningSynapseSparkIdentity" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/machinelearningsynapsespark"

&machinelearningsynapsespark.MachineLearningSynapseSparkIdentity {
	Type: *string,
	IdentityIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/machine_learning_synapse_spark#type MachineLearningSynapseSpark#type}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/machine_learning_synapse_spark#identity_ids MachineLearningSynapseSpark#identity_ids}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/machine_learning_synapse_spark#type MachineLearningSynapseSpark#type}.

---

##### `IdentityIds`<sup>Optional</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity.property.identityIds"></a>

```go
IdentityIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/machine_learning_synapse_spark#identity_ids MachineLearningSynapseSpark#identity_ids}.

---

### MachineLearningSynapseSparkTimeouts <a name="MachineLearningSynapseSparkTimeouts" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/machinelearningsynapsespark"

&machinelearningsynapsespark.MachineLearningSynapseSparkTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/machine_learning_synapse_spark#create MachineLearningSynapseSpark#create}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/machine_learning_synapse_spark#delete MachineLearningSynapseSpark#delete}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/machine_learning_synapse_spark#read MachineLearningSynapseSpark#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/machine_learning_synapse_spark#create MachineLearningSynapseSpark#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/machine_learning_synapse_spark#delete MachineLearningSynapseSpark#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.55.0/docs/resources/machine_learning_synapse_spark#read MachineLearningSynapseSpark#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### MachineLearningSynapseSparkIdentityOutputReference <a name="MachineLearningSynapseSparkIdentityOutputReference" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/machinelearningsynapsespark"

machinelearningsynapsespark.NewMachineLearningSynapseSparkIdentityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MachineLearningSynapseSparkIdentityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.resetIdentityIds">ResetIdentityIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdentityIds` <a name="ResetIdentityIds" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.resetIdentityIds"></a>

```go
func ResetIdentityIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.principalId">PrincipalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.identityIdsInput">IdentityIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.identityIds">IdentityIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity">MachineLearningSynapseSparkIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalId`<sup>Required</sup> <a name="PrincipalId" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.principalId"></a>

```go
func PrincipalId() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `IdentityIdsInput`<sup>Optional</sup> <a name="IdentityIdsInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.identityIdsInput"></a>

```go
func IdentityIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IdentityIds`<sup>Required</sup> <a name="IdentityIds" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.identityIds"></a>

```go
func IdentityIds() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentityOutputReference.property.internalValue"></a>

```go
func InternalValue() MachineLearningSynapseSparkIdentity
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkIdentity">MachineLearningSynapseSparkIdentity</a>

---


### MachineLearningSynapseSparkTimeoutsOutputReference <a name="MachineLearningSynapseSparkTimeoutsOutputReference" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/machinelearningsynapsespark"

machinelearningsynapsespark.NewMachineLearningSynapseSparkTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MachineLearningSynapseSparkTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.machineLearningSynapseSpark.MachineLearningSynapseSparkTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



