# `azurerm_mobile_network_sim_group`

Refer to the Terraform Registory for docs: [`azurerm_mobile_network_sim_group`](https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_sim_group).

# `mobileNetworkSimGroup` Submodule <a name="`mobileNetworkSimGroup` Submodule" id="@cdktf/provider-azurerm.mobileNetworkSimGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MobileNetworkSimGroup <a name="MobileNetworkSimGroup" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_sim_group azurerm_mobile_network_sim_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.Initializer"></a>

```typescript
import { mobileNetworkSimGroup } from '@cdktf/provider-azurerm'

new mobileNetworkSimGroup.MobileNetworkSimGroup(scope: Construct, id: string, config: MobileNetworkSimGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupConfig">MobileNetworkSimGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupConfig">MobileNetworkSimGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.resetEncryptionKeyUrl">resetEncryptionKeyUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.putIdentity"></a>

```typescript
public putIdentity(value: MobileNetworkSimGroupIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentity">MobileNetworkSimGroupIdentity</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: MobileNetworkSimGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeouts">MobileNetworkSimGroupTimeouts</a>

---

##### `resetEncryptionKeyUrl` <a name="resetEncryptionKeyUrl" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.resetEncryptionKeyUrl"></a>

```typescript
public resetEncryptionKeyUrl(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MobileNetworkSimGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.isConstruct"></a>

```typescript
import { mobileNetworkSimGroup } from '@cdktf/provider-azurerm'

mobileNetworkSimGroup.MobileNetworkSimGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.isTerraformElement"></a>

```typescript
import { mobileNetworkSimGroup } from '@cdktf/provider-azurerm'

mobileNetworkSimGroup.MobileNetworkSimGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.isTerraformResource"></a>

```typescript
import { mobileNetworkSimGroup } from '@cdktf/provider-azurerm'

mobileNetworkSimGroup.MobileNetworkSimGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.generateConfigForImport"></a>

```typescript
import { mobileNetworkSimGroup } from '@cdktf/provider-azurerm'

mobileNetworkSimGroup.MobileNetworkSimGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MobileNetworkSimGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MobileNetworkSimGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MobileNetworkSimGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_sim_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MobileNetworkSimGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference">MobileNetworkSimGroupIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference">MobileNetworkSimGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.encryptionKeyUrlInput">encryptionKeyUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentity">MobileNetworkSimGroupIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.mobileNetworkIdInput">mobileNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeouts">MobileNetworkSimGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.encryptionKeyUrl">encryptionKeyUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.mobileNetworkId">mobileNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.identity"></a>

```typescript
public readonly identity: MobileNetworkSimGroupIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference">MobileNetworkSimGroupIdentityOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.timeouts"></a>

```typescript
public readonly timeouts: MobileNetworkSimGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference">MobileNetworkSimGroupTimeoutsOutputReference</a>

---

##### `encryptionKeyUrlInput`<sup>Optional</sup> <a name="encryptionKeyUrlInput" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.encryptionKeyUrlInput"></a>

```typescript
public readonly encryptionKeyUrlInput: string;
```

- *Type:* string

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.identityInput"></a>

```typescript
public readonly identityInput: MobileNetworkSimGroupIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentity">MobileNetworkSimGroupIdentity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `mobileNetworkIdInput`<sup>Optional</sup> <a name="mobileNetworkIdInput" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.mobileNetworkIdInput"></a>

```typescript
public readonly mobileNetworkIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MobileNetworkSimGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeouts">MobileNetworkSimGroupTimeouts</a>

---

##### `encryptionKeyUrl`<sup>Required</sup> <a name="encryptionKeyUrl" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.encryptionKeyUrl"></a>

```typescript
public readonly encryptionKeyUrl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `mobileNetworkId`<sup>Required</sup> <a name="mobileNetworkId" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.mobileNetworkId"></a>

```typescript
public readonly mobileNetworkId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MobileNetworkSimGroupConfig <a name="MobileNetworkSimGroupConfig" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupConfig.Initializer"></a>

```typescript
import { mobileNetworkSimGroup } from '@cdktf/provider-azurerm'

const mobileNetworkSimGroupConfig: mobileNetworkSimGroup.MobileNetworkSimGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupConfig.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_sim_group#location MobileNetworkSimGroup#location}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupConfig.property.mobileNetworkId">mobileNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_sim_group#mobile_network_id MobileNetworkSimGroup#mobile_network_id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_sim_group#name MobileNetworkSimGroup#name}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupConfig.property.encryptionKeyUrl">encryptionKeyUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_sim_group#encryption_key_url MobileNetworkSimGroup#encryption_key_url}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_sim_group#id MobileNetworkSimGroup#id}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupConfig.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentity">MobileNetworkSimGroupIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_sim_group#tags MobileNetworkSimGroup#tags}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeouts">MobileNetworkSimGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_sim_group#location MobileNetworkSimGroup#location}.

---

##### `mobileNetworkId`<sup>Required</sup> <a name="mobileNetworkId" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupConfig.property.mobileNetworkId"></a>

```typescript
public readonly mobileNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_sim_group#mobile_network_id MobileNetworkSimGroup#mobile_network_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_sim_group#name MobileNetworkSimGroup#name}.

---

##### `encryptionKeyUrl`<sup>Optional</sup> <a name="encryptionKeyUrl" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupConfig.property.encryptionKeyUrl"></a>

```typescript
public readonly encryptionKeyUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_sim_group#encryption_key_url MobileNetworkSimGroup#encryption_key_url}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_sim_group#id MobileNetworkSimGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupConfig.property.identity"></a>

```typescript
public readonly identity: MobileNetworkSimGroupIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentity">MobileNetworkSimGroupIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_sim_group#identity MobileNetworkSimGroup#identity}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_sim_group#tags MobileNetworkSimGroup#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: MobileNetworkSimGroupTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeouts">MobileNetworkSimGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_sim_group#timeouts MobileNetworkSimGroup#timeouts}

---

### MobileNetworkSimGroupIdentity <a name="MobileNetworkSimGroupIdentity" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentity.Initializer"></a>

```typescript
import { mobileNetworkSimGroup } from '@cdktf/provider-azurerm'

const mobileNetworkSimGroupIdentity: mobileNetworkSimGroup.MobileNetworkSimGroupIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentity.property.identityIds">identityIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_sim_group#identity_ids MobileNetworkSimGroup#identity_ids}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_sim_group#type MobileNetworkSimGroup#type}. |

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentity.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_sim_group#identity_ids MobileNetworkSimGroup#identity_ids}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_sim_group#type MobileNetworkSimGroup#type}.

---

### MobileNetworkSimGroupTimeouts <a name="MobileNetworkSimGroupTimeouts" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeouts.Initializer"></a>

```typescript
import { mobileNetworkSimGroup } from '@cdktf/provider-azurerm'

const mobileNetworkSimGroupTimeouts: mobileNetworkSimGroup.MobileNetworkSimGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_sim_group#create MobileNetworkSimGroup#create}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_sim_group#delete MobileNetworkSimGroup#delete}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_sim_group#read MobileNetworkSimGroup#read}. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_sim_group#update MobileNetworkSimGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_sim_group#create MobileNetworkSimGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_sim_group#delete MobileNetworkSimGroup#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_sim_group#read MobileNetworkSimGroup#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.82.0/docs/resources/mobile_network_sim_group#update MobileNetworkSimGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MobileNetworkSimGroupIdentityOutputReference <a name="MobileNetworkSimGroupIdentityOutputReference" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.Initializer"></a>

```typescript
import { mobileNetworkSimGroup } from '@cdktf/provider-azurerm'

new mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.property.identityIdsInput">identityIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.property.identityIds">identityIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentity">MobileNetworkSimGroupIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityIdsInput`<sup>Optional</sup> <a name="identityIdsInput" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.property.identityIdsInput"></a>

```typescript
public readonly identityIdsInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identityIds`<sup>Required</sup> <a name="identityIds" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.property.identityIds"></a>

```typescript
public readonly identityIds: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MobileNetworkSimGroupIdentity;
```

- *Type:* <a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupIdentity">MobileNetworkSimGroupIdentity</a>

---


### MobileNetworkSimGroupTimeoutsOutputReference <a name="MobileNetworkSimGroupTimeoutsOutputReference" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { mobileNetworkSimGroup } from '@cdktf/provider-azurerm'

new mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeouts">MobileNetworkSimGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MobileNetworkSimGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.mobileNetworkSimGroup.MobileNetworkSimGroupTimeouts">MobileNetworkSimGroupTimeouts</a>

---



