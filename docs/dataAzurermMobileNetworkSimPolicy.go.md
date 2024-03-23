# `dataAzurermMobileNetworkSimPolicy` Submodule <a name="`dataAzurermMobileNetworkSimPolicy` Submodule" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermMobileNetworkSimPolicy <a name="DataAzurermMobileNetworkSimPolicy" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/data-sources/mobile_network_sim_policy azurerm_mobile_network_sim_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmobilenetworksimpolicy"

dataazurermmobilenetworksimpolicy.NewDataAzurermMobileNetworkSimPolicy(scope Construct, id *string, config DataAzurermMobileNetworkSimPolicyConfig) DataAzurermMobileNetworkSimPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig">DataAzurermMobileNetworkSimPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig">DataAzurermMobileNetworkSimPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermMobileNetworkSimPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeouts">DataAzurermMobileNetworkSimPolicyTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermMobileNetworkSimPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmobilenetworksimpolicy"

dataazurermmobilenetworksimpolicy.DataAzurermMobileNetworkSimPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmobilenetworksimpolicy"

dataazurermmobilenetworksimpolicy.DataAzurermMobileNetworkSimPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmobilenetworksimpolicy"

dataazurermmobilenetworksimpolicy.DataAzurermMobileNetworkSimPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmobilenetworksimpolicy"

dataazurermmobilenetworksimpolicy.DataAzurermMobileNetworkSimPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermMobileNetworkSimPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermMobileNetworkSimPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermMobileNetworkSimPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/data-sources/mobile_network_sim_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermMobileNetworkSimPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.defaultSliceId">DefaultSliceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.ratFrequencySelectionPriorityIndex">RatFrequencySelectionPriorityIndex</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.registrationTimerInSeconds">RegistrationTimerInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.slice">Slice</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList">DataAzurermMobileNetworkSimPolicySliceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.tags">Tags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference">DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.userEquipmentAggregateMaximumBitRate">UserEquipmentAggregateMaximumBitRate</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList">DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.mobileNetworkIdInput">MobileNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.mobileNetworkId">MobileNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DefaultSliceId`<sup>Required</sup> <a name="DefaultSliceId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.defaultSliceId"></a>

```go
func DefaultSliceId() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `RatFrequencySelectionPriorityIndex`<sup>Required</sup> <a name="RatFrequencySelectionPriorityIndex" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.ratFrequencySelectionPriorityIndex"></a>

```go
func RatFrequencySelectionPriorityIndex() *f64
```

- *Type:* *f64

---

##### `RegistrationTimerInSeconds`<sup>Required</sup> <a name="RegistrationTimerInSeconds" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.registrationTimerInSeconds"></a>

```go
func RegistrationTimerInSeconds() *f64
```

- *Type:* *f64

---

##### `Slice`<sup>Required</sup> <a name="Slice" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.slice"></a>

```go
func Slice() DataAzurermMobileNetworkSimPolicySliceList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList">DataAzurermMobileNetworkSimPolicySliceList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.tags"></a>

```go
func Tags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.timeouts"></a>

```go
func Timeouts() DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference">DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference</a>

---

##### `UserEquipmentAggregateMaximumBitRate`<sup>Required</sup> <a name="UserEquipmentAggregateMaximumBitRate" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.userEquipmentAggregateMaximumBitRate"></a>

```go
func UserEquipmentAggregateMaximumBitRate() DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList">DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MobileNetworkIdInput`<sup>Optional</sup> <a name="MobileNetworkIdInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.mobileNetworkIdInput"></a>

```go
func MobileNetworkIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MobileNetworkId`<sup>Required</sup> <a name="MobileNetworkId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.mobileNetworkId"></a>

```go
func MobileNetworkId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermMobileNetworkSimPolicyConfig <a name="DataAzurermMobileNetworkSimPolicyConfig" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmobilenetworksimpolicy"

&dataazurermmobilenetworksimpolicy.DataAzurermMobileNetworkSimPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	MobileNetworkId: *string,
	Name: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.mobileNetworkId">MobileNetworkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/data-sources/mobile_network_sim_policy#mobile_network_id DataAzurermMobileNetworkSimPolicy#mobile_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/data-sources/mobile_network_sim_policy#name DataAzurermMobileNetworkSimPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/data-sources/mobile_network_sim_policy#id DataAzurermMobileNetworkSimPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeouts">DataAzurermMobileNetworkSimPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MobileNetworkId`<sup>Required</sup> <a name="MobileNetworkId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.mobileNetworkId"></a>

