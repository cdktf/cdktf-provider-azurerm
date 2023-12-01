# `privateEndpointApplicationSecurityGroupAssociation` Submodule <a name="`privateEndpointApplicationSecurityGroupAssociation` Submodule" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivateEndpointApplicationSecurityGroupAssociation <a name="PrivateEndpointApplicationSecurityGroupAssociation" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/private_endpoint_application_security_group_association azurerm_private_endpoint_application_security_group_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer"></a>

```typescript
import { privateEndpointApplicationSecurityGroupAssociation } from '@cdktf/provider-azurerm'

new privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation(scope: Construct, id: string, config: PrivateEndpointApplicationSecurityGroupAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig">PrivateEndpointApplicationSecurityGroupAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig">PrivateEndpointApplicationSecurityGroupAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: PrivateEndpointApplicationSecurityGroupAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts">PrivateEndpointApplicationSecurityGroupAssociationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PrivateEndpointApplicationSecurityGroupAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isConstruct"></a>

```typescript
import { privateEndpointApplicationSecurityGroupAssociation } from '@cdktf/provider-azurerm'

privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isTerraformElement"></a>

```typescript
import { privateEndpointApplicationSecurityGroupAssociation } from '@cdktf/provider-azurerm'

privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isTerraformResource"></a>

```typescript
import { privateEndpointApplicationSecurityGroupAssociation } from '@cdktf/provider-azurerm'

privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.generateConfigForImport"></a>

```typescript
import { privateEndpointApplicationSecurityGroupAssociation } from '@cdktf/provider-azurerm'

privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PrivateEndpointApplicationSecurityGroupAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PrivateEndpointApplicationSecurityGroupAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PrivateEndpointApplicationSecurityGroupAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/private_endpoint_application_security_group_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PrivateEndpointApplicationSecurityGroupAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference">PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.applicationSecurityGroupIdInput">applicationSecurityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.privateEndpointIdInput">privateEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts">PrivateEndpointApplicationSecurityGroupAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.applicationSecurityGroupId">applicationSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.privateEndpointId">privateEndpointId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference">PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference</a>

---

##### `applicationSecurityGroupIdInput`<sup>Optional</sup> <a name="applicationSecurityGroupIdInput" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.applicationSecurityGroupIdInput"></a>

```typescript
public readonly applicationSecurityGroupIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `privateEndpointIdInput`<sup>Optional</sup> <a name="privateEndpointIdInput" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.privateEndpointIdInput"></a>

```typescript
public readonly privateEndpointIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PrivateEndpointApplicationSecurityGroupAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts">PrivateEndpointApplicationSecurityGroupAssociationTimeouts</a>

---

##### `applicationSecurityGroupId`<sup>Required</sup> <a name="applicationSecurityGroupId" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.applicationSecurityGroupId"></a>

```typescript
public readonly applicationSecurityGroupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `privateEndpointId`<sup>Required</sup> <a name="privateEndpointId" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.privateEndpointId"></a>

```typescript
public readonly privateEndpointId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivateEndpointApplicationSecurityGroupAssociationConfig <a name="PrivateEndpointApplicationSecurityGroupAssociationConfig" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.Initializer"></a>

```typescript
import { privateEndpointApplicationSecurityGroupAssociation } from '@cdktf/provider-azurerm'

const privateEndpointApplicationSecurityGroupAssociationConfig: privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.applicationSecurityGroupId">applicationSecurityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/private_endpoint_application_security_group_association#application_security_group_id PrivateEndpointApplicationSecurityGroupAssociation#application_security_group_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.privateEndpointId">privateEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/private_endpoint_application_security_group_association#private_endpoint_id PrivateEndpointApplicationSecurityGroupAssociation#private_endpoint_id}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/private_endpoint_application_security_group_association#id PrivateEndpointApplicationSecurityGroupAssociation#id}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts">PrivateEndpointApplicationSecurityGroupAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationSecurityGroupId`<sup>Required</sup> <a name="applicationSecurityGroupId" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.applicationSecurityGroupId"></a>

```typescript
public readonly applicationSecurityGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/private_endpoint_application_security_group_association#application_security_group_id PrivateEndpointApplicationSecurityGroupAssociation#application_security_group_id}.

---

##### `privateEndpointId`<sup>Required</sup> <a name="privateEndpointId" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.privateEndpointId"></a>

```typescript
public readonly privateEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/private_endpoint_application_security_group_association#private_endpoint_id PrivateEndpointApplicationSecurityGroupAssociation#private_endpoint_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/private_endpoint_application_security_group_association#id PrivateEndpointApplicationSecurityGroupAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PrivateEndpointApplicationSecurityGroupAssociationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts">PrivateEndpointApplicationSecurityGroupAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/private_endpoint_application_security_group_association#timeouts PrivateEndpointApplicationSecurityGroupAssociation#timeouts}

---

### PrivateEndpointApplicationSecurityGroupAssociationTimeouts <a name="PrivateEndpointApplicationSecurityGroupAssociationTimeouts" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts.Initializer"></a>

```typescript
import { privateEndpointApplicationSecurityGroupAssociation } from '@cdktf/provider-azurerm'

const privateEndpointApplicationSecurityGroupAssociationTimeouts: privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/private_endpoint_application_security_group_association#create PrivateEndpointApplicationSecurityGroupAssociation#create}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/private_endpoint_application_security_group_association#delete PrivateEndpointApplicationSecurityGroupAssociation#delete}. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/private_endpoint_application_security_group_association#read PrivateEndpointApplicationSecurityGroupAssociation#read}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/private_endpoint_application_security_group_association#create PrivateEndpointApplicationSecurityGroupAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/private_endpoint_application_security_group_association#delete PrivateEndpointApplicationSecurityGroupAssociation#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.83.0/docs/resources/private_endpoint_application_security_group_association#read PrivateEndpointApplicationSecurityGroupAssociation#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference <a name="PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { privateEndpointApplicationSecurityGroupAssociation } from '@cdktf/provider-azurerm'

new privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts">PrivateEndpointApplicationSecurityGroupAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrivateEndpointApplicationSecurityGroupAssociationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-azurerm.privateEndpointApplicationSecurityGroupAssociation.PrivateEndpointApplicationSecurityGroupAssociationTimeouts">PrivateEndpointApplicationSecurityGroupAssociationTimeouts</a>

---



