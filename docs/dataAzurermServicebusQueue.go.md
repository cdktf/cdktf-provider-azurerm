# `dataAzurermServicebusQueue` Submodule <a name="`dataAzurermServicebusQueue` Submodule" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermServicebusQueue <a name="DataAzurermServicebusQueue" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/data-sources/servicebus_queue azurerm_servicebus_queue}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermservicebusqueue"

dataazurermservicebusqueue.NewDataAzurermServicebusQueue(scope Construct, id *string, config DataAzurermServicebusQueueConfig) DataAzurermServicebusQueue
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueConfig">DataAzurermServicebusQueueConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueConfig">DataAzurermServicebusQueueConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.resetNamespaceId">ResetNamespaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.resetNamespaceName">ResetNamespaceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.resetResourceGroupName">ResetResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermServicebusQueueTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeouts">DataAzurermServicebusQueueTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.resetId"></a>

```go
func ResetId()
```

##### `ResetNamespaceId` <a name="ResetNamespaceId" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.resetNamespaceId"></a>

```go
func ResetNamespaceId()
```

##### `ResetNamespaceName` <a name="ResetNamespaceName" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.resetNamespaceName"></a>

```go
func ResetNamespaceName()
```

##### `ResetResourceGroupName` <a name="ResetResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.resetResourceGroupName"></a>

```go
func ResetResourceGroupName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermServicebusQueue resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermservicebusqueue"

dataazurermservicebusqueue.DataAzurermServicebusQueue_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermservicebusqueue"

dataazurermservicebusqueue.DataAzurermServicebusQueue_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermservicebusqueue"

dataazurermservicebusqueue.DataAzurermServicebusQueue_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermservicebusqueue"

dataazurermservicebusqueue.DataAzurermServicebusQueue_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataAzurermServicebusQueue resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAzurermServicebusQueue to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAzurermServicebusQueue that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/data-sources/servicebus_queue#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermServicebusQueue to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.autoDeleteOnIdle">AutoDeleteOnIdle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.deadLetteringOnMessageExpiration">DeadLetteringOnMessageExpiration</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.defaultMessageTtl">DefaultMessageTtl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.duplicateDetectionHistoryTimeWindow">DuplicateDetectionHistoryTimeWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.enableBatchedOperations">EnableBatchedOperations</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.enableExpress">EnableExpress</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.enablePartitioning">EnablePartitioning</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.forwardDeadLetteredMessagesTo">ForwardDeadLetteredMessagesTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.forwardTo">ForwardTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.lockDuration">LockDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.maxDeliveryCount">MaxDeliveryCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.maxSizeInMegabytes">MaxSizeInMegabytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.requiresDuplicateDetection">RequiresDuplicateDetection</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.requiresSession">RequiresSession</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference">DataAzurermServicebusQueueTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.namespaceIdInput">NamespaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.namespaceNameInput">NamespaceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.resourceGroupNameInput">ResourceGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.namespaceId">NamespaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.namespaceName">NamespaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AutoDeleteOnIdle`<sup>Required</sup> <a name="AutoDeleteOnIdle" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.autoDeleteOnIdle"></a>

```go
func AutoDeleteOnIdle() *string
```

- *Type:* *string

---

##### `DeadLetteringOnMessageExpiration`<sup>Required</sup> <a name="DeadLetteringOnMessageExpiration" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.deadLetteringOnMessageExpiration"></a>

```go
func DeadLetteringOnMessageExpiration() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DefaultMessageTtl`<sup>Required</sup> <a name="DefaultMessageTtl" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.defaultMessageTtl"></a>

```go
func DefaultMessageTtl() *string
```

- *Type:* *string

---

##### `DuplicateDetectionHistoryTimeWindow`<sup>Required</sup> <a name="DuplicateDetectionHistoryTimeWindow" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.duplicateDetectionHistoryTimeWindow"></a>

```go
func DuplicateDetectionHistoryTimeWindow() *string
```

- *Type:* *string

---

##### `EnableBatchedOperations`<sup>Required</sup> <a name="EnableBatchedOperations" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.enableBatchedOperations"></a>

```go
func EnableBatchedOperations() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnableExpress`<sup>Required</sup> <a name="EnableExpress" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.enableExpress"></a>

```go
func EnableExpress() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnablePartitioning`<sup>Required</sup> <a name="EnablePartitioning" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.enablePartitioning"></a>

```go
func EnablePartitioning() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ForwardDeadLetteredMessagesTo`<sup>Required</sup> <a name="ForwardDeadLetteredMessagesTo" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.forwardDeadLetteredMessagesTo"></a>

```go
func ForwardDeadLetteredMessagesTo() *string
```

- *Type:* *string

---

##### `ForwardTo`<sup>Required</sup> <a name="ForwardTo" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.forwardTo"></a>

```go
func ForwardTo() *string
```

