# `azurerm_machine_learning_datastore_fileshare`

Refer to the Terraform Registory for docs: [`azurerm_machine_learning_datastore_fileshare`](https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_fileshare).

# `machineLearningDatastoreFileshare` Submodule <a name="`machineLearningDatastoreFileshare` Submodule" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MachineLearningDatastoreFileshare <a name="MachineLearningDatastoreFileshare" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_fileshare azurerm_machine_learning_datastore_fileshare}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/machinelearningdatastorefileshare"

machinelearningdatastorefileshare.NewMachineLearningDatastoreFileshare(scope Construct, id *string, config MachineLearningDatastoreFileshareConfig) MachineLearningDatastoreFileshare
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig">MachineLearningDatastoreFileshareConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig">MachineLearningDatastoreFileshareConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.resetAccountKey">ResetAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.resetServiceDataIdentity">ResetServiceDataIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.resetSharedAccessSignature">ResetSharedAccessSignature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.putTimeouts"></a>

```go
func PutTimeouts(value MachineLearningDatastoreFileshareTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeouts">MachineLearningDatastoreFileshareTimeouts</a>

---

##### `ResetAccountKey` <a name="ResetAccountKey" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.resetAccountKey"></a>

```go
func ResetAccountKey()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.resetId"></a>

```go
func ResetId()
```

##### `ResetServiceDataIdentity` <a name="ResetServiceDataIdentity" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.resetServiceDataIdentity"></a>

```go
func ResetServiceDataIdentity()
```

##### `ResetSharedAccessSignature` <a name="ResetSharedAccessSignature" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.resetSharedAccessSignature"></a>

```go
func ResetSharedAccessSignature()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/machinelearningdatastorefileshare"

machinelearningdatastorefileshare.MachineLearningDatastoreFileshare_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/machinelearningdatastorefileshare"

machinelearningdatastorefileshare.MachineLearningDatastoreFileshare_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/machinelearningdatastorefileshare"

machinelearningdatastorefileshare.MachineLearningDatastoreFileshare_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.isDefault">IsDefault</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference">MachineLearningDatastoreFileshareTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.accountKeyInput">AccountKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.serviceDataIdentityInput">ServiceDataIdentityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.sharedAccessSignatureInput">SharedAccessSignatureInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.storageFileshareIdInput">StorageFileshareIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.accountKey">AccountKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.serviceDataIdentity">ServiceDataIdentity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.sharedAccessSignature">SharedAccessSignature</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.storageFileshareId">StorageFileshareId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.isDefault"></a>

```go
func IsDefault() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.timeouts"></a>

```go
func Timeouts() MachineLearningDatastoreFileshareTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference">MachineLearningDatastoreFileshareTimeoutsOutputReference</a>

---

##### `AccountKeyInput`<sup>Optional</sup> <a name="AccountKeyInput" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.accountKeyInput"></a>

```go
func AccountKeyInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ServiceDataIdentityInput`<sup>Optional</sup> <a name="ServiceDataIdentityInput" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.serviceDataIdentityInput"></a>

```go
func ServiceDataIdentityInput() *string
```

- *Type:* *string

---

##### `SharedAccessSignatureInput`<sup>Optional</sup> <a name="SharedAccessSignatureInput" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.sharedAccessSignatureInput"></a>

```go
func SharedAccessSignatureInput() *string
```

- *Type:* *string

---

##### `StorageFileshareIdInput`<sup>Optional</sup> <a name="StorageFileshareIdInput" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.storageFileshareIdInput"></a>

```go
func StorageFileshareIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `AccountKey`<sup>Required</sup> <a name="AccountKey" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.accountKey"></a>

```go
func AccountKey() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ServiceDataIdentity`<sup>Required</sup> <a name="ServiceDataIdentity" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.serviceDataIdentity"></a>

```go
func ServiceDataIdentity() *string
```

- *Type:* *string

---

##### `SharedAccessSignature`<sup>Required</sup> <a name="SharedAccessSignature" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.sharedAccessSignature"></a>

```go
func SharedAccessSignature() *string
```

- *Type:* *string

---

##### `StorageFileshareId`<sup>Required</sup> <a name="StorageFileshareId" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.storageFileshareId"></a>

