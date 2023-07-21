# `azurerm_tenant_template_deployment`

Refer to the Terraform Registory for docs: [`azurerm_tenant_template_deployment`](https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/tenant_template_deployment).

# `tenantTemplateDeployment` Submodule <a name="`tenantTemplateDeployment` Submodule" id="@cdktf/provider-azurerm.tenantTemplateDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TenantTemplateDeployment <a name="TenantTemplateDeployment" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/tenant_template_deployment azurerm_tenant_template_deployment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer"></a>

```typescript
import { tenantTemplateDeployment } from '@cdktf/provider-azurerm'

new tenantTemplateDeployment.TenantTemplateDeployment(scope: Construct, id: string, config: TenantTemplateDeploymentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig">TenantTemplateDeploymentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig">TenantTemplateDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetDebugLevel">resetDebugLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetParametersContent">resetParametersContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetTemplateContent">resetTemplateContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetTemplateSpecVersionId">resetTemplateSpecVersionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.putTimeouts"></a>

```typescript
public putTimeouts(value: TenantTemplateDeploymentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts">TenantTemplateDeploymentTimeouts</a>

---

##### `resetDebugLevel` <a name="resetDebugLevel" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetDebugLevel"></a>

```typescript
public resetDebugLevel(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParametersContent` <a name="resetParametersContent" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetParametersContent"></a>

```typescript
public resetParametersContent(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTemplateContent` <a name="resetTemplateContent" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetTemplateContent"></a>

```typescript
public resetTemplateContent(): void
```

##### `resetTemplateSpecVersionId` <a name="resetTemplateSpecVersionId" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetTemplateSpecVersionId"></a>

```typescript
public resetTemplateSpecVersionId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.isConstruct"></a>

```typescript
import { tenantTemplateDeployment } from '@cdktf/provider-azurerm'

tenantTemplateDeployment.TenantTemplateDeployment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.isTerraformElement"></a>

```typescript
import { tenantTemplateDeployment } from '@cdktf/provider-azurerm'

tenantTemplateDeployment.TenantTemplateDeployment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.isTerraformResource"></a>

```typescript
import { tenantTemplateDeployment } from '@cdktf/provider-azurerm'

tenantTemplateDeployment.TenantTemplateDeployment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.outputContent">outputContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference">TenantTemplateDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.debugLevelInput">debugLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.parametersContentInput">parametersContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.templateContentInput">templateContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.templateSpecVersionIdInput">templateSpecVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts">TenantTemplateDeploymentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.debugLevel">debugLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.parametersContent">parametersContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.templateContent">templateContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.templateSpecVersionId">templateSpecVersionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `outputContent`<sup>Required</sup> <a name="outputContent" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.outputContent"></a>

```typescript
public readonly outputContent: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.timeouts"></a>

```typescript
public readonly timeouts: TenantTemplateDeploymentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference">TenantTemplateDeploymentTimeoutsOutputReference</a>

---

##### `debugLevelInput`<sup>Optional</sup> <a name="debugLevelInput" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.debugLevelInput"></a>

```typescript
public readonly debugLevelInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersContentInput`<sup>Optional</sup> <a name="parametersContentInput" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.parametersContentInput"></a>

```typescript
public readonly parametersContentInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `templateContentInput`<sup>Optional</sup> <a name="templateContentInput" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.templateContentInput"></a>

```typescript
public readonly templateContentInput: string;
```

- *Type:* string

---

##### `templateSpecVersionIdInput`<sup>Optional</sup> <a name="templateSpecVersionIdInput" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.templateSpecVersionIdInput"></a>

```typescript
public readonly templateSpecVersionIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | TenantTemplateDeploymentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts">TenantTemplateDeploymentTimeouts</a>

---

##### `debugLevel`<sup>Required</sup> <a name="debugLevel" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.debugLevel"></a>

```typescript
public readonly debugLevel: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parametersContent`<sup>Required</sup> <a name="parametersContent" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.parametersContent"></a>

```typescript
public readonly parametersContent: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `templateContent`<sup>Required</sup> <a name="templateContent" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.templateContent"></a>

```typescript
public readonly templateContent: string;
```

- *Type:* string

---

##### `templateSpecVersionId`<sup>Required</sup> <a name="templateSpecVersionId" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.templateSpecVersionId"></a>

```typescript
public readonly templateSpecVersionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeployment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TenantTemplateDeploymentConfig <a name="TenantTemplateDeploymentConfig" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.Initializer"></a>

```typescript
import { tenantTemplateDeployment } from '@cdktf/provider-azurerm'

const tenantTemplateDeploymentConfig: tenantTemplateDeployment.TenantTemplateDeploymentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/tenant_template_deployment#location TenantTemplateDeployment#location}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/tenant_template_deployment#name TenantTemplateDeployment#name}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.debugLevel">debugLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/tenant_template_deployment#debug_level TenantTemplateDeployment#debug_level}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/tenant_template_deployment#id TenantTemplateDeployment#id}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.parametersContent">parametersContent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/tenant_template_deployment#parameters_content TenantTemplateDeployment#parameters_content}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/tenant_template_deployment#tags TenantTemplateDeployment#tags}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.templateContent">templateContent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/tenant_template_deployment#template_content TenantTemplateDeployment#template_content}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.templateSpecVersionId">templateSpecVersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/tenant_template_deployment#template_spec_version_id TenantTemplateDeployment#template_spec_version_id}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts">TenantTemplateDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/tenant_template_deployment#location TenantTemplateDeployment#location}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/tenant_template_deployment#name TenantTemplateDeployment#name}.

---

##### `debugLevel`<sup>Optional</sup> <a name="debugLevel" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.debugLevel"></a>

```typescript
public readonly debugLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/tenant_template_deployment#debug_level TenantTemplateDeployment#debug_level}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/tenant_template_deployment#id TenantTemplateDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parametersContent`<sup>Optional</sup> <a name="parametersContent" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.parametersContent"></a>

```typescript
public readonly parametersContent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/tenant_template_deployment#parameters_content TenantTemplateDeployment#parameters_content}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/tenant_template_deployment#tags TenantTemplateDeployment#tags}.

---

##### `templateContent`<sup>Optional</sup> <a name="templateContent" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.templateContent"></a>

```typescript
public readonly templateContent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/tenant_template_deployment#template_content TenantTemplateDeployment#template_content}.

---

##### `templateSpecVersionId`<sup>Optional</sup> <a name="templateSpecVersionId" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.templateSpecVersionId"></a>

```typescript
public readonly templateSpecVersionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/tenant_template_deployment#template_spec_version_id TenantTemplateDeployment#template_spec_version_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: TenantTemplateDeploymentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts">TenantTemplateDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/tenant_template_deployment#timeouts TenantTemplateDeployment#timeouts}

---

### TenantTemplateDeploymentTimeouts <a name="TenantTemplateDeploymentTimeouts" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts.Initializer"></a>

```typescript
import { tenantTemplateDeployment } from '@cdktf/provider-azurerm'

const tenantTemplateDeploymentTimeouts: tenantTemplateDeployment.TenantTemplateDeploymentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/tenant_template_deployment#create TenantTemplateDeployment#create}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/tenant_template_deployment#delete TenantTemplateDeployment#delete}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/tenant_template_deployment#read TenantTemplateDeployment#read}. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/tenant_template_deployment#update TenantTemplateDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/tenant_template_deployment#create TenantTemplateDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/tenant_template_deployment#delete TenantTemplateDeployment#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/tenant_template_deployment#read TenantTemplateDeployment#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.66.0/docs/resources/tenant_template_deployment#update TenantTemplateDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TenantTemplateDeploymentTimeoutsOutputReference <a name="TenantTemplateDeploymentTimeoutsOutputReference" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.Initializer"></a>

```typescript
import { tenantTemplateDeployment } from '@cdktf/provider-azurerm'

new tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts">TenantTemplateDeploymentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TenantTemplateDeploymentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.tenantTemplateDeployment.TenantTemplateDeploymentTimeouts">TenantTemplateDeploymentTimeouts</a>

---



