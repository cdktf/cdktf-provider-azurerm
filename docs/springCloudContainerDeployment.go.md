# `azurerm_spring_cloud_container_deployment`

Refer to the Terraform Registory for docs: [`azurerm_spring_cloud_container_deployment`](https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment).

# `springCloudContainerDeployment` Submodule <a name="`springCloudContainerDeployment` Submodule" id="@cdktf/provider-azurerm.springCloudContainerDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SpringCloudContainerDeployment <a name="SpringCloudContainerDeployment" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment azurerm_spring_cloud_container_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudcontainerdeployment"

springcloudcontainerdeployment.NewSpringCloudContainerDeployment(scope Construct, id *string, config SpringCloudContainerDeploymentConfig) SpringCloudContainerDeployment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig">SpringCloudContainerDeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig">SpringCloudContainerDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.putQuota">PutQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetAddonJson">ResetAddonJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetArguments">ResetArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetCommands">ResetCommands</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetEnvironmentVariables">ResetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetInstanceCount">ResetInstanceCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetLanguageFramework">ResetLanguageFramework</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetQuota">ResetQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutQuota` <a name="PutQuota" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.putQuota"></a>

```go
func PutQuota(value SpringCloudContainerDeploymentQuota)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.putQuota.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota">SpringCloudContainerDeploymentQuota</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.putTimeouts"></a>

```go
func PutTimeouts(value SpringCloudContainerDeploymentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts">SpringCloudContainerDeploymentTimeouts</a>

---

##### `ResetAddonJson` <a name="ResetAddonJson" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetAddonJson"></a>

```go
func ResetAddonJson()
```

##### `ResetArguments` <a name="ResetArguments" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetArguments"></a>

```go
func ResetArguments()
```

##### `ResetCommands` <a name="ResetCommands" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetCommands"></a>

```go
func ResetCommands()
```

##### `ResetEnvironmentVariables` <a name="ResetEnvironmentVariables" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetEnvironmentVariables"></a>

```go
func ResetEnvironmentVariables()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetId"></a>

```go
func ResetId()
```

##### `ResetInstanceCount` <a name="ResetInstanceCount" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetInstanceCount"></a>

```go
func ResetInstanceCount()
```

##### `ResetLanguageFramework` <a name="ResetLanguageFramework" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetLanguageFramework"></a>

```go
func ResetLanguageFramework()
```

##### `ResetQuota` <a name="ResetQuota" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetQuota"></a>

```go
func ResetQuota()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudcontainerdeployment"

springcloudcontainerdeployment.SpringCloudContainerDeployment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudcontainerdeployment"

springcloudcontainerdeployment.SpringCloudContainerDeployment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudcontainerdeployment"

springcloudcontainerdeployment.SpringCloudContainerDeployment_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.quota">Quota</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference">SpringCloudContainerDeploymentQuotaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference">SpringCloudContainerDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.addonJsonInput">AddonJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.argumentsInput">ArgumentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.commandsInput">CommandsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.environmentVariablesInput">EnvironmentVariablesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.imageInput">ImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.instanceCountInput">InstanceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.languageFrameworkInput">LanguageFrameworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.quotaInput">QuotaInput</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota">SpringCloudContainerDeploymentQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.serverInput">ServerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.springCloudAppIdInput">SpringCloudAppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.addonJson">AddonJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.arguments">Arguments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.commands">Commands</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.environmentVariables">EnvironmentVariables</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.image">Image</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.languageFramework">LanguageFramework</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.server">Server</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.springCloudAppId">SpringCloudAppId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Quota`<sup>Required</sup> <a name="Quota" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.quota"></a>

```go
func Quota() SpringCloudContainerDeploymentQuotaOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference">SpringCloudContainerDeploymentQuotaOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.timeouts"></a>

```go
func Timeouts() SpringCloudContainerDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference">SpringCloudContainerDeploymentTimeoutsOutputReference</a>

---

##### `AddonJsonInput`<sup>Optional</sup> <a name="AddonJsonInput" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.addonJsonInput"></a>

```go
func AddonJsonInput() *string
```

- *Type:* *string

---

##### `ArgumentsInput`<sup>Optional</sup> <a name="ArgumentsInput" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.argumentsInput"></a>

```go
func ArgumentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CommandsInput`<sup>Optional</sup> <a name="CommandsInput" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.commandsInput"></a>

```go
func CommandsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnvironmentVariablesInput`<sup>Optional</sup> <a name="EnvironmentVariablesInput" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.environmentVariablesInput"></a>

```go
func EnvironmentVariablesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageInput`<sup>Optional</sup> <a name="ImageInput" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.imageInput"></a>