- *Type:* *string

---

##### `LockDuration`<sup>Required</sup> <a name="LockDuration" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.lockDuration"></a>

```go
func LockDuration() *string
```

- *Type:* *string

---

##### `MaxDeliveryCount`<sup>Required</sup> <a name="MaxDeliveryCount" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.maxDeliveryCount"></a>

```go
func MaxDeliveryCount() *f64
```

- *Type:* *f64

---

##### `MaxSizeInMegabytes`<sup>Required</sup> <a name="MaxSizeInMegabytes" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.maxSizeInMegabytes"></a>

```go
func MaxSizeInMegabytes() *f64
```

- *Type:* *f64

---

##### `RequiresDuplicateDetection`<sup>Required</sup> <a name="RequiresDuplicateDetection" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.requiresDuplicateDetection"></a>

```go
func RequiresDuplicateDetection() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `RequiresSession`<sup>Required</sup> <a name="RequiresSession" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.requiresSession"></a>

```go
func RequiresSession() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.timeouts"></a>

```go
func Timeouts() DataAzurermServicebusQueueTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference">DataAzurermServicebusQueueTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceIdInput`<sup>Optional</sup> <a name="NamespaceIdInput" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.namespaceIdInput"></a>

```go
func NamespaceIdInput() *string
```

- *Type:* *string

---

##### `NamespaceNameInput`<sup>Optional</sup> <a name="NamespaceNameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.namespaceNameInput"></a>

```go
func NamespaceNameInput() *string
```

- *Type:* *string

---

##### `ResourceGroupNameInput`<sup>Optional</sup> <a name="ResourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.resourceGroupNameInput"></a>

```go
func ResourceGroupNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.namespaceId"></a>

```go
func NamespaceId() *string
```

- *Type:* *string

---

##### `NamespaceName`<sup>Required</sup> <a name="NamespaceName" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.namespaceName"></a>

```go
func NamespaceName() *string
```

- *Type:* *string

---

##### `ResourceGroupName`<sup>Required</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.resourceGroupName"></a>

```go
func ResourceGroupName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueue.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermServicebusQueueConfig <a name="DataAzurermServicebusQueueConfig" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermservicebusqueue"

&dataazurermservicebusqueue.DataAzurermServicebusQueueConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	NamespaceId: *string,
	NamespaceName: *string,
	ResourceGroupName: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/data-sources/servicebus_queue#name DataAzurermServicebusQueue#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/data-sources/servicebus_queue#id DataAzurermServicebusQueue#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueConfig.property.namespaceId">NamespaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/data-sources/servicebus_queue#namespace_id DataAzurermServicebusQueue#namespace_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueConfig.property.namespaceName">NamespaceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/data-sources/servicebus_queue#namespace_name DataAzurermServicebusQueue#namespace_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueConfig.property.resourceGroupName">ResourceGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/data-sources/servicebus_queue#resource_group_name DataAzurermServicebusQueue#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeouts">DataAzurermServicebusQueueTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/data-sources/servicebus_queue#name DataAzurermServicebusQueue#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/data-sources/servicebus_queue#id DataAzurermServicebusQueue#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NamespaceId`<sup>Optional</sup> <a name="NamespaceId" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueConfig.property.namespaceId"></a>

```go
NamespaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/data-sources/servicebus_queue#namespace_id DataAzurermServicebusQueue#namespace_id}.

---

##### `NamespaceName`<sup>Optional</sup> <a name="NamespaceName" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueConfig.property.namespaceName"></a>

```go
NamespaceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/data-sources/servicebus_queue#namespace_name DataAzurermServicebusQueue#namespace_name}.

---

##### `ResourceGroupName`<sup>Optional</sup> <a name="ResourceGroupName" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueConfig.property.resourceGroupName"></a>

```go
ResourceGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/data-sources/servicebus_queue#resource_group_name DataAzurermServicebusQueue#resource_group_name}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueConfig.property.timeouts"></a>

```go
Timeouts DataAzurermServicebusQueueTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeouts">DataAzurermServicebusQueueTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/data-sources/servicebus_queue#timeouts DataAzurermServicebusQueue#timeouts}

---

### DataAzurermServicebusQueueTimeouts <a name="DataAzurermServicebusQueueTimeouts" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermservicebusqueue"

&dataazurermservicebusqueue.DataAzurermServicebusQueueTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/data-sources/servicebus_queue#read DataAzurermServicebusQueue#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.115.0/docs/data-sources/servicebus_queue#read DataAzurermServicebusQueue#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermServicebusQueueTimeoutsOutputReference <a name="DataAzurermServicebusQueueTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/dataazurermservicebusqueue"

dataazurermservicebusqueue.NewDataAzurermServicebusQueueTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermServicebusQueueTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermServicebusQueue.DataAzurermServicebusQueueTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



