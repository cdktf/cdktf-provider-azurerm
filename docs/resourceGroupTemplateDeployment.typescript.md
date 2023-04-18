# `azurerm_resource_group_template_deployment`

Refer to the Terraform Registory for docs: [`azurerm_resource_group_template_deployment`](https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/resource_group_template_deployment).

# `resourceGroupTemplateDeployment` Submodule <a name="`resourceGroupTemplateDeployment` Submodule" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceGroupTemplateDeployment <a name="ResourceGroupTemplateDeployment" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/resource_group_template_deployment azurerm_resource_group_template_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer"></a>

```typescript
import { resourceGroupTemplateDeployment } from '@cdktf/provider-azurerm'

new resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment(scope: Construct, id: string, config: ResourceGroupTemplateDeploymentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig">ResourceGroupTemplateDeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig">ResourceGroupTemplateDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.resetDebugLevel">resetDebugLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.resetParametersContent">resetParametersContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.resetTemplateContent">resetTemplateContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.resetTemplateSpecVersionId">resetTemplateSpecVersionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.putTimeouts"></a>

```typescript
public putTimeouts(value: ResourceGroupTemplateDeploymentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeouts">ResourceGroupTemplateDeploymentTimeouts</a>

---

##### `resetDebugLevel` <a name="resetDebugLevel" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.resetDebugLevel"></a>

```typescript
public resetDebugLevel(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParametersContent` <a name="resetParametersContent" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.resetParametersContent"></a>

```typescript
public resetParametersContent(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTemplateContent` <a name="resetTemplateContent" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.resetTemplateContent"></a>

```typescript
public resetTemplateContent(): void
```

##### `resetTemplateSpecVersionId` <a name="resetTemplateSpecVersionId" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.resetTemplateSpecVersionId"></a>

```typescript
public resetTemplateSpecVersionId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.isConstruct"></a>

```typescript
import { resourceGroupTemplateDeployment } from '@cdktf/provider-azurerm'

resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.isTerraformElement"></a>

```typescript
import { resourceGroupTemplateDeployment } from '@cdktf/provider-azurerm'

resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.isTerraformResource"></a>

```typescript
import { resourceGroupTemplateDeployment } from '@cdktf/provider-azurerm'

resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.outputContent">outputContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference">ResourceGroupTemplateDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.debugLevelInput">debugLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.deploymentModeInput">deploymentModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.parametersContentInput">parametersContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.templateContentInput">templateContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.templateSpecVersionIdInput">templateSpecVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeouts">ResourceGroupTemplateDeploymentTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.debugLevel">debugLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.deploymentMode">deploymentMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.parametersContent">parametersContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.templateContent">templateContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.templateSpecVersionId">templateSpecVersionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `outputContent`<sup>Required</sup> <a name="outputContent" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.outputContent"></a>

```typescript
public readonly outputContent: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.timeouts"></a>

```typescript
public readonly timeouts: ResourceGroupTemplateDeploymentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference">ResourceGroupTemplateDeploymentTimeoutsOutputReference</a>

---

##### `debugLevelInput`<sup>Optional</sup> <a name="debugLevelInput" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.debugLevelInput"></a>

```typescript
public readonly debugLevelInput: string;
```

- *Type:* string

---

##### `deploymentModeInput`<sup>Optional</sup> <a name="deploymentModeInput" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.deploymentModeInput"></a>

```typescript
public readonly deploymentModeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersContentInput`<sup>Optional</sup> <a name="parametersContentInput" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.parametersContentInput"></a>

```typescript
public readonly parametersContentInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `templateContentInput`<sup>Optional</sup> <a name="templateContentInput" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.templateContentInput"></a>

```typescript
public readonly templateContentInput: string;
```

- *Type:* string

---

##### `templateSpecVersionIdInput`<sup>Optional</sup> <a name="templateSpecVersionIdInput" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.templateSpecVersionIdInput"></a>

```typescript
public readonly templateSpecVersionIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ResourceGroupTemplateDeploymentTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeouts">ResourceGroupTemplateDeploymentTimeouts</a> | cdktf.IResolvable

---

##### `debugLevel`<sup>Required</sup> <a name="debugLevel" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.debugLevel"></a>

```typescript
public readonly debugLevel: string;
```

- *Type:* string

---

##### `deploymentMode`<sup>Required</sup> <a name="deploymentMode" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.deploymentMode"></a>

```typescript
public readonly deploymentMode: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parametersContent`<sup>Required</sup> <a name="parametersContent" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.parametersContent"></a>

```typescript
public readonly parametersContent: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `templateContent`<sup>Required</sup> <a name="templateContent" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.templateContent"></a>

```typescript
public readonly templateContent: string;
```

- *Type:* string

---

##### `templateSpecVersionId`<sup>Required</sup> <a name="templateSpecVersionId" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.templateSpecVersionId"></a>

```typescript
public readonly templateSpecVersionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeployment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceGroupTemplateDeploymentConfig <a name="ResourceGroupTemplateDeploymentConfig" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.Initializer"></a>

```typescript
import { resourceGroupTemplateDeployment } from '@cdktf/provider-azurerm'

const resourceGroupTemplateDeploymentConfig: resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.deploymentMode">deploymentMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/resource_group_template_deployment#deployment_mode ResourceGroupTemplateDeployment#deployment_mode}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/resource_group_template_deployment#name ResourceGroupTemplateDeployment#name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/resource_group_template_deployment#resource_group_name ResourceGroupTemplateDeployment#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.debugLevel">debugLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/resource_group_template_deployment#debug_level ResourceGroupTemplateDeployment#debug_level}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/resource_group_template_deployment#id ResourceGroupTemplateDeployment#id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.parametersContent">parametersContent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/resource_group_template_deployment#parameters_content ResourceGroupTemplateDeployment#parameters_content}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/resource_group_template_deployment#tags ResourceGroupTemplateDeployment#tags}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.templateContent">templateContent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/resource_group_template_deployment#template_content ResourceGroupTemplateDeployment#template_content}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.templateSpecVersionId">templateSpecVersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/resource_group_template_deployment#template_spec_version_id ResourceGroupTemplateDeployment#template_spec_version_id}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeouts">ResourceGroupTemplateDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `deploymentMode`<sup>Required</sup> <a name="deploymentMode" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.deploymentMode"></a>

```typescript
public readonly deploymentMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/resource_group_template_deployment#deployment_mode ResourceGroupTemplateDeployment#deployment_mode}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/resource_group_template_deployment#name ResourceGroupTemplateDeployment#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/resource_group_template_deployment#resource_group_name ResourceGroupTemplateDeployment#resource_group_name}.

---

##### `debugLevel`<sup>Optional</sup> <a name="debugLevel" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.debugLevel"></a>

```typescript
public readonly debugLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/resource_group_template_deployment#debug_level ResourceGroupTemplateDeployment#debug_level}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/resource_group_template_deployment#id ResourceGroupTemplateDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parametersContent`<sup>Optional</sup> <a name="parametersContent" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.parametersContent"></a>

```typescript
public readonly parametersContent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/resource_group_template_deployment#parameters_content ResourceGroupTemplateDeployment#parameters_content}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/resource_group_template_deployment#tags ResourceGroupTemplateDeployment#tags}.

---

##### `templateContent`<sup>Optional</sup> <a name="templateContent" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.templateContent"></a>

```typescript
public readonly templateContent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/resource_group_template_deployment#template_content ResourceGroupTemplateDeployment#template_content}.

---

##### `templateSpecVersionId`<sup>Optional</sup> <a name="templateSpecVersionId" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.templateSpecVersionId"></a>

```typescript
public readonly templateSpecVersionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/resource_group_template_deployment#template_spec_version_id ResourceGroupTemplateDeployment#template_spec_version_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ResourceGroupTemplateDeploymentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeouts">ResourceGroupTemplateDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/resource_group_template_deployment#timeouts ResourceGroupTemplateDeployment#timeouts}

---

### ResourceGroupTemplateDeploymentTimeouts <a name="ResourceGroupTemplateDeploymentTimeouts" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeouts.Initializer"></a>

```typescript
import { resourceGroupTemplateDeployment } from '@cdktf/provider-azurerm'

const resourceGroupTemplateDeploymentTimeouts: resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/resource_group_template_deployment#create ResourceGroupTemplateDeployment#create}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/resource_group_template_deployment#delete ResourceGroupTemplateDeployment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/resource_group_template_deployment#read ResourceGroupTemplateDeployment#read}. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/resource_group_template_deployment#update ResourceGroupTemplateDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/resource_group_template_deployment#create ResourceGroupTemplateDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/resource_group_template_deployment#delete ResourceGroupTemplateDeployment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/resource_group_template_deployment#read ResourceGroupTemplateDeployment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.52.0/docs/resources/resource_group_template_deployment#update ResourceGroupTemplateDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceGroupTemplateDeploymentTimeoutsOutputReference <a name="ResourceGroupTemplateDeploymentTimeoutsOutputReference" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.Initializer"></a>

```typescript
import { resourceGroupTemplateDeployment } from '@cdktf/provider-azurerm'

new resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeouts">ResourceGroupTemplateDeploymentTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ResourceGroupTemplateDeploymentTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.resourceGroupTemplateDeployment.ResourceGroupTemplateDeploymentTimeouts">ResourceGroupTemplateDeploymentTimeouts</a> | cdktf.IResolvable

---