```go
func StorageFileshareId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshare.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MachineLearningDatastoreFileshareConfig <a name="MachineLearningDatastoreFileshareConfig" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/machinelearningdatastorefileshare"

&machinelearningdatastorefileshare.MachineLearningDatastoreFileshareConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	StorageFileshareId: *string,
	WorkspaceId: *string,
	AccountKey: *string,
	Description: *string,
	Id: *string,
	ServiceDataIdentity: *string,
	SharedAccessSignature: *string,
	Tags: *map[string]*string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_fileshare#name MachineLearningDatastoreFileshare#name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.storageFileshareId">StorageFileshareId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_fileshare#storage_fileshare_id MachineLearningDatastoreFileshare#storage_fileshare_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_fileshare#workspace_id MachineLearningDatastoreFileshare#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.accountKey">AccountKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_fileshare#account_key MachineLearningDatastoreFileshare#account_key}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_fileshare#description MachineLearningDatastoreFileshare#description}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_fileshare#id MachineLearningDatastoreFileshare#id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.serviceDataIdentity">ServiceDataIdentity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_fileshare#service_data_identity MachineLearningDatastoreFileshare#service_data_identity}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.sharedAccessSignature">SharedAccessSignature</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_fileshare#shared_access_signature MachineLearningDatastoreFileshare#shared_access_signature}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_fileshare#tags MachineLearningDatastoreFileshare#tags}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeouts">MachineLearningDatastoreFileshareTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_fileshare#name MachineLearningDatastoreFileshare#name}.

---

##### `StorageFileshareId`<sup>Required</sup> <a name="StorageFileshareId" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.storageFileshareId"></a>

```go
StorageFileshareId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_fileshare#storage_fileshare_id MachineLearningDatastoreFileshare#storage_fileshare_id}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_fileshare#workspace_id MachineLearningDatastoreFileshare#workspace_id}.

---

##### `AccountKey`<sup>Optional</sup> <a name="AccountKey" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.accountKey"></a>

```go
AccountKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_fileshare#account_key MachineLearningDatastoreFileshare#account_key}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_fileshare#description MachineLearningDatastoreFileshare#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_fileshare#id MachineLearningDatastoreFileshare#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ServiceDataIdentity`<sup>Optional</sup> <a name="ServiceDataIdentity" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.serviceDataIdentity"></a>

```go
ServiceDataIdentity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_fileshare#service_data_identity MachineLearningDatastoreFileshare#service_data_identity}.

---

##### `SharedAccessSignature`<sup>Optional</sup> <a name="SharedAccessSignature" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.sharedAccessSignature"></a>

```go
SharedAccessSignature *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_fileshare#shared_access_signature MachineLearningDatastoreFileshare#shared_access_signature}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_fileshare#tags MachineLearningDatastoreFileshare#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareConfig.property.timeouts"></a>

```go
Timeouts MachineLearningDatastoreFileshareTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeouts">MachineLearningDatastoreFileshareTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_fileshare#timeouts MachineLearningDatastoreFileshare#timeouts}

---

### MachineLearningDatastoreFileshareTimeouts <a name="MachineLearningDatastoreFileshareTimeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/machinelearningdatastorefileshare"

&machinelearningdatastorefileshare.MachineLearningDatastoreFileshareTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_fileshare#create MachineLearningDatastoreFileshare#create}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_fileshare#delete MachineLearningDatastoreFileshare#delete}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_fileshare#read MachineLearningDatastoreFileshare#read}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_fileshare#update MachineLearningDatastoreFileshare#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_fileshare#create MachineLearningDatastoreFileshare#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_fileshare#delete MachineLearningDatastoreFileshare#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_fileshare#read MachineLearningDatastoreFileshare#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.60.0/docs/resources/machine_learning_datastore_fileshare#update MachineLearningDatastoreFileshare#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MachineLearningDatastoreFileshareTimeoutsOutputReference <a name="MachineLearningDatastoreFileshareTimeoutsOutputReference" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/machinelearningdatastorefileshare"

machinelearningdatastorefileshare.NewMachineLearningDatastoreFileshareTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MachineLearningDatastoreFileshareTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.machineLearningDatastoreFileshare.MachineLearningDatastoreFileshareTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



