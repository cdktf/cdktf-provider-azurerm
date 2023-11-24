# `azurerm_kubernetes_cluster_trusted_access_role_binding`

Refer to the Terraform Registory for docs: [`azurerm_kubernetes_cluster_trusted_access_role_binding`](https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/kubernetes_cluster_trusted_access_role_binding).

# `kubernetesClusterTrustedAccessRoleBinding` Submodule <a name="`kubernetesClusterTrustedAccessRoleBinding` Submodule" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KubernetesClusterTrustedAccessRoleBinding <a name="KubernetesClusterTrustedAccessRoleBinding" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/kubernetes_cluster_trusted_access_role_binding azurerm_kubernetes_cluster_trusted_access_role_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/kubernetesclustertrustedaccessrolebinding"

kubernetesclustertrustedaccessrolebinding.NewKubernetesClusterTrustedAccessRoleBinding(scope Construct, id *string, config KubernetesClusterTrustedAccessRoleBindingConfig) KubernetesClusterTrustedAccessRoleBinding
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig">KubernetesClusterTrustedAccessRoleBindingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig">KubernetesClusterTrustedAccessRoleBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.putTimeouts"></a>

```go
func PutTimeouts(value KubernetesClusterTrustedAccessRoleBindingTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeouts">KubernetesClusterTrustedAccessRoleBindingTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a KubernetesClusterTrustedAccessRoleBinding resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/kubernetesclustertrustedaccessrolebinding"

kubernetesclustertrustedaccessrolebinding.KubernetesClusterTrustedAccessRoleBinding_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/kubernetesclustertrustedaccessrolebinding"

kubernetesclustertrustedaccessrolebinding.KubernetesClusterTrustedAccessRoleBinding_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/kubernetesclustertrustedaccessrolebinding"

kubernetesclustertrustedaccessrolebinding.KubernetesClusterTrustedAccessRoleBinding_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/kubernetesclustertrustedaccessrolebinding"

kubernetesclustertrustedaccessrolebinding.KubernetesClusterTrustedAccessRoleBinding_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a KubernetesClusterTrustedAccessRoleBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the KubernetesClusterTrustedAccessRoleBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing KubernetesClusterTrustedAccessRoleBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the KubernetesClusterTrustedAccessRoleBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference">KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.kubernetesClusterIdInput">KubernetesClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.rolesInput">RolesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.sourceResourceIdInput">SourceResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.kubernetesClusterId">KubernetesClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.roles">Roles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.sourceResourceId">SourceResourceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.timeouts"></a>

```go
func Timeouts() KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference">KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KubernetesClusterIdInput`<sup>Optional</sup> <a name="KubernetesClusterIdInput" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.kubernetesClusterIdInput"></a>

```go
func KubernetesClusterIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.rolesInput"></a>

```go
func RolesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceResourceIdInput`<sup>Optional</sup> <a name="SourceResourceIdInput" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.sourceResourceIdInput"></a>

```go
func SourceResourceIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KubernetesClusterId`<sup>Required</sup> <a name="KubernetesClusterId" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.kubernetesClusterId"></a>

```go
func KubernetesClusterId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.roles"></a>

```go
func Roles() *[]*string
```

- *Type:* *[]*string

---

##### `SourceResourceId`<sup>Required</sup> <a name="SourceResourceId" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.sourceResourceId"></a>

```go
func SourceResourceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBinding.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### KubernetesClusterTrustedAccessRoleBindingConfig <a name="KubernetesClusterTrustedAccessRoleBindingConfig" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/kubernetesclustertrustedaccessrolebinding"

&kubernetesclustertrustedaccessrolebinding.KubernetesClusterTrustedAccessRoleBindingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	KubernetesClusterId: *string,
	Name: *string,
	Roles: *[]*string,
	SourceResourceId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.kubernetesClusterId">KubernetesClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#kubernetes_cluster_id KubernetesClusterTrustedAccessRoleBinding#kubernetes_cluster_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#name KubernetesClusterTrustedAccessRoleBinding#name}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.roles">Roles</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#roles KubernetesClusterTrustedAccessRoleBinding#roles}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.sourceResourceId">SourceResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#source_resource_id KubernetesClusterTrustedAccessRoleBinding#source_resource_id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#id KubernetesClusterTrustedAccessRoleBinding#id}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeouts">KubernetesClusterTrustedAccessRoleBindingTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KubernetesClusterId`<sup>Required</sup> <a name="KubernetesClusterId" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.kubernetesClusterId"></a>

```go
KubernetesClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#kubernetes_cluster_id KubernetesClusterTrustedAccessRoleBinding#kubernetes_cluster_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#name KubernetesClusterTrustedAccessRoleBinding#name}.

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.roles"></a>

```go
Roles *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#roles KubernetesClusterTrustedAccessRoleBinding#roles}.

---

##### `SourceResourceId`<sup>Required</sup> <a name="SourceResourceId" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.sourceResourceId"></a>

```go
SourceResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#source_resource_id KubernetesClusterTrustedAccessRoleBinding#source_resource_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#id KubernetesClusterTrustedAccessRoleBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingConfig.property.timeouts"></a>

```go
Timeouts KubernetesClusterTrustedAccessRoleBindingTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeouts">KubernetesClusterTrustedAccessRoleBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#timeouts KubernetesClusterTrustedAccessRoleBinding#timeouts}

---

### KubernetesClusterTrustedAccessRoleBindingTimeouts <a name="KubernetesClusterTrustedAccessRoleBindingTimeouts" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/kubernetesclustertrustedaccessrolebinding"

&kubernetesclustertrustedaccessrolebinding.KubernetesClusterTrustedAccessRoleBindingTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#create KubernetesClusterTrustedAccessRoleBinding#create}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#delete KubernetesClusterTrustedAccessRoleBinding#delete}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#read KubernetesClusterTrustedAccessRoleBinding#read}. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#update KubernetesClusterTrustedAccessRoleBinding#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#create KubernetesClusterTrustedAccessRoleBinding#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#delete KubernetesClusterTrustedAccessRoleBinding#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#read KubernetesClusterTrustedAccessRoleBinding#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/kubernetes_cluster_trusted_access_role_binding#update KubernetesClusterTrustedAccessRoleBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference <a name="KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v11/kubernetesclustertrustedaccessrolebinding"

kubernetesclustertrustedaccessrolebinding.NewKubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.kubernetesClusterTrustedAccessRoleBinding.KubernetesClusterTrustedAccessRoleBindingTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