```go
MobileNetworkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/data-sources/mobile_network_sim_policy#mobile_network_id DataAzurermMobileNetworkSimPolicy#mobile_network_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/data-sources/mobile_network_sim_policy#name DataAzurermMobileNetworkSimPolicy#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/data-sources/mobile_network_sim_policy#id DataAzurermMobileNetworkSimPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyConfig.property.timeouts"></a>

```go
Timeouts DataAzurermMobileNetworkSimPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeouts">DataAzurermMobileNetworkSimPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/data-sources/mobile_network_sim_policy#timeouts DataAzurermMobileNetworkSimPolicy#timeouts}

---

### DataAzurermMobileNetworkSimPolicySlice <a name="DataAzurermMobileNetworkSimPolicySlice" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySlice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySlice.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmobilenetworksimpolicy"

&dataazurermmobilenetworksimpolicy.DataAzurermMobileNetworkSimPolicySlice {

}
```


### DataAzurermMobileNetworkSimPolicySliceDataNetwork <a name="DataAzurermMobileNetworkSimPolicySliceDataNetwork" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetwork.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmobilenetworksimpolicy"

&dataazurermmobilenetworksimpolicy.DataAzurermMobileNetworkSimPolicySliceDataNetwork {

}
```


### DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate <a name="DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmobilenetworksimpolicy"

&dataazurermmobilenetworksimpolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate {

}
```


### DataAzurermMobileNetworkSimPolicyTimeouts <a name="DataAzurermMobileNetworkSimPolicyTimeouts" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmobilenetworksimpolicy"

&dataazurermmobilenetworksimpolicy.DataAzurermMobileNetworkSimPolicyTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/data-sources/mobile_network_sim_policy#read DataAzurermMobileNetworkSimPolicy#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.97.1/docs/data-sources/mobile_network_sim_policy#read DataAzurermMobileNetworkSimPolicy#read}.

---

### DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate <a name="DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmobilenetworksimpolicy"

&dataazurermmobilenetworksimpolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAzurermMobileNetworkSimPolicySliceDataNetworkList <a name="DataAzurermMobileNetworkSimPolicySliceDataNetworkList" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmobilenetworksimpolicy"

dataazurermmobilenetworksimpolicy.NewDataAzurermMobileNetworkSimPolicySliceDataNetworkList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermMobileNetworkSimPolicySliceDataNetworkList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.get"></a>

```go
func Get(index *f64) DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference <a name="DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmobilenetworksimpolicy"

dataazurermmobilenetworksimpolicy.NewDataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.additionalAllowedSessionTypes">AdditionalAllowedSessionTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.allocationAndRetentionPriorityLevel">AllocationAndRetentionPriorityLevel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.allowedServicesIds">AllowedServicesIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.dataNetworkId">DataNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.defaultSessionType">DefaultSessionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.maxBufferedPackets">MaxBufferedPackets</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.preemptionCapability">PreemptionCapability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.preemptionVulnerability">PreemptionVulnerability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.qosIndicator">QosIndicator</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.sessionAggregateMaximumBitRate">SessionAggregateMaximumBitRate</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList">DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetwork">DataAzurermMobileNetworkSimPolicySliceDataNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalAllowedSessionTypes`<sup>Required</sup> <a name="AdditionalAllowedSessionTypes" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.additionalAllowedSessionTypes"></a>

```go
func AdditionalAllowedSessionTypes() *[]*string
```

- *Type:* *[]*string

---

##### `AllocationAndRetentionPriorityLevel`<sup>Required</sup> <a name="AllocationAndRetentionPriorityLevel" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.allocationAndRetentionPriorityLevel"></a>

```go
func AllocationAndRetentionPriorityLevel() *f64
```

- *Type:* *f64

---

##### `AllowedServicesIds`<sup>Required</sup> <a name="AllowedServicesIds" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.allowedServicesIds"></a>

```go
func AllowedServicesIds() *[]*string
```

- *Type:* *[]*string

---

##### `DataNetworkId`<sup>Required</sup> <a name="DataNetworkId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.dataNetworkId"></a>

```go
func DataNetworkId() *string
```

- *Type:* *string

---

##### `DefaultSessionType`<sup>Required</sup> <a name="DefaultSessionType" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.defaultSessionType"></a>

```go
func DefaultSessionType() *string
```

- *Type:* *string

---

##### `MaxBufferedPackets`<sup>Required</sup> <a name="MaxBufferedPackets" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.maxBufferedPackets"></a>

```go
func MaxBufferedPackets() *f64
```

- *Type:* *f64

---

##### `PreemptionCapability`<sup>Required</sup> <a name="PreemptionCapability" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.preemptionCapability"></a>

```go
func PreemptionCapability() *string
```

- *Type:* *string

---

##### `PreemptionVulnerability`<sup>Required</sup> <a name="PreemptionVulnerability" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.preemptionVulnerability"></a>

```go
func PreemptionVulnerability() *string
```

- *Type:* *string

---

##### `QosIndicator`<sup>Required</sup> <a name="QosIndicator" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.qosIndicator"></a>

```go
func QosIndicator() *f64
```

- *Type:* *f64

---

##### `SessionAggregateMaximumBitRate`<sup>Required</sup> <a name="SessionAggregateMaximumBitRate" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.sessionAggregateMaximumBitRate"></a>

```go
func SessionAggregateMaximumBitRate() DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList">DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermMobileNetworkSimPolicySliceDataNetwork
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetwork">DataAzurermMobileNetworkSimPolicySliceDataNetwork</a>

