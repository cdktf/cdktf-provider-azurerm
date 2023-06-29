# `azurerm_machine_learning_datastore_datalake_gen2`

Refer to the Terraform Registory for docs: [`azurerm_machine_learning_datastore_datalake_gen2`](https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/machine_learning_datastore_datalake_gen2).

# `machineLearningDatastoreDatalakeGen2` Submodule <a name="`machineLearningDatastoreDatalakeGen2` Submodule" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MachineLearningDatastoreDatalakeGen2 <a name="MachineLearningDatastoreDatalakeGen2" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/machine_learning_datastore_datalake_gen2 azurerm_machine_learning_datastore_datalake_gen2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/machinelearningdatastoredatalakegen2"

machinelearningdatastoredatalakegen2.NewMachineLearningDatastoreDatalakeGen2(scope Construct, id *string, config MachineLearningDatastoreDatalakeGen2Config) MachineLearningDatastoreDatalakeGen2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config">MachineLearningDatastoreDatalakeGen2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config">MachineLearningDatastoreDatalakeGen2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetAuthorityUrl">ResetAuthorityUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetServiceDataIdentity">ResetServiceDataIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetTenantId">ResetTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.putTimeouts"></a>

```go
func PutTimeouts(value MachineLearningDatastoreDatalakeGen2Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts">MachineLearningDatastoreDatalakeGen2Timeouts</a>

---

##### `ResetAuthorityUrl` <a name="ResetAuthorityUrl" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetAuthorityUrl"></a>

```go
func ResetAuthorityUrl()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetId"></a>

```go
func ResetId()
```

##### `ResetServiceDataIdentity` <a name="ResetServiceDataIdentity" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetServiceDataIdentity"></a>

```go
func ResetServiceDataIdentity()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetTenantId"></a>

```go
func ResetTenantId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/machinelearningdatastoredatalakegen2"

machinelearningdatastoredatalakegen2.MachineLearningDatastoreDatalakeGen2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/machinelearningdatastoredatalakegen2"

machinelearningdatastoredatalakegen2.MachineLearningDatastoreDatalakeGen2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/machinelearningdatastoredatalakegen2"

machinelearningdatastoredatalakegen2.MachineLearningDatastoreDatalakeGen2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.isDefault">IsDefault</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference">MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.authorityUrlInput">AuthorityUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.serviceDataIdentityInput">ServiceDataIdentityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.storageContainerIdInput">StorageContainerIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.authorityUrl">AuthorityUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.serviceDataIdentity">ServiceDataIdentity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.storageContainerId">StorageContainerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.isDefault"></a>

```go
func IsDefault() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.timeouts"></a>

```go
func Timeouts() MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference">MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference</a>

---

##### `AuthorityUrlInput`<sup>Optional</sup> <a name="AuthorityUrlInput" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.authorityUrlInput"></a>

```go
func AuthorityUrlInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ServiceDataIdentityInput`<sup>Optional</sup> <a name="ServiceDataIdentityInput" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.serviceDataIdentityInput"></a>

```go
func ServiceDataIdentityInput() *string
```

- *Type:* *string

---

##### `StorageContainerIdInput`<sup>Optional</sup> <a name="StorageContainerIdInput" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.storageContainerIdInput"></a>

```go
func StorageContainerIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `AuthorityUrl`<sup>Required</sup> <a name="AuthorityUrl" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.authorityUrl"></a>

```go
func AuthorityUrl() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ServiceDataIdentity`<sup>Required</sup> <a name="ServiceDataIdentity" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.serviceDataIdentity"></a>

```go
func ServiceDataIdentity() *string
```

- *Type:* *string

---

##### `StorageContainerId`<sup>Required</sup> <a name="StorageContainerId" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.storageContainerId"></a>

```go
func StorageContainerId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MachineLearningDatastoreDatalakeGen2Config <a name="MachineLearningDatastoreDatalakeGen2Config" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/machinelearningdatastoredatalakegen2"

