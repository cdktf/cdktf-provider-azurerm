# `data_azurerm_virtual_desktop_host_pool`

Refer to the Terraform Registory for docs: [`data_azurerm_virtual_desktop_host_pool`](https://www.terraform.io/docs/providers/azurerm/d/virtual_desktop_host_pool).

# `dataAzurermVirtualDesktopHostPool` Submodule <a name="`dataAzurermVirtualDesktopHostPool` Submodule" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermVirtualDesktopHostPool <a name="DataAzurermVirtualDesktopHostPool" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/virtual_desktop_host_pool azurerm_virtual_desktop_host_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.Initializer"></a>

```typescript
import { dataAzurermVirtualDesktopHostPool } from '@cdktf/provider-azurerm'

new dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool(scope: Construct, id: string, config: DataAzurermVirtualDesktopHostPoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig">DataAzurermVirtualDesktopHostPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig">DataAzurermVirtualDesktopHostPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermVirtualDesktopHostPoolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeouts">DataAzurermVirtualDesktopHostPoolTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.isConstruct"></a>

```typescript
import { dataAzurermVirtualDesktopHostPool } from '@cdktf/provider-azurerm'

dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.isTerraformElement"></a>

```typescript
import { dataAzurermVirtualDesktopHostPool } from '@cdktf/provider-azurerm'

dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.isTerraformDataSource"></a>

```typescript
import { dataAzurermVirtualDesktopHostPool } from '@cdktf/provider-azurerm'

dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.customRdpProperties">customRdpProperties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.friendlyName">friendlyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.loadBalancerType">loadBalancerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.maximumSessionsAllowed">maximumSessionsAllowed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.personalDesktopAssignmentType">personalDesktopAssignmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.preferredAppGroupType">preferredAppGroupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.scheduledAgentUpdates">scheduledAgentUpdates</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList">DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.startVmOnConnect">startVmOnConnect</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference">DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.validateEnvironment">validateEnvironment</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeouts">DataAzurermVirtualDesktopHostPoolTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `customRdpProperties`<sup>Required</sup> <a name="customRdpProperties" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.customRdpProperties"></a>

```typescript
public readonly customRdpProperties: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `friendlyName`<sup>Required</sup> <a name="friendlyName" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.friendlyName"></a>

```typescript
public readonly friendlyName: string;
```

- *Type:* string

---

##### `loadBalancerType`<sup>Required</sup> <a name="loadBalancerType" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.loadBalancerType"></a>

```typescript
public readonly loadBalancerType: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `maximumSessionsAllowed`<sup>Required</sup> <a name="maximumSessionsAllowed" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.maximumSessionsAllowed"></a>

```typescript
public readonly maximumSessionsAllowed: number;
```

- *Type:* number

---

##### `personalDesktopAssignmentType`<sup>Required</sup> <a name="personalDesktopAssignmentType" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.personalDesktopAssignmentType"></a>

```typescript
public readonly personalDesktopAssignmentType: string;
```

- *Type:* string

---

##### `preferredAppGroupType`<sup>Required</sup> <a name="preferredAppGroupType" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.preferredAppGroupType"></a>

```typescript
public readonly preferredAppGroupType: string;
```

- *Type:* string

---

##### `scheduledAgentUpdates`<sup>Required</sup> <a name="scheduledAgentUpdates" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.scheduledAgentUpdates"></a>

```typescript
public readonly scheduledAgentUpdates: DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList">DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList</a>

---

##### `startVmOnConnect`<sup>Required</sup> <a name="startVmOnConnect" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.startVmOnConnect"></a>

```typescript
public readonly startVmOnConnect: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference">DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `validateEnvironment`<sup>Required</sup> <a name="validateEnvironment" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.validateEnvironment"></a>

```typescript
public readonly validateEnvironment: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAzurermVirtualDesktopHostPoolTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeouts">DataAzurermVirtualDesktopHostPoolTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermVirtualDesktopHostPoolConfig <a name="DataAzurermVirtualDesktopHostPoolConfig" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.Initializer"></a>

```typescript
import { dataAzurermVirtualDesktopHostPool } from '@cdktf/provider-azurerm'

const dataAzurermVirtualDesktopHostPoolConfig: dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/virtual_desktop_host_pool#name DataAzurermVirtualDesktopHostPool#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/virtual_desktop_host_pool#resource_group_name DataAzurermVirtualDesktopHostPool#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/virtual_desktop_host_pool#id DataAzurermVirtualDesktopHostPool#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeouts">DataAzurermVirtualDesktopHostPoolTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/virtual_desktop_host_pool#name DataAzurermVirtualDesktopHostPool#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/virtual_desktop_host_pool#resource_group_name DataAzurermVirtualDesktopHostPool#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/virtual_desktop_host_pool#id DataAzurermVirtualDesktopHostPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermVirtualDesktopHostPoolTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeouts">DataAzurermVirtualDesktopHostPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/virtual_desktop_host_pool#timeouts DataAzurermVirtualDesktopHostPool#timeouts}

---

### DataAzurermVirtualDesktopHostPoolScheduledAgentUpdates <a name="DataAzurermVirtualDesktopHostPoolScheduledAgentUpdates" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdates.Initializer"></a>

```typescript
import { dataAzurermVirtualDesktopHostPool } from '@cdktf/provider-azurerm'

const dataAzurermVirtualDesktopHostPoolScheduledAgentUpdates: dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdates = { ... }
```


### DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesSchedule <a name="DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesSchedule" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesSchedule.Initializer"></a>

```typescript
import { dataAzurermVirtualDesktopHostPool } from '@cdktf/provider-azurerm'

const dataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesSchedule: dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesSchedule = { ... }
```


### DataAzurermVirtualDesktopHostPoolTimeouts <a name="DataAzurermVirtualDesktopHostPoolTimeouts" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeouts.Initializer"></a>

```typescript
import { dataAzurermVirtualDesktopHostPool } from '@cdktf/provider-azurerm'

const dataAzurermVirtualDesktopHostPoolTimeouts: dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/virtual_desktop_host_pool#read DataAzurermVirtualDesktopHostPool#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/virtual_desktop_host_pool#read DataAzurermVirtualDesktopHostPool#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList <a name="DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.Initializer"></a>

```typescript
import { dataAzurermVirtualDesktopHostPool } from '@cdktf/provider-azurerm'

new dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.get"></a>

```typescript
public get(index: number): DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference <a name="DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.Initializer"></a>

```typescript
import { dataAzurermVirtualDesktopHostPool } from '@cdktf/provider-azurerm'

new dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList">DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.useSessionHostTimezone">useSessionHostTimezone</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdates">DataAzurermVirtualDesktopHostPoolScheduledAgentUpdates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.schedule"></a>

```typescript
public readonly schedule: DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList">DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList</a>

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `useSessionHostTimezone`<sup>Required</sup> <a name="useSessionHostTimezone" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.useSessionHostTimezone"></a>

```typescript
public readonly useSessionHostTimezone: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermVirtualDesktopHostPoolScheduledAgentUpdates;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdates">DataAzurermVirtualDesktopHostPoolScheduledAgentUpdates</a>

---


### DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList <a name="DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.Initializer"></a>

```typescript
import { dataAzurermVirtualDesktopHostPool } from '@cdktf/provider-azurerm'

new dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.get"></a>

```typescript
public get(index: number): DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference <a name="DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer"></a>

```typescript
import { dataAzurermVirtualDesktopHostPool } from '@cdktf/provider-azurerm'

new dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.hourOfDay">hourOfDay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesSchedule">DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

---

##### `hourOfDay`<sup>Required</sup> <a name="hourOfDay" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.hourOfDay"></a>

```typescript
public readonly hourOfDay: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesSchedule;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesSchedule">DataAzurermVirtualDesktopHostPoolScheduledAgentUpdatesSchedule</a>

---


### DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference <a name="DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermVirtualDesktopHostPool } from '@cdktf/provider-azurerm'

new dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeouts">DataAzurermVirtualDesktopHostPoolTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurermVirtualDesktopHostPoolTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermVirtualDesktopHostPool.DataAzurermVirtualDesktopHostPoolTimeouts">DataAzurermVirtualDesktopHostPoolTimeouts</a> | cdktf.IResolvable

---