---


### DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList <a name="DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmobilenetworksimpolicy"

dataazurermmobilenetworksimpolicy.NewDataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.get"></a>

```go
func Get(index *f64) DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference <a name="DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmobilenetworksimpolicy"

dataazurermmobilenetworksimpolicy.NewDataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.downlink">Downlink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.uplink">Uplink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate">DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Downlink`<sup>Required</sup> <a name="Downlink" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.downlink"></a>

```go
func Downlink() *string
```

- *Type:* *string

---

##### `Uplink`<sup>Required</sup> <a name="Uplink" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.uplink"></a>

```go
func Uplink() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate">DataAzurermMobileNetworkSimPolicySliceDataNetworkSessionAggregateMaximumBitRate</a>

---


### DataAzurermMobileNetworkSimPolicySliceList <a name="DataAzurermMobileNetworkSimPolicySliceList" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmobilenetworksimpolicy"

dataazurermmobilenetworksimpolicy.NewDataAzurermMobileNetworkSimPolicySliceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermMobileNetworkSimPolicySliceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.get"></a>

```go
func Get(index *f64) DataAzurermMobileNetworkSimPolicySliceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermMobileNetworkSimPolicySliceOutputReference <a name="DataAzurermMobileNetworkSimPolicySliceOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmobilenetworksimpolicy"

dataazurermmobilenetworksimpolicy.NewDataAzurermMobileNetworkSimPolicySliceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermMobileNetworkSimPolicySliceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.property.dataNetwork">DataNetwork</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList">DataAzurermMobileNetworkSimPolicySliceDataNetworkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.property.defaultDataNetworkId">DefaultDataNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.property.sliceId">SliceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySlice">DataAzurermMobileNetworkSimPolicySlice</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataNetwork`<sup>Required</sup> <a name="DataNetwork" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.property.dataNetwork"></a>

```go
func DataNetwork() DataAzurermMobileNetworkSimPolicySliceDataNetworkList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceDataNetworkList">DataAzurermMobileNetworkSimPolicySliceDataNetworkList</a>

---

##### `DefaultDataNetworkId`<sup>Required</sup> <a name="DefaultDataNetworkId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.property.defaultDataNetworkId"></a>

```go
func DefaultDataNetworkId() *string
```

- *Type:* *string

---

##### `SliceId`<sup>Required</sup> <a name="SliceId" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.property.sliceId"></a>

```go
func SliceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySliceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermMobileNetworkSimPolicySlice
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicySlice">DataAzurermMobileNetworkSimPolicySlice</a>

---


### DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference <a name="DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmobilenetworksimpolicy"

dataazurermmobilenetworksimpolicy.NewDataAzurermMobileNetworkSimPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList <a name="DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmobilenetworksimpolicy"

dataazurermmobilenetworksimpolicy.NewDataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.get"></a>

```go
func Get(index *f64) DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference <a name="DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermmobilenetworksimpolicy"

dataazurermmobilenetworksimpolicy.NewDataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.downlink">Downlink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.uplink">Uplink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate">DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Downlink`<sup>Required</sup> <a name="Downlink" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.downlink"></a>

```go
func Downlink() *string
```

- *Type:* *string

---

##### `Uplink`<sup>Required</sup> <a name="Uplink" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.uplink"></a>

```go
func Uplink() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermMobileNetworkSimPolicy.DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate">DataAzurermMobileNetworkSimPolicyUserEquipmentAggregateMaximumBitRate</a>

---