&machinelearningdatastoredatalakegen2.MachineLearningDatastoreDatalakeGen2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	StorageContainerId: *string,
	WorkspaceId: *string,
	AuthorityUrl: *string,
	ClientId: *string,
	ClientSecret: *string,
	Description: *string,
	Id: *string,
	ServiceDataIdentity: *string,
	Tags: *map[string]*string,
	TenantId: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/machine_learning_datastore_datalake_gen2#name MachineLearningDatastoreDatalakeGen2#name}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.storageContainerId">StorageContainerId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/machine_learning_datastore_datalake_gen2#storage_container_id MachineLearningDatastoreDatalakeGen2#storage_container_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/machine_learning_datastore_datalake_gen2#workspace_id MachineLearningDatastoreDatalakeGen2#workspace_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.authorityUrl">AuthorityUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/machine_learning_datastore_datalake_gen2#authority_url MachineLearningDatastoreDatalakeGen2#authority_url}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/machine_learning_datastore_datalake_gen2#client_id MachineLearningDatastoreDatalakeGen2#client_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/machine_learning_datastore_datalake_gen2#client_secret MachineLearningDatastoreDatalakeGen2#client_secret}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/machine_learning_datastore_datalake_gen2#description MachineLearningDatastoreDatalakeGen2#description}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/machine_learning_datastore_datalake_gen2#id MachineLearningDatastoreDatalakeGen2#id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.serviceDataIdentity">ServiceDataIdentity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/machine_learning_datastore_datalake_gen2#service_data_identity MachineLearningDatastoreDatalakeGen2#service_data_identity}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/machine_learning_datastore_datalake_gen2#tags MachineLearningDatastoreDatalakeGen2#tags}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.tenantId">TenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/machine_learning_datastore_datalake_gen2#tenant_id MachineLearningDatastoreDatalakeGen2#tenant_id}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts">MachineLearningDatastoreDatalakeGen2Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/machine_learning_datastore_datalake_gen2#name MachineLearningDatastoreDatalakeGen2#name}.

---

##### `StorageContainerId`<sup>Required</sup> <a name="StorageContainerId" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.storageContainerId"></a>

```go
StorageContainerId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/machine_learning_datastore_datalake_gen2#storage_container_id MachineLearningDatastoreDatalakeGen2#storage_container_id}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/machine_learning_datastore_datalake_gen2#workspace_id MachineLearningDatastoreDatalakeGen2#workspace_id}.

---

##### `AuthorityUrl`<sup>Optional</sup> <a name="AuthorityUrl" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.authorityUrl"></a>

```go
AuthorityUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/machine_learning_datastore_datalake_gen2#authority_url MachineLearningDatastoreDatalakeGen2#authority_url}.

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/machine_learning_datastore_datalake_gen2#client_id MachineLearningDatastoreDatalakeGen2#client_id}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/machine_learning_datastore_datalake_gen2#client_secret MachineLearningDatastoreDatalakeGen2#client_secret}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/machine_learning_datastore_datalake_gen2#description MachineLearningDatastoreDatalakeGen2#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/machine_learning_datastore_datalake_gen2#id MachineLearningDatastoreDatalakeGen2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ServiceDataIdentity`<sup>Optional</sup> <a name="ServiceDataIdentity" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.serviceDataIdentity"></a>

```go
ServiceDataIdentity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/machine_learning_datastore_datalake_gen2#service_data_identity MachineLearningDatastoreDatalakeGen2#service_data_identity}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/machine_learning_datastore_datalake_gen2#tags MachineLearningDatastoreDatalakeGen2#tags}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/machine_learning_datastore_datalake_gen2#tenant_id MachineLearningDatastoreDatalakeGen2#tenant_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Config.property.timeouts"></a>

```go
Timeouts MachineLearningDatastoreDatalakeGen2Timeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts">MachineLearningDatastoreDatalakeGen2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/machine_learning_datastore_datalake_gen2#timeouts MachineLearningDatastoreDatalakeGen2#timeouts}

---

### MachineLearningDatastoreDatalakeGen2Timeouts <a name="MachineLearningDatastoreDatalakeGen2Timeouts" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/machinelearningdatastoredatalakegen2"

&machinelearningdatastoredatalakegen2.MachineLearningDatastoreDatalakeGen2Timeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/machine_learning_datastore_datalake_gen2#create MachineLearningDatastoreDatalakeGen2#create}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/machine_learning_datastore_datalake_gen2#delete MachineLearningDatastoreDatalakeGen2#delete}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/machine_learning_datastore_datalake_gen2#read MachineLearningDatastoreDatalakeGen2#read}. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/machine_learning_datastore_datalake_gen2#update MachineLearningDatastoreDatalakeGen2#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/machine_learning_datastore_datalake_gen2#create MachineLearningDatastoreDatalakeGen2#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/machine_learning_datastore_datalake_gen2#delete MachineLearningDatastoreDatalakeGen2#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/machine_learning_datastore_datalake_gen2#read MachineLearningDatastoreDatalakeGen2#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2Timeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/machine_learning_datastore_datalake_gen2#update MachineLearningDatastoreDatalakeGen2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference <a name="MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/machinelearningdatastoredatalakegen2"

machinelearningdatastoredatalakegen2.NewMachineLearningDatastoreDatalakeGen2TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.machineLearningDatastoreDatalakeGen2.MachineLearningDatastoreDatalakeGen2TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



