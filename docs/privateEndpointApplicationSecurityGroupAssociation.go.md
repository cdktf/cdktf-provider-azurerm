# `azurerm_private_endpoint_application_security_group_association`

Refer to the Terraform Registory for docs: [`azurerm_private_endpoint_application_security_group_association`](https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/private_endpoint_application_security_group_association).

# `privateEndpointApplicationSecurityGroupAssociation` Submodule <a name="`privateEndpointApplicationSecurityGroupAssociation` Submodule" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateEndpointApplicationSecurityGroupAssociation <a name="PrivateEndpointApplicationSecurityGroupAssociation" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/private_endpoint_application_security_group_association azurerm_private_endpoint_application_security_group_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/privateendpointapplicationsecuritygroupassociation"

privateendpointapplicationsecuritygroupassociation.NewPrivateEndpointApplicationSecurityGroupAssociation(scope Construct, id *string, config PrivateEndpointApplicationSecurityGroupAssociationConfig) PrivateEndpointApplicationSecurityGroupAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig">PrivateEndpointApplicationSecurityGroupAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig">PrivateEndpointApplicationSecurityGroupAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.putTimeouts"></a>

```go
func PutTimeouts(value PrivateEndpointApplicationSecurityGroupAssociationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts">PrivateEndpointApplicationSecurityGroupAssociationTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/privateendpointapplicationsecuritygroupassociation"

privateendpointapplicationsecuritygroupassociation.PrivateEndpointApplicationSecurityGroupAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/privateendpointapplicationsecuritygroupassociation"

privateendpointapplicationsecuritygroupassociation.PrivateEndpointApplicationSecurityGroupAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/privateendpointapplicationsecuritygroupassociation"

privateendpointapplicationsecuritygroupassociation.PrivateEndpointApplicationSecurityGroupAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference">PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.applicationSecurityGroupIdInput">ApplicationSecurityGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.privateEndpointIdInput">PrivateEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.applicationSecurityGroupId">ApplicationSecurityGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.privateEndpointId">PrivateEndpointId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.timeouts"></a>

```go
func Timeouts() PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference">PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference</a>

---

##### `ApplicationSecurityGroupIdInput`<sup>Optional</sup> <a name="ApplicationSecurityGroupIdInput" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.applicationSecurityGroupIdInput"></a>

```go
func ApplicationSecurityGroupIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PrivateEndpointIdInput`<sup>Optional</sup> <a name="PrivateEndpointIdInput" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.privateEndpointIdInput"></a>

```go
func PrivateEndpointIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationSecurityGroupId`<sup>Required</sup> <a name="ApplicationSecurityGroupId" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.applicationSecurityGroupId"></a>

```go
func ApplicationSecurityGroupId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PrivateEndpointId`<sup>Required</sup> <a name="PrivateEndpointId" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.privateEndpointId"></a>

```go
func PrivateEndpointId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateEndpointApplicationSecurityGroupAssociationConfig <a name="PrivateEndpointApplicationSecurityGroupAssociationConfig" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/privateendpointapplicationsecuritygroupassociation"

&privateendpointapplicationsecuritygroupassociation.PrivateEndpointApplicationSecurityGroupAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationSecurityGroupId: *string,
	PrivateEndpointId: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.applicationSecurityGroupId">ApplicationSecurityGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/private_endpoint_application_security_group_association#application_security_group_id PrivateEndpointApplicationSecurityGroupAssociation#application_security_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.privateEndpointId">PrivateEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/private_endpoint_application_security_group_association#private_endpoint_id PrivateEndpointApplicationSecurityGroupAssociation#private_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/private_endpoint_application_security_group_association#id PrivateEndpointApplicationSecurityGroupAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts">PrivateEndpointApplicationSecurityGroupAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationSecurityGroupId`<sup>Required</sup> <a name="ApplicationSecurityGroupId" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.applicationSecurityGroupId"></a>

```go
ApplicationSecurityGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/private_endpoint_application_security_group_association#application_security_group_id PrivateEndpointApplicationSecurityGroupAssociation#application_security_group_id}.

---

##### `PrivateEndpointId`<sup>Required</sup> <a name="PrivateEndpointId" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.privateEndpointId"></a>

```go
PrivateEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/private_endpoint_application_security_group_association#private_endpoint_id PrivateEndpointApplicationSecurityGroupAssociation#private_endpoint_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/private_endpoint_application_security_group_association#id PrivateEndpointApplicationSecurityGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.timeouts"></a>

```go
Timeouts PrivateEndpointApplicationSecurityGroupAssociationTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts">PrivateEndpointApplicationSecurityGroupAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/private_endpoint_application_security_group_association#timeouts PrivateEndpointApplicationSecurityGroupAssociation#timeouts}

---

### PrivateEndpointApplicationSecurityGroupAssociationTimeouts <a name="PrivateEndpointApplicationSecurityGroupAssociationTimeouts" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/privateendpointapplicationsecuritygroupassociation"

&privateendpointapplicationsecuritygroupassociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/private_endpoint_application_security_group_association#create PrivateEndpointApplicationSecurityGroupAssociation#create}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/private_endpoint_application_security_group_association#delete PrivateEndpointApplicationSecurityGroupAssociation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/private_endpoint_application_security_group_association#read PrivateEndpointApplicationSecurityGroupAssociation#read}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/private_endpoint_application_security_group_association#create PrivateEndpointApplicationSecurityGroupAssociation#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/private_endpoint_application_security_group_association#delete PrivateEndpointApplicationSecurityGroupAssociation#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/private_endpoint_application_security_group_association#read PrivateEndpointApplicationSecurityGroupAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference <a name="PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/v9/privateendpointapplicationsecuritygroupassociation"

privateendpointapplicationsecuritygroupassociation.NewPrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