```go
func ImageInput() *string
```

- *Type:* *string

---

##### `InstanceCountInput`<sup>Optional</sup> <a name="InstanceCountInput" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.instanceCountInput"></a>

```go
func InstanceCountInput() *f64
```

- *Type:* *f64

---

##### `LanguageFrameworkInput`<sup>Optional</sup> <a name="LanguageFrameworkInput" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.languageFrameworkInput"></a>

```go
func LanguageFrameworkInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `QuotaInput`<sup>Optional</sup> <a name="QuotaInput" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.quotaInput"></a>

```go
func QuotaInput() SpringCloudContainerDeploymentQuota
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota">SpringCloudContainerDeploymentQuota</a>

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.serverInput"></a>

```go
func ServerInput() *string
```

- *Type:* *string

---

##### `SpringCloudAppIdInput`<sup>Optional</sup> <a name="SpringCloudAppIdInput" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.springCloudAppIdInput"></a>

```go
func SpringCloudAppIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AddonJson`<sup>Required</sup> <a name="AddonJson" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.addonJson"></a>

```go
func AddonJson() *string
```

- *Type:* *string

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.arguments"></a>

```go
func Arguments() *[]*string
```

- *Type:* *[]*string

---

##### `Commands`<sup>Required</sup> <a name="Commands" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.commands"></a>

```go
func Commands() *[]*string
```

- *Type:* *[]*string

---

##### `EnvironmentVariables`<sup>Required</sup> <a name="EnvironmentVariables" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.environmentVariables"></a>

```go
func EnvironmentVariables() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.image"></a>

```go
func Image() *string
```

- *Type:* *string

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.instanceCount"></a>

```go
func InstanceCount() *f64
```

- *Type:* *f64

---

##### `LanguageFramework`<sup>Required</sup> <a name="LanguageFramework" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.languageFramework"></a>

```go
func LanguageFramework() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.server"></a>

```go
func Server() *string
```

- *Type:* *string

---

##### `SpringCloudAppId`<sup>Required</sup> <a name="SpringCloudAppId" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.springCloudAppId"></a>

```go
func SpringCloudAppId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeployment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SpringCloudContainerDeploymentConfig <a name="SpringCloudContainerDeploymentConfig" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudcontainerdeployment"

&springcloudcontainerdeployment.SpringCloudContainerDeploymentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Image: *string,
	Name: *string,
	Server: *string,
	SpringCloudAppId: *string,
	AddonJson: *string,
	Arguments: *[]*string,
	Commands: *[]*string,
	EnvironmentVariables: *map[string]*string,
	Id: *string,
	InstanceCount: *f64,
	LanguageFramework: *string,
	Quota: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota,
	Timeouts: github.com/cdktf/cdktf-provider-azurerm-go/azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.image">Image</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment#image SpringCloudContainerDeployment#image}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment#name SpringCloudContainerDeployment#name}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.server">Server</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment#server SpringCloudContainerDeployment#server}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.springCloudAppId">SpringCloudAppId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment#spring_cloud_app_id SpringCloudContainerDeployment#spring_cloud_app_id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.addonJson">AddonJson</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment#addon_json SpringCloudContainerDeployment#addon_json}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.arguments">Arguments</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment#arguments SpringCloudContainerDeployment#arguments}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.commands">Commands</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment#commands SpringCloudContainerDeployment#commands}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.environmentVariables">EnvironmentVariables</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment#environment_variables SpringCloudContainerDeployment#environment_variables}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment#id SpringCloudContainerDeployment#id}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.instanceCount">InstanceCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment#instance_count SpringCloudContainerDeployment#instance_count}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.languageFramework">LanguageFramework</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment#language_framework SpringCloudContainerDeployment#language_framework}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.quota">Quota</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota">SpringCloudContainerDeploymentQuota</a></code> | quota block. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts">SpringCloudContainerDeploymentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Image`<sup>Required</sup> <a name="Image" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.image"></a>

```go
Image *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment#image SpringCloudContainerDeployment#image}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment#name SpringCloudContainerDeployment#name}.

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.server"></a>

```go
Server *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment#server SpringCloudContainerDeployment#server}.

---

##### `SpringCloudAppId`<sup>Required</sup> <a name="SpringCloudAppId" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.springCloudAppId"></a>

```go
SpringCloudAppId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment#spring_cloud_app_id SpringCloudContainerDeployment#spring_cloud_app_id}.

---

##### `AddonJson`<sup>Optional</sup> <a name="AddonJson" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.addonJson"></a>

```go
AddonJson *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment#addon_json SpringCloudContainerDeployment#addon_json}.

---

