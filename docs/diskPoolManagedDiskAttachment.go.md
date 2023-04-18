# `azurerm_disk_pool_managed_disk_attachment`

Refer to the Terraform Registory for docs: [`azurerm_disk_pool_managed_disk_attachment`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/disk_pool_managed_disk_attachment).

# `diskPoolManagedDiskAttachment` Submodule <a name="`diskPoolManagedDiskAttachment` Submodule" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiskPoolManagedDiskAttachment <a name="DiskPoolManagedDiskAttachment" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/disk_pool_managed_disk_attachment azurerm_disk_pool_managed_disk_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/diskpoolmanageddiskattachment"

diskpoolmanageddiskattachment.NewDiskPoolManagedDiskAttachment(scope Construct, id *string, config DiskPoolManagedDiskAttachmentConfig) DiskPoolManagedDiskAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentConfig">DiskPoolManagedDiskAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentConfig">DiskPoolManagedDiskAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.putTimeouts"></a>

```go
func PutTimeouts(value DiskPoolManagedDiskAttachmentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeouts">DiskPoolManagedDiskAttachmentTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/diskpoolmanageddiskattachment"

diskpoolmanageddiskattachment.DiskPoolManagedDiskAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/diskpoolmanageddiskattachment"

diskpoolmanageddiskattachment.DiskPoolManagedDiskAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/diskpoolmanageddiskattachment"

diskpoolmanageddiskattachment.DiskPoolManagedDiskAttachment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference">DiskPoolManagedDiskAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.diskPoolIdInput">DiskPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.managedDiskIdInput">ManagedDiskIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.diskPoolId">DiskPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.managedDiskId">ManagedDiskId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.timeouts"></a>

```go
func Timeouts() DiskPoolManagedDiskAttachmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference">DiskPoolManagedDiskAttachmentTimeoutsOutputReference</a>

---

##### `DiskPoolIdInput`<sup>Optional</sup> <a name="DiskPoolIdInput" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.diskPoolIdInput"></a>

```go
func DiskPoolIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagedDiskIdInput`<sup>Optional</sup> <a name="ManagedDiskIdInput" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.managedDiskIdInput"></a>

```go
func ManagedDiskIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DiskPoolId`<sup>Required</sup> <a name="DiskPoolId" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.diskPoolId"></a>

```go
func DiskPoolId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagedDiskId`<sup>Required</sup> <a name="ManagedDiskId" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.managedDiskId"></a>

```go
func ManagedDiskId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DiskPoolManagedDiskAttachmentConfig <a name="DiskPoolManagedDiskAttachmentConfig" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/diskpoolmanageddiskattachment"

&diskpoolmanageddiskattachment.DiskPoolManagedDiskAttachmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DiskPoolId: *string,
	ManagedDiskId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentConfig.property.diskPoolId">DiskPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/disk_pool_managed_disk_attachment#disk_pool_id DiskPoolManagedDiskAttachment#disk_pool_id}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentConfig.property.managedDiskId">ManagedDiskId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/disk_pool_managed_disk_attachment#managed_disk_id DiskPoolManagedDiskAttachment#managed_disk_id}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/disk_pool_managed_disk_attachment#id DiskPoolManagedDiskAttachment#id}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeouts">DiskPoolManagedDiskAttachmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DiskPoolId`<sup>Required</sup> <a name="DiskPoolId" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentConfig.property.diskPoolId"></a>

```go
DiskPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/disk_pool_managed_disk_attachment#disk_pool_id DiskPoolManagedDiskAttachment#disk_pool_id}.

---

##### `ManagedDiskId`<sup>Required</sup> <a name="ManagedDiskId" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentConfig.property.managedDiskId"></a>

```go
ManagedDiskId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/disk_pool_managed_disk_attachment#managed_disk_id DiskPoolManagedDiskAttachment#managed_disk_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/disk_pool_managed_disk_attachment#id DiskPoolManagedDiskAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentConfig.property.timeouts"></a>

```go
Timeouts DiskPoolManagedDiskAttachmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeouts">DiskPoolManagedDiskAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/disk_pool_managed_disk_attachment#timeouts DiskPoolManagedDiskAttachment#timeouts}

---

### DiskPoolManagedDiskAttachmentTimeouts <a name="DiskPoolManagedDiskAttachmentTimeouts" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/diskpoolmanageddiskattachment"

&diskpoolmanageddiskattachment.DiskPoolManagedDiskAttachmentTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/disk_pool_managed_disk_attachment#create DiskPoolManagedDiskAttachment#create}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/disk_pool_managed_disk_attachment#delete DiskPoolManagedDiskAttachment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/disk_pool_managed_disk_attachment#read DiskPoolManagedDiskAttachment#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/disk_pool_managed_disk_attachment#create DiskPoolManagedDiskAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/disk_pool_managed_disk_attachment#delete DiskPoolManagedDiskAttachment#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/disk_pool_managed_disk_attachment#read DiskPoolManagedDiskAttachment#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiskPoolManagedDiskAttachmentTimeoutsOutputReference <a name="DiskPoolManagedDiskAttachmentTimeoutsOutputReference" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/diskpoolmanageddiskattachment"

diskpoolmanageddiskattachment.NewDiskPoolManagedDiskAttachmentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DiskPoolManagedDiskAttachmentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.diskPoolManagedDiskAttachment.DiskPoolManagedDiskAttachmentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



