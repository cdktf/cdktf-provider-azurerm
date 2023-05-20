# `data_azurerm_web_pubsub_private_link_resource`

Refer to the Terraform Registory for docs: [`data_azurerm_web_pubsub_private_link_resource`](https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/data-sources/web_pubsub_private_link_resource).

# `dataAzurermWebPubsubPrivateLinkResource` Submodule <a name="`dataAzurermWebPubsubPrivateLinkResource` Submodule" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermWebPubsubPrivateLinkResource <a name="DataAzurermWebPubsubPrivateLinkResource" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/data-sources/web_pubsub_private_link_resource azurerm_web_pubsub_private_link_resource}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermwebpubsubprivatelinkresource"

dataazurermwebpubsubprivatelinkresource.NewDataAzurermWebPubsubPrivateLinkResource(scope Construct, id *string, config DataAzurermWebPubsubPrivateLinkResourceConfig) DataAzurermWebPubsubPrivateLinkResource
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig">DataAzurermWebPubsubPrivateLinkResourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig">DataAzurermWebPubsubPrivateLinkResourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.putTimeouts"></a>

```go
func PutTimeouts(value DataAzurermWebPubsubPrivateLinkResourceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeouts">DataAzurermWebPubsubPrivateLinkResourceTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermwebpubsubprivatelinkresource"

dataazurermwebpubsubprivatelinkresource.DataAzurermWebPubsubPrivateLinkResource_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermwebpubsubprivatelinkresource"

dataazurermwebpubsubprivatelinkresource.DataAzurermWebPubsubPrivateLinkResource_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermwebpubsubprivatelinkresource"

dataazurermwebpubsubprivatelinkresource.DataAzurermWebPubsubPrivateLinkResource_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.sharedPrivateLinkResourceTypes">SharedPrivateLinkResourceTypes</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList">DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference">DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.webPubsubIdInput">WebPubsubIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.webPubsubId">WebPubsubId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `SharedPrivateLinkResourceTypes`<sup>Required</sup> <a name="SharedPrivateLinkResourceTypes" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.sharedPrivateLinkResourceTypes"></a>

```go
func SharedPrivateLinkResourceTypes() DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList">DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.timeouts"></a>

```go
func Timeouts() DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference">DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `WebPubsubIdInput`<sup>Optional</sup> <a name="WebPubsubIdInput" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.webPubsubIdInput"></a>

```go
func WebPubsubIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `WebPubsubId`<sup>Required</sup> <a name="WebPubsubId" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.webPubsubId"></a>

```go
func WebPubsubId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResource.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermWebPubsubPrivateLinkResourceConfig <a name="DataAzurermWebPubsubPrivateLinkResourceConfig" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermwebpubsubprivatelinkresource"

&dataazurermwebpubsubprivatelinkresource.DataAzurermWebPubsubPrivateLinkResourceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	WebPubsubId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.webPubsubId">WebPubsubId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/data-sources/web_pubsub_private_link_resource#web_pubsub_id DataAzurermWebPubsubPrivateLinkResource#web_pubsub_id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/data-sources/web_pubsub_private_link_resource#id DataAzurermWebPubsubPrivateLinkResource#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeouts">DataAzurermWebPubsubPrivateLinkResourceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `WebPubsubId`<sup>Required</sup> <a name="WebPubsubId" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.webPubsubId"></a>

```go
WebPubsubId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/data-sources/web_pubsub_private_link_resource#web_pubsub_id DataAzurermWebPubsubPrivateLinkResource#web_pubsub_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/data-sources/web_pubsub_private_link_resource#id DataAzurermWebPubsubPrivateLinkResource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceConfig.property.timeouts"></a>

```go
Timeouts DataAzurermWebPubsubPrivateLinkResourceTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeouts">DataAzurermWebPubsubPrivateLinkResourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/data-sources/web_pubsub_private_link_resource#timeouts DataAzurermWebPubsubPrivateLinkResource#timeouts}

---

### DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypes <a name="DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypes" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermwebpubsubprivatelinkresource"

&dataazurermwebpubsubprivatelinkresource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypes {

}
```


### DataAzurermWebPubsubPrivateLinkResourceTimeouts <a name="DataAzurermWebPubsubPrivateLinkResourceTimeouts" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermwebpubsubprivatelinkresource"

&dataazurermwebpubsubprivatelinkresource.DataAzurermWebPubsubPrivateLinkResourceTimeouts {
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/data-sources/web_pubsub_private_link_resource#read DataAzurermWebPubsubPrivateLinkResource#read}. |

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.57.0/docs/data-sources/web_pubsub_private_link_resource#read DataAzurermWebPubsubPrivateLinkResource#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList <a name="DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermwebpubsubprivatelinkresource"

dataazurermwebpubsubprivatelinkresource.NewDataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.get"></a>

```go
func Get(index *f64) DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference <a name="DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermwebpubsubprivatelinkresource"

dataazurermwebpubsubprivatelinkresource.NewDataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.property.subresourceName">SubresourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypes">DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `SubresourceName`<sup>Required</sup> <a name="SubresourceName" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.property.subresourceName"></a>

```go
func SubresourceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypes
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypes">DataAzurermWebPubsubPrivateLinkResourceSharedPrivateLinkResourceTypes</a>

---


### DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference <a name="DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v7/dataazurermwebpubsubprivatelinkresource"

dataazurermwebpubsubprivatelinkresource.NewDataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.dataAzurermWebPubsubPrivateLinkResource.DataAzurermWebPubsubPrivateLinkResourceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