##### `Arguments`<sup>Optional</sup> <a name="Arguments" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.arguments"></a>

```go
Arguments *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment#arguments SpringCloudContainerDeployment#arguments}.

---

##### `Commands`<sup>Optional</sup> <a name="Commands" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.commands"></a>

```go
Commands *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment#commands SpringCloudContainerDeployment#commands}.

---

##### `EnvironmentVariables`<sup>Optional</sup> <a name="EnvironmentVariables" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.environmentVariables"></a>

```go
EnvironmentVariables *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment#environment_variables SpringCloudContainerDeployment#environment_variables}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment#id SpringCloudContainerDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceCount`<sup>Optional</sup> <a name="InstanceCount" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.instanceCount"></a>

```go
InstanceCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment#instance_count SpringCloudContainerDeployment#instance_count}.

---

##### `LanguageFramework`<sup>Optional</sup> <a name="LanguageFramework" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.languageFramework"></a>

```go
LanguageFramework *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment#language_framework SpringCloudContainerDeployment#language_framework}.

---

##### `Quota`<sup>Optional</sup> <a name="Quota" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.quota"></a>

```go
Quota SpringCloudContainerDeploymentQuota
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota">SpringCloudContainerDeploymentQuota</a>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment#quota SpringCloudContainerDeployment#quota}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentConfig.property.timeouts"></a>

```go
Timeouts SpringCloudContainerDeploymentTimeouts
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts">SpringCloudContainerDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment#timeouts SpringCloudContainerDeployment#timeouts}

---

### SpringCloudContainerDeploymentQuota <a name="SpringCloudContainerDeploymentQuota" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudcontainerdeployment"

&springcloudcontainerdeployment.SpringCloudContainerDeploymentQuota {
	Cpu: *string,
	Memory: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota.property.cpu">Cpu</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment#cpu SpringCloudContainerDeployment#cpu}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota.property.memory">Memory</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment#memory SpringCloudContainerDeployment#memory}. |

---

##### `Cpu`<sup>Optional</sup> <a name="Cpu" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota.property.cpu"></a>

```go
Cpu *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment#cpu SpringCloudContainerDeployment#cpu}.

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota.property.memory"></a>

```go
Memory *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment#memory SpringCloudContainerDeployment#memory}.

---

### SpringCloudContainerDeploymentTimeouts <a name="SpringCloudContainerDeploymentTimeouts" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudcontainerdeployment"

&springcloudcontainerdeployment.SpringCloudContainerDeploymentTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment#create SpringCloudContainerDeployment#create}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment#delete SpringCloudContainerDeployment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment#read SpringCloudContainerDeployment#read}. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment#update SpringCloudContainerDeployment#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment#create SpringCloudContainerDeployment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment#delete SpringCloudContainerDeployment#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment#read SpringCloudContainerDeployment#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.68.0/docs/resources/spring_cloud_container_deployment#update SpringCloudContainerDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SpringCloudContainerDeploymentQuotaOutputReference <a name="SpringCloudContainerDeploymentQuotaOutputReference" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudcontainerdeployment"

springcloudcontainerdeployment.NewSpringCloudContainerDeploymentQuotaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpringCloudContainerDeploymentQuotaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.resetCpu">ResetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.resetMemory">ResetMemory</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpu` <a name="ResetCpu" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.resetCpu"></a>

```go
func ResetCpu()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.resetMemory"></a>

```go
func ResetMemory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.cpuInput">CpuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.memoryInput">MemoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.cpu">Cpu</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.memory">Memory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota">SpringCloudContainerDeploymentQuota</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuInput`<sup>Optional</sup> <a name="CpuInput" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.cpuInput"></a>

```go
func CpuInput() *string
```

- *Type:* *string

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.memoryInput"></a>

```go
func MemoryInput() *string
```

- *Type:* *string

---

##### `Cpu`<sup>Required</sup> <a name="Cpu" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.cpu"></a>

```go
func Cpu() *string
```

- *Type:* *string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.memory"></a>

```go
func Memory() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuotaOutputReference.property.internalValue"></a>

```go
func InternalValue() SpringCloudContainerDeploymentQuota
```

- *Type:* <a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentQuota">SpringCloudContainerDeploymentQuota</a>

---


### SpringCloudContainerDeploymentTimeoutsOutputReference <a name="SpringCloudContainerDeploymentTimeoutsOutputReference" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-azurerm-go/azurerm/springcloudcontainerdeployment"

springcloudcontainerdeployment.NewSpringCloudContainerDeploymentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SpringCloudContainerDeploymentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-azurerm.springCloudContainerDeployment.SpringCloudContainerDeploymentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



