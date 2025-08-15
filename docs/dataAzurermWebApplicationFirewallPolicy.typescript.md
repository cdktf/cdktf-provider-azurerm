# `dataAzurermWebApplicationFirewallPolicy` Submodule <a name="`dataAzurermWebApplicationFirewallPolicy` Submodule" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurermWebApplicationFirewallPolicy <a name="DataAzurermWebApplicationFirewallPolicy" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/web_application_firewall_policy azurerm_web_application_firewall_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.Initializer"></a>

```typescript
import { dataAzurermWebApplicationFirewallPolicy } from '@cdktf/provider-azurerm'

new dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy(scope: Construct, id: string, config: DataAzurermWebApplicationFirewallPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyConfig">DataAzurermWebApplicationFirewallPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyConfig">DataAzurermWebApplicationFirewallPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurermWebApplicationFirewallPolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeouts">DataAzurermWebApplicationFirewallPolicyTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAzurermWebApplicationFirewallPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.isConstruct"></a>

```typescript
import { dataAzurermWebApplicationFirewallPolicy } from '@cdktf/provider-azurerm'

dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.isTerraformElement"></a>

```typescript
import { dataAzurermWebApplicationFirewallPolicy } from '@cdktf/provider-azurerm'

dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.isTerraformDataSource"></a>

```typescript
import { dataAzurermWebApplicationFirewallPolicy } from '@cdktf/provider-azurerm'

dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.generateConfigForImport"></a>

```typescript
import { dataAzurermWebApplicationFirewallPolicy } from '@cdktf/provider-azurerm'

dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAzurermWebApplicationFirewallPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAzurermWebApplicationFirewallPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAzurermWebApplicationFirewallPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/web_application_firewall_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAzurermWebApplicationFirewallPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference">DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeouts">DataAzurermWebApplicationFirewallPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference">DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DataAzurermWebApplicationFirewallPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeouts">DataAzurermWebApplicationFirewallPolicyTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurermWebApplicationFirewallPolicyConfig <a name="DataAzurermWebApplicationFirewallPolicyConfig" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyConfig.Initializer"></a>

```typescript
import { dataAzurermWebApplicationFirewallPolicy } from '@cdktf/provider-azurerm'

const dataAzurermWebApplicationFirewallPolicyConfig: dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/web_application_firewall_policy#name DataAzurermWebApplicationFirewallPolicy#name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/web_application_firewall_policy#resource_group_name DataAzurermWebApplicationFirewallPolicy#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/web_application_firewall_policy#id DataAzurermWebApplicationFirewallPolicy#id}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/web_application_firewall_policy#tags DataAzurermWebApplicationFirewallPolicy#tags}. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeouts">DataAzurermWebApplicationFirewallPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/web_application_firewall_policy#name DataAzurermWebApplicationFirewallPolicy#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/web_application_firewall_policy#resource_group_name DataAzurermWebApplicationFirewallPolicy#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/web_application_firewall_policy#id DataAzurermWebApplicationFirewallPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/web_application_firewall_policy#tags DataAzurermWebApplicationFirewallPolicy#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurermWebApplicationFirewallPolicyTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeouts">DataAzurermWebApplicationFirewallPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/web_application_firewall_policy#timeouts DataAzurermWebApplicationFirewallPolicy#timeouts}

---

### DataAzurermWebApplicationFirewallPolicyTimeouts <a name="DataAzurermWebApplicationFirewallPolicyTimeouts" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeouts.Initializer"></a>

```typescript
import { dataAzurermWebApplicationFirewallPolicy } from '@cdktf/provider-azurerm'

const dataAzurermWebApplicationFirewallPolicyTimeouts: dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/web_application_firewall_policy#read DataAzurermWebApplicationFirewallPolicy#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/4.40.0/docs/data-sources/web_application_firewall_policy#read DataAzurermWebApplicationFirewallPolicy#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference <a name="DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurermWebApplicationFirewallPolicy } from '@cdktf/provider-azurerm'

new dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeouts">DataAzurermWebApplicationFirewallPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAzurermWebApplicationFirewallPolicyTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.dataAzurermWebApplicationFirewallPolicy.DataAzurermWebApplicationFirewallPolicyTimeouts">DataAzurermWebApplicationFirewallPolicyTimeouts</a>

---



